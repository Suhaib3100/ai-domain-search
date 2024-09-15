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
import HostingInfo from "../../../Front/WhoisHosting/HostingInfo";
export default function CheckHosting() {
  const [loading, setLoading] = useState(false);
  const [topTitle, setTopTitle] = useState("");
  const [middleDescription, setMiddleDescription] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/who-is-hosting/check-hosting-data", {
        topTitle,
        middleDescription,
        leftButtonText,
        leftButtonLink,
        rightButtonText,
        rightButtonLink,
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
    axios.get("/api/who-is-hosting/check-hosting-data").then((res) => {
      if (res.data?.checkHosting) {
        setTopTitle(res.data?.checkHosting?.topTitle);
        setMiddleDescription(res.data?.checkHosting.middleDescription);
        setLeftButtonText(res.data?.checkHosting.leftButtonText);
        setLeftButtonLink(res.data?.checkHosting.leftButtonLink);
        setRightButtonText(res.data?.checkHosting.rightButtonText);
        setRightButtonLink(res.data?.checkHosting.rightButtonLink);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Who is Hosting
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={topTitle}
            onChange={(e) => setTopTitle(e.target.value)}
            type="text"
            label="Top Title"
          />
          <Spacer y="1" />
          <Input
            value={middleDescription}
            onChange={(e) => setMiddleDescription(e.target.value)}
            type="text"
            label="Middle Text Description"
          />
          <Spacer y="1" />
          <Input
            value={leftButtonText}
            onChange={(e) => setLeftButtonText(e.target.value)}
            type="text"
            label="Left Button Text"
          />
          <Spacer y="1" />
          <Input
            value={leftButtonLink}
            onChange={(e) => setLeftButtonLink(e.target.value)}
            type="text"
            label="Left Button Link"
          />
          <Spacer y="1" />
          <Input
            value={rightButtonText}
            onChange={(e) => setRightButtonText(e.target.value)}
            type="text"
            label="Right Button Text"
          />
          <Spacer y="1" />
          <Input
            value={rightButtonLink}
            onChange={(e) => setRightButtonLink(e.target.value)}
            type="text"
            label="Right Button Link"
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
      <HostingInfo />
    </Card>
  );
}
