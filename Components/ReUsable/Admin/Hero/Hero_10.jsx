import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hero_10 from "../../Front/Hero/Hero_10";

export default function HeroAdmin_10({ dbCollection, item }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [enable, setEnable] = useState(false);
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");

  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");

  const [topButtonText, setTopButtonText] = useState("");

  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        desc,
        enable,
        leftButtonText,
        leftButtonLink,
        rightButtonText,
        rightButtonLink,
        topButtonText,
        feature1,
        feature2,
        feature3,
        token,
        dbCollection,
        item,
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
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.hero_10) {
          setEnable(res.data?.hero_10?.enable);
          setTitle(res.data?.hero_10?.title);
          setDesc(res.data?.hero_10?.desc);
          setLeftButtonText(res.data?.hero_10?.leftButtonText);
          setLeftButtonLink(res.data?.hero_10?.leftButtonLink);
          setRightButtonText(res.data?.hero_10?.rightButtonText);
          setRightButtonLink(res.data?.hero_10?.rightButtonLink);
          setTopButtonText(res.data?.hero_10?.topButtonText);
          setFeature1(res.data?.hero_10?.feature1);
          setFeature2(res.data?.hero_10?.feature2);
          setFeature3(res.data?.hero_10?.feature3);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 10
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />

        <Input
          value={topButtonText}
          onChange={(e) => setTopButtonText(e.target.value)}
          type="text"
          label="Top Button Text"
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
        <div className="grid grid-cols-2 gap-2 ">
          <Input
            value={leftButtonText}
            onChange={(e) => setLeftButtonText(e.target.value)}
            type="text"
            label="Left Button Text"
          />
          {/* <Spacer y="1" /> */}
          <Input
            value={leftButtonLink}
            onChange={(e) => setLeftButtonLink(e.target.value)}
            type="text"
            label="Left Button Link"
          />
          <Input
            value={rightButtonText}
            onChange={(e) => setRightButtonText(e.target.value)}
            type="text"
            label="Right Button Text"
          />
          {/* <Spacer y="1" /> */}
          <Input
            value={rightButtonLink}
            onChange={(e) => setRightButtonLink(e.target.value)}
            type="text"
            label="Right Button Link"
          />
        </div>
        <Spacer y="2" />
        <div className="grid grid-cols-3 gap-2">
          <Input
            value={feature1}
            onChange={(e) => setFeature1(e.target.value)}
            type="text"
            label="Feature Card 1 Text"
          />
          <Input
            value={feature2}
            onChange={(e) => setFeature2(e.target.value)}
            type="text"
            label="Feature Card 2 Text"
          />
          <Input
            value={feature3}
            onChange={(e) => setFeature3(e.target.value)}
            type="text"
            label="Feature Card 3 Text"
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
      <Hero_10 data={{ enable: true }} />
    </div>
  );
}
