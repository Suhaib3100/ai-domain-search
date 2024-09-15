import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function FeatureList() {
  const [loading, setLoading] = useState(false);
  const [mainTitle, setMainTitle] = useState("");
  const [mainDesc, setMainDesc] = useState("");
  const [featureTitle1, setFeatureTitle1] = useState("");
  const [featureDesc1, setFeatureDesc1] = useState("");
  const [featureTitle2, setFeatureTitle2] = useState("");
  const [featureDesc2, setFeatureDesc2] = useState("");
  const [featureTitle3, setFeatureTitle3] = useState("");
  const [featureDesc3, setFeatureDesc3] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/home-page/feature-list", {
        mainTitle,
        mainDesc,
        featureTitle1,
        featureDesc1,
        featureTitle2,
        featureDesc2,
        featureTitle3,
        featureDesc3,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/home-page/feature-list").then((res) => {
      if (res.data?.featureList) {
        setMainTitle(res.data?.featureList?.mainTitle);
        setMainDesc(res.data?.featureList?.mainDesc);
        setFeatureTitle1(res.data?.featureList?.featureTitle1);
        setFeatureDesc1(res.data?.featureList?.featureDesc1);
        setFeatureTitle2(res.data?.featureList?.featureTitle2);
        setFeatureDesc2(res.data?.featureList?.featureDesc2);
        setFeatureTitle3(res.data?.featureList?.featureTitle3);
        setFeatureDesc3(res.data?.featureList?.featureDesc3);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Features Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={mainTitle}
            onChange={(e) => setMainTitle(e.target.value)}
            type="text"
            label="Feature Main Title"
          />
          <Spacer y="2" />
          <Textarea
            value={mainDesc}
            onChange={(e) => setMainDesc(e.target.value)}
            type="text"
            label="Feature Main Description"
          />
          <Spacer y="2" />
          <Divider />
          <Spacer y="2" />
          <Input
            value={featureTitle1}
            onChange={(e) => setFeatureTitle1(e.target.value)}
            type="text"
            label="Feature 1"
          />
          <Spacer y="2" />
          <Textarea
            value={featureDesc1}
            onChange={(e) => setFeatureDesc1(e.target.value)}
            type="text"
            label="Description 1"
          />
          <Spacer y="2" />
          <Input
            value={featureTitle2}
            onChange={(e) => setFeatureTitle2(e.target.value)}
            type="text"
            label="Feature 2"
          />
          <Spacer y="2" />
          <Textarea
            value={featureDesc2}
            onChange={(e) => setFeatureDesc2(e.target.value)}
            type="text"
            label="Description 2"
          />
          <Spacer y="2" />
          <Input
            value={featureTitle3}
            onChange={(e) => setFeatureTitle3(e.target.value)}
            type="text"
            label="Feature 3"
          />
          <Spacer y="2" />
          <Textarea
            value={featureDesc3}
            onChange={(e) => setFeatureDesc3(e.target.value)}
            type="text"
            label="Description 3"
          />

          <Spacer y="4" />
          <Button
            size="md"
            color="secondary"
            variant="shadow"
            isLoading={loading}
            onPress={handleSave}
          >
            Save
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
