import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hero_18 from "../../Front/Hero/Hero_18";
export default function HeroAdmin_18({ dbCollection, item }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [gradientText, setGradientText] = useState("");
  const [svgText, setSvgText] = useState("");
  const [enable, setEnable] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [buttonLink, setButtonLink] = useState("");

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        desc,
        enable,
        buttonText,
        buttonLink,
        gradientText,
        svgText,

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
        if (res.data?.hero_18) {
          setEnable(res.data?.hero_18?.enable);
          setTitle(res.data?.hero_18?.title);
          setDesc(res.data?.hero_18?.desc);
          setGradientText(res.data?.hero_18?.gradientText);
          setSvgText(res.data?.hero_18?.svgText);
          setButtonText(res.data?.hero_18?.buttonText);
          setButtonLink(res.data?.hero_18?.buttonLink);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 18
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          label="Main Title"
        />
        <Spacer y="2" />
        <Input
          value={gradientText}
          onChange={(e) => setGradientText(e.target.value)}
          type="text"
          label=" Gradient Text"
        />
        <Spacer y="2" />
        <Input
          value={svgText}
          onChange={(e) => setSvgText(e.target.value)}
          type="text"
          label=" SVG Text"
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
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            type="text"
            label=" Button Text"
          />
          {/* <Spacer y="1" /> */}
          <Input
            value={buttonLink}
            onChange={(e) => setButtonLink(e.target.value)}
            type="text"
            label=" Button Link"
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
      <Hero_18 data={{ enable: true }} />
    </div>
  );
}
