import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Divider,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TextEditor from "../../Editor";

export default function Content({ dbCollection, item }) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [enable, setEnable] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        content,
        token,
        dbCollection,
        item,
        enable,
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
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.content) {
          setEnable(res.data?.content?.enable);
          setContent(res.data?.content?.content);
        }
      });
  }, []);
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">Content</h4>
      </CardHeader>
      <Divider />

      <CardBody>
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>
        <Spacer y="4" />
        <div>
          <TextEditor
            setDefaultStyle="font-size:20px;"
            height="100vh"
            setContent={content}
            onChange={(e) => setContent(e)}
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
