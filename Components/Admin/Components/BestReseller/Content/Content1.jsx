import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import TextEditor from "../../../../ReUsable/Editor";
import toast, { Toaster } from "react-hot-toast";
export default function BestResellerContent1() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/best-reseller-hosting/content-1", { content, token })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/best-reseller-hosting/content-1").then((res) => {
      if (res.data?.content1) {
        setContent(res.data?.content1?.content);
      }
    });
  }, []);
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Content 1 Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <TextEditor
            setDefaultStyle="font-size:20px;"
            height="100vh"
            setContent={content}
            onChange={(e) => setContent(e)}
          />
        </div>
        <Spacer y="4" />
        <div>
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
