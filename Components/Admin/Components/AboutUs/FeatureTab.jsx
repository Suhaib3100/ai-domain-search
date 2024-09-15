import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FeatureTab() {
  const [tabTitle, setTabTitle] = useState("");

  const [tab1Title, setTab1Title] = useState("");
  const [tab1Desc, setTab1Desc] = useState("");
  const [tab1Image, setTab1Image] = useState("");

  const [tab2Title, setTab2Title] = useState("");
  const [tab2Desc, setTab2Desc] = useState("");
  const [tab2Image, setTab2Image] = useState("");

  const [tab3Title, setTab3Title] = useState("");
  const [tab3Desc, setTab3Desc] = useState("");
  const [tab3Image, setTab3Image] = useState("");

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("lg_tk");

  const formData = new FormData();
  formData.append("tabTitle", tabTitle);

  formData.append("tab1Title", tab1Title);
  formData.append("tab1Desc", tab1Desc);
  formData.append("tabImage", tab1Image);

  formData.append("tab2Title", tab2Title);
  formData.append("tab2Desc", tab2Desc);
  formData.append("tabImage", tab2Image);

  formData.append("tab3Title", tab3Title);
  formData.append("tab3Desc", tab3Desc);
  formData.append("tabImage", tab3Image);

  formData.append("token", token);

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/about-us/feature-tab", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/about-us/feature-tab").then((res) => {
      if (res.data?.featureTab) {
        setTabTitle(res.data?.featureTab?.tabTitle);
        setTab1Desc(res.data?.featureTab?.tab1Title);
        setTab1Desc(res.data?.featureTab?.tab1Desc);
        setTab2Title(res.data?.featureTab?.tab2Title);
        setTab2Desc(res.data?.featureTab?.tab2Desc);
        setTab3Title(res.data?.featureTab?.tab3Title);
        setTab3Desc(res.data?.featureTab?.tab3Desc);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Feature Tab Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={tabTitle}
            onChange={(e) => setTabTitle(e.target.value)}
            type="text"
            label="Feature Tab Heading"
          />
          <Spacer y="2" />

          <Input
            value={tab1Title}
            onChange={(e) => setTab1Title(e.target.value)}
            type="text"
            label="Tab 1 Title"
          />
          <Spacer y="2" />
          <Input
            value={tab1Desc}
            onChange={(e) => setTab1Desc(e.target.value)}
            type="text"
            label="Tab 1 Description"
          />
          <Spacer y="2" />

          <Input
            type="file"
            labelPlacement="outside-left"
            label="Tab 1 Image"
            placeholder="image"
            onChange={(e) => setTab1Image(e.target.files[0])}
          />
          <Spacer y="2" />

          <Input
            value={tab2Title}
            onChange={(e) => setTab2Title(e.target.value)}
            type="text"
            label="Tab 2 Title"
          />
          <Spacer y="2" />
          <Input
            value={tab2Desc}
            onChange={(e) => setTab2Desc(e.target.value)}
            type="text"
            label="Tab 2 Description"
          />

          <Spacer y="2" />
          <Input
            type="file"
            labelPlacement="outside-left"
            label="Tab 2 Image"
            placeholder="image"
            onChange={(e) => setTab2Image(e.target.files[0])}
          />
          <Spacer y="2" />
          <Input
            value={tab3Title}
            onChange={(e) => setTab3Title(e.target.value)}
            type="text"
            label="Tab 3 Title"
          />
          <Spacer y="2" />
          <Input
            value={tab3Desc}
            onChange={(e) => setTab3Desc(e.target.value)}
            type="text"
            label="Tab 3 Description"
          />
          <Spacer y="2" />
          <Input
            type="file"
            labelPlacement="outside-left"
            label="Tab 3 Image"
            placeholder="image"
            onChange={(e) => setTab3Image(e.target.files[0])}
          />

          <Spacer y="4" />
          <Button
            size="md"
            color="secondary"
            variant="shadow"
            // isLoading={loading}
            onPress={handleSave}
          >
            Save
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
