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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [ratingText, setRatingText] = useState("");
  // const [rightImage, setRightImage] = useState("");
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const formData = new FormData();
  // formData.append("newsText", newsText);
  // formData.append("newsLink", newsLink);
  // formData.append("title", title);
  // formData.append("desc", desc);
  // formData.append("rightImage", rightImage);
  // formData.append("token", token);

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/home-page/hero", {
        title,
        desc,
        buttonText,
        ratingText,
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
    axios.get("/api/home-page/hero").then((res) => {
      setTitle(res.data?.hero?.title);
      setDesc(res.data?.hero?.desc);
      setButtonText(res.data?.hero?.buttonText);
      setRatingText(res.data?.hero?.ratingText);
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
          <Spacer y="2" />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Description"
          />
          <Spacer y="2" />
          <Input
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            type="text"
            label="Button Text"
          />
          <Spacer y="2" />
          <Input
            value={ratingText}
            onChange={(e) => setRatingText(e.target.value)}
            type="text"
            label="Start Rating Text"
          />
          {/* <Spacer y="2" />
          <Input
            type="file"
            labelPlacement="outside-left"
            label="Hero Image"
            placeholder="image"
            onChange={(e) => setRightImage(e.target.files[0])}
          /> */}
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
