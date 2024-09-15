import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeroForm_1 from "../../Front/HeroForm/HeroForm_1";
export default function AdminHeroForm_1({ dbCollection, item }) {
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
        toast.error("Some Error Occurred", err, { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.hero_form_1) {
          setEnable(res.data?.hero_form_1?.enable);
          setTitle(res.data?.hero_form_1?.title);
          setDesc(res.data?.hero_form_1?.desc);
          setButtonText(res.data?.hero_form_1?.buttonText);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">Hero 1</h4>
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
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            type="text"
            label="Button Text"
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
      <HeroForm_1 data={{ enable: true }} />
    </div>
  );
}
