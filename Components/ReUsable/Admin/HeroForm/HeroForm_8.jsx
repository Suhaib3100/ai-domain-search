import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeroForm_8 from "../../Front/HeroForm/HeroForm_8";

export default function AdminHeroForm_8({ dbCollection, item }) {
  const [topButtonText, setTopButtonText] = useState("");
  const [title, setTitle] = useState("");
  const [svgText, setSvgText] = useState("");
  const [enable, setEnable] = useState(false);
  const [buttonText, setButtonText] = useState("");
  // const [recommendedText, setRecommendedText] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        topButtonText,
        title,
        svgText,
        // recommendedText,
        enable,
        buttonText,
        token,
        dbCollection,
        item,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.hero_form_8) {
          setEnable(res.data?.hero_form_8?.enable);
          setTopButtonText(res.data?.hero_form_8?.topButtonText);
          setTitle(res.data?.hero_form_8?.title);
          setSvgText(res.data?.hero_form_8?.svgText);
          setButtonText(res.data?.hero_form_8?.buttonText);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 8
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <div className="grid grid-cols-2 gap-2 ">
          <Input
            value={topButtonText}
            onChange={(e) => setTopButtonText(e.target.value)}
            type="text"
            label="Top Button Text"
          />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Main Title"
          />
          {/* <Spacer y="2" /> */}
          <Input
            value={svgText}
            onChange={(e) => setSvgText(e.target.value)}
            type="text"
            label="SVG Text"
          />
          {/* <Spacer y="2" /> */}
          <Input
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            type="text"
            label="Search Button Text"
          />
          {/* <Input
            value={recommendedText}
            onChange={(e) => setRecommendedText(e.target.value)}
            type="text"
            label="Recent Search Buttons"
          /> */}
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
      <HeroForm_8 data={{ enable: true }} />
    </div>
  );
}
