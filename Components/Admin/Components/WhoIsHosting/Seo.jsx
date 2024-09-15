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
export default function Seo({ dbCollection }) {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");

  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/seo", {
        title,
        metaDesc,
        dbCollection,
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
    axios.post("/api/seo/get", { dbCollection }).then((res) => {
      if (res.data?.seo) {
        setTitle(res.data?.seo?.title);
        setMetaDesc(res.data?.seo?.metaDesc);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">Seo Settings</h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Page Seo Title"
          />
          <Spacer y="1" />
          <Textarea
            value={metaDesc}
            onChange={(e) => setMetaDesc(e.target.value)}
            type="text"
            label="Page Meta Description"
            labelPlacement="inside"
          />
          <Spacer y="1" />

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
