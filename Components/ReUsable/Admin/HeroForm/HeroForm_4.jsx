import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeroForm_4 from "../../Front/HeroForm/HeroForm_4";
export default function AdminHeroForm_4({ dbCollection, item }) {
  const [topButtonText, setTopButtonText] = useState("");
  const [topButtonLink, setTopButtonLink] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [enable, setEnable] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        topButtonText,
        topButtonLink,
        title,
        desc,
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
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.hero_form_4) {
          setTopButtonText(res.data?.hero_form_4?.topButtonText);
          setTopButtonLink(res.data?.hero_form_4?.topButtonLink);
          setEnable(res.data?.hero_form_4?.enable);
          setTitle(res.data?.hero_form_4?.title);
          setDesc(res.data?.hero_form_4?.desc);
          setButtonText(res.data?.hero_form_4?.buttonText);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 4
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
          value={topButtonLink}
          onChange={(e) => setTopButtonLink(e.target.value)}
          type="text"
          label="Top Buton Link"
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
          value={buttonText}
          onChange={(e) => setButtonText(e.target.value)}
          type="text"
          label="Search Button Text"
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
      <HeroForm_4 data={{ enable: true }} />
    </div>
  );
}
