import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeroForm_2 from "../../Front/HeroForm/HeroForm_2";
export default function AdminHeroForm_2({ dbCollection, item }) {
  const [topTitle, setTopTitle] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [enable, setEnable] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [bottomDesc, setBottomDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        // desc,
        // topTitle,
        bottomDesc,
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
        if (res.data?.hero_form_2) {
          setEnable(res.data?.hero_form_2?.enable);
          // setTopTitle(res.data?.hero_form_2?.topTitle);
          setTitle(res.data?.hero_form_2?.title);
          // setDesc(res.data?.hero_form_2?.desc);
          setBottomDesc(res.data?.hero_form_2?.bottomdesc);
          setButtonText(res.data?.hero_form_2?.buttonText);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 2
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        {/* <Input
          value={topTitle}
          onChange={(e) => setTopTitle(e.target.value)}
          type="text"
          label="Top Title"
        />
        <Spacer y="2" /> */}
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          label="Title"
        />
        <Spacer y="2" />
        {/* <Input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          label="Description"
        />
        <Spacer y="2" /> */}
        <div className="grid grid-cols-2 gap-2 ">
          <Input
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            type="text"
            label="Search Button Text"
          />
          <Input
            value={bottomDesc}
            onChange={(e) => setBottomDesc(e.target.value)}
            type="text"
            label="Description below search bar."
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
      <HeroForm_2 data={{ enable: true }} />
    </div>
  );
}
