import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hero_6 from "../../Front/Hero/Hero_6";
export default function HeroAdmin_6({ storagePath, dbCollection }) {
  const [iconText1, setIconText1] = useState("");
  const [iconText2, setIconText2] = useState("");
  const [iconText3, setIconText3] = useState("");
  const [title, setTitle] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [desc, setDesc] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);

  const formData = new FormData();
  formData.append("iconText1", iconText1);
  formData.append("iconText2", iconText2);
  formData.append("iconText3", iconText3);
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("heroImage", heroImage);
  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);
  formData.append("rightButtonText", rightButtonText);
  formData.append("rightButtonLink", rightButtonLink);

  formData.append("enable", enable);
  formData.append("storagePath", storagePath);
  formData.append("dbCollection", dbCollection);

  const handleSave = (e) => {
    const token = localStorage.getItem("lg_tk");
    formData.append("token", token);

    setLoading(true);
    axios
      .post("/api/hero/hero-6", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/hero/hero-6", { params: { dbCollection } }).then((res) => {
      if (res.data?.hero_6) {
        setEnable(res.data?.hero_6?.enable);
        setIconText1(res.data?.hero_6?.iconText1);
        setIconText2(res.data?.hero_6?.iconText2);
        setIconText3(res.data?.hero_6?.iconText3);
        setTitle(res.data?.hero_6?.title);
        setDesc(res.data?.hero_6?.desc);
        setLeftButtonText(res.data?.hero_6?.leftButtonText);
        setLeftButtonLink(res.data?.hero_6?.leftButtonLink);
        setRightButtonText(res.data?.hero_6?.rightButtonText);
        setRightButtonLink(res.data?.hero_6?.rightButtonLink);
      }
    });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 6
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>
        <Spacer y="4" />
        <div className="flex gap-2">
          <Input
            value={iconText1}
            onChange={(e) => setIconText1(e.target.value)}
            type="text"
            label="Icon 1 Text"
          />

          <Input
            value={iconText2}
            onChange={(e) => setIconText2(e.target.value)}
            type="text"
            label="Icon 2 Text"
          />

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
          onChange={(e) => setHeroImage(e.target.files[0])}
        />
        <Spacer y="3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            value={leftButtonText}
            onChange={(e) => setLeftButtonText(e.target.value)}
            type="text"
            label="Left Button Text"
          />

          <Input
            value={leftButtonLink}
            onChange={(e) => setLeftButtonLink(e.target.value)}
            type="text"
            label="Left Button Affiliate Link"
          />

          <Input
            value={rightButtonText}
            onChange={(e) => setRightButtonText(e.target.value)}
            type="text"
            label="Right Button Text"
          />

          <Input
            value={rightButtonLink}
            onChange={(e) => setRightButtonLink(e.target.value)}
            type="text"
            label="Right Button Affiliate Link"
          />
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

      <Divider />
      <Hero_6 data={{ enable: true }} />
    </div>
  );
}
