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
export default function Hero() {
  //   const [newsText, setNewsText] = useState("");
  //   const [newsLink, setNewsLink] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/hosting-coupon/hero", {
        title,
        desc,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/hosting-coupon/hero").then((res) => {
      if (res.data?.hero) {
        setTitle(res.data?.hero?.title);
        setDesc(res.data?.hero?.desc);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Title"
          />
          <Spacer y="1" />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Description"
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
