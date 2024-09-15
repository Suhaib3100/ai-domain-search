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
export default function CTA() {
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");

  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");
  const [loading, setLoading] = useState(false);

  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/home-page/cta", {
        buttonText,
        buttonLink,
        title,
        leftButtonText,
        leftButtonLink,
        rightButtonText,
        rightButtonLink,
        desc,
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
    axios.get("/api/home-page/cta").then((res) => {
      if (res.data?.cta) {
        setButtonText(res.data?.cta?.buttonText);
        setButtonLink(res.data?.cta?.buttonLink);
        setTitle(res.data?.cta?.title);
        setDesc(res.data?.cta?.desc);
        setLeftButtonText(res.data?.cta?.leftButtonText);
        setLeftButtonLink(res.data?.cta?.leftButtonLink);
        setRightButtonText(res.data?.cta?.rightButtonText);
        setRightButtonLink(res.data?.cta?.rightButtonLink);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Call To Action Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <div className="flex">
            <Input
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              type="text"
              label="Top Button Text"
            />
            <Spacer y="1" />
            <Input
              value={buttonLink}
              onChange={(e) => setButtonLink(e.target.value)}
              type="text"
              label="Top Button Link"
            />
          </div>
          <Spacer y="2" />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Main Title"
          />
          <Spacer y="1" />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Description"
          />
          <Spacer y="2" />
          <div className="flex flex-col md:flex-row">
            <div className="w-full">
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
            </div>
            <Spacer X={"2"} />
            <div className="w-full">
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
