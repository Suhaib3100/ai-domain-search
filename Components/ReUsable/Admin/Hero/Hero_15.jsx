import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hero_14 from "../../Front/Hero/Hero_14";
import Hero_15 from "../../Front/Hero/Hero_15";

export default function HeroAdmin_15({ storagePath, dbCollection }) {
  const [topTitle, setTopTitle] = useState("");
  const [topDesc, setTopDesc] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [enable, setEnable] = useState(false);
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");

  const [heroImage, setHeroImage] = useState("");
  const [loading, setLoading] = useState(false);

  const formData = new FormData();
  formData.append("topTitle", topTitle);
  formData.append("topDesc", topDesc);
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);

  formData.append("enable", enable);
  formData.append("storagePath", storagePath);
  formData.append("dbCollection", dbCollection);

  const handleSave = (e) => {
    const token = localStorage.getItem("lg_tk");
    formData.append("token", token);
    formData.append("heroImage", heroImage);
    setLoading(true);
    axios
      .post("/api/hero/hero-15", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/hero/hero-15", { params: { dbCollection } }).then((res) => {
      console.log(res.data);
      if (res.data?.hero_15) {
        setEnable(res.data?.hero_15?.enable);
        setTitle(res.data?.hero_15?.title);
        setDesc(res.data?.hero_15?.desc);
        setLeftButtonText(res.data?.hero_15?.leftButtonText);
        setLeftButtonLink(res.data?.hero_15?.leftButtonLink);
        setTopTitle(res.data?.hero_15?.topTitle);
        setTopDesc(res.data?.hero_15?.topDesc);
      }
    });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 15
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={topTitle}
            onChange={(e) => setTopTitle(e.target.value)}
            type="text"
            label="Top Title"
          />
          <Input
            value={topDesc} // as Button Text
            onChange={(e) => setTopDesc(e.target.value)}
            type="text"
            label="Top Button Text"
          />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Title"
          />

          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Description"
          />
        </div>
        <Spacer y="2" />

        <div className="grid grid-cols-2 gap-2 ">
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
        </div>
        <Spacer y="2" />

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
      <Hero_15 data={{ enable: true }} />
    </div>
  );
}
