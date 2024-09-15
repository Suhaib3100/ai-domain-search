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
export default function NavContent() {
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("lg_tk");

  const formData = new FormData();
  formData.append("image", image);
  formData.append("desc", desc);
  formData.append("token", token);

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/hosting-coupon/nav", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/hosting-coupon/nav").then((res) => {
      if (res.data?.nav) {
        setDesc(res.data?.nav?.desc);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Nav Menu Content
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            label="Nav Bar Image"
            labelPlacement="outside-left"
          />
          <Spacer y="2" />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Coupon Menu Description"
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
