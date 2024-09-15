import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hero_6 from "../../Front/Hero/Hero_6";
import Hero_13 from "../../Front/Hero/Hero_13";
export default function HeroAdmin_13({ storagePath, dbCollection }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [enable, setEnable] = useState(false);
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");
  const [rightText, setRightText] = useState("");

  const [starText1, setStarText1] = useState("");
  const [starText2, setStarText2] = useState("");

  const [heroImage, setHeroImage] = useState("");
  const [loading, setLoading] = useState(false);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);
  formData.append("rightText", rightText);

  formData.append("starText1", starText1);
  formData.append("starText2", starText2);

  formData.append("enable", enable);
  formData.append("storagePath", storagePath);
  formData.append("dbCollection", dbCollection);

  const handleSave = (e) => {
    const token = localStorage.getItem("lg_tk");
    formData.append("token", token);
    formData.append("heroImage", heroImage);
    setLoading(true);
    axios
      .post("/api/hero/hero-13", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/hero/hero-13", { params: { dbCollection } }).then((res) => {
      if (res.data?.hero_13) {
        setEnable(res.data?.hero_13?.enable);
        setTitle(res.data?.hero_13?.title);
        setDesc(res.data?.hero_13?.desc);
        setLeftButtonText(res.data?.hero_13?.leftButtonText);
        setLeftButtonLink(res.data?.hero_13?.leftButtonLink);
        setRightText(res.data?.hero_13?.rightText);
        setStarText1(res.data?.hero_13?.starText1);
        setStarText2(res.data?.hero_13?.starText2);
      }
    });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 13
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />

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

        <div className="grid grid-cols-3 gap-2">
          <Input
            value={leftButtonText}
            onChange={(e) => setLeftButtonText(e.target.value)}
            type="text"
            label="Button Text"
          />
          {/* <Spacer y="1" /> */}
          <Input
            value={leftButtonLink}
            onChange={(e) => setLeftButtonLink(e.target.value)}
            type="text"
            label="Button Link"
          />
          {/* <Spacer y="1" /> */}

          <Input
            value={rightText}
            onChange={(e) => setRightTexdt(e.target.value)}
            type="text"
            label="Button's Right Text"
          />
        </div>
        <Spacer y="2" />
        <div className="grid grid-cols-3 gap-2">
          <Input
            value={starText1}
            onChange={(e) => setStarText1(e.target.value)}
            type="text"
            label="Star 1 Text"
          />

          <Input
            value={starText2}
            onChange={(e) => setStarText2(e.target.value)}
            type="text"
            label="Star 2 Text"
          />
        </div>
        <Spacer y="3" />
        <Input
          onChange={(e) => setHeroImage(e.target.files[0])}
          type="file"
          labelPlacement="outside-left"
          label="Hero Image"
          placeholder="Hero Image"
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

      <Divider />
      <Hero_13 data={{ enable: true }} />
    </div>
  );
}
