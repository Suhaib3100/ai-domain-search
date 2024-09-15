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
  const [iconText1, setIconText1] = useState("");
  const [iconText2, setIconText2] = useState("");
  const [iconText3, setIconText3] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");

  const token = localStorage.getItem("lg_tk");
  const formData = new FormData();

  formData.append("iconText1", iconText1);
  formData.append("iconText2", iconText2);
  formData.append("iconText3", iconText3);
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("image", image);
  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);
  formData.append("rightButtonText", rightButtonText);
  formData.append("rightButtonLink", rightButtonLink);
  formData.append("token", token);
  const [loading, setLoading] = useState(false);
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/best-wp-themes/hero", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/best-wp-themes/hero").then((res) => {
      if (res.data?.hero) {
        setIconText1(res.data?.hero?.iconText1);
        setIconText2(res.data?.hero?.iconText2);
        setIconText3(res.data?.hero?.iconText3);
        setTitle(res.data?.hero?.title);
        setDesc(res.data?.hero?.desc);
        setLeftButtonText(res.data?.hero?.leftButtonText);
        setLeftButtonLink(res.data?.hero?.leftButtonLink);
        setRightButtonText(res.data?.hero?.rightButtonText);
        setRightButtonLink(res.data?.hero?.rightButtonLink);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Best WordPress Themes
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <div className="flex">
            <Input
              value={iconText1}
              onChange={(e) => setIconText1(e.target.value)}
              type="text"
              label="Icon 1 Text"
            />
            <Spacer x="1" />
            <Input
              value={iconText2}
              onChange={(e) => setIconText2(e.target.value)}
              type="text"
              label="Icon 2 Text"
            />
            <Spacer x="1" />
            <Input
              value={iconText3}
              onChange={(e) => setIconText3(e.target.value)}
              type="text"
              label="Icon 3 Text"
            />
          </div>
          <Spacer y="3" />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Main Title"
          />
          <Spacer y="2" />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Description"
          />
          <Spacer y="3" />
          <Input
            type="file"
            labelPlacement="outside-left"
            label="Image"
            placeholder="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Spacer y="3" />
          <div className="flex  justify-between items-center">
            <div className="w-full mb-2 mr-3">
              <Input
                value={leftButtonText}
                onChange={(e) => setLeftButtonText(e.target.value)}
                type="text"
                label="Left Button Text"
              />
              <Spacer y="2" />
              <Input
                value={leftButtonLink}
                onChange={(e) => setLeftButtonLink(e.target.value)}
                type="text"
                label="Left Button Affiliate Link"
              />
            </div>
            <div className="w-full">
              <Input
                value={rightButtonText}
                onChange={(e) => setRightButtonText(e.target.value)}
                type="text"
                label="Right Button Text"
              />
              <Spacer y="2" />
              <Input
                value={rightButtonLink}
                onChange={(e) => setRightButtonLink(e.target.value)}
                type="text"
                label="Right Button Affiliate Link"
              />
            </div>
          </div>
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
