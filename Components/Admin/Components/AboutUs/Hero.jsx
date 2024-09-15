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
  const [topTitle, setTopTitle] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [rightImage, setRightImage] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState("");

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("lg_tk");

  const formData = new FormData();
  formData.append("topTitle", topTitle);
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("rightImage", rightImage);
  formData.append("buttonText", buttonText);
  formData.append("buttonLink", buttonLink);

  formData.append("token", token);

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/about-us/hero", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/about-us/hero").then((res) => {
      if (res.data?.hero) {
        setTopTitle(res.data?.hero?.topTitle);
        setButtonText(res.data?.hero?.buttonText);
        setButtonLink(res.data?.hero?.buttonLink);
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
            value={topTitle}
            onChange={(e) => setTopTitle(e.target.value)}
            type="text"
            label="Top Title Text"
          />
          <Spacer y="2" />

          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Title"
          />
          <Spacer y="2" />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Description"
          />
          <Spacer y="2" />

          <Input
            type="file"
            labelPlacement="outside-left"
            label="Hero Image"
            placeholder="image"
            onChange={(e) => setRightImage(e.target.files[0])}
          />
          <Spacer y="2" />
          <Input
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            type="text"
            label="Left Button Text"
          />
          <Spacer y="2" />
          <Input
            value={buttonLink}
            onChange={(e) => setButtonLink(e.target.value)}
            type="text"
            label="Left Button Link"
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
