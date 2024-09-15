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
export default function Footer() {
  const [copyRight, setCopyRight] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [facebookHandle, setFacebookHandle] = useState("");

  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/footer/footer-content", {
        copyRight,
        twitterHandle,
        instagramHandle,
        facebookHandle,
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
    axios.get("/api/footer/footer-content").then((res) => {
      if (res.data?.footerContent) {
        setCopyRight(res.data?.footerContent?.copyRight);
        setTwitterHandle(res.data?.footerContent?.twitterHandle);
        setInstagramHandle(res.data?.footerContent?.instagramHandle);
        setFacebookHandle(res.data?.footerContent?.facebookHandle);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Footer Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={copyRight}
            onChange={(e) => setCopyRight(e.target.value)}
            type="text"
            label="Copyright Text"
          />
          <Spacer y="1" />
          <Input
            value={twitterHandle}
            onChange={(e) => setTwitterHandle(e.target.value)}
            type="text"
            label="Your site's Twitter handle"
          />
          <Spacer y="1" />
          <Input
            value={instagramHandle}
            onChange={(e) => setInstagramHandle(e.target.value)}
            type="text"
            label="Your site's Instagram handle"
          />
          <Spacer y="1" />
          <Input
            value={facebookHandle}
            onChange={(e) => setFacebookHandle(e.target.value)}
            type="text"
            label="Your site's Facebook handle"
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
