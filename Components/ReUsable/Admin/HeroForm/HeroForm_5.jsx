import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import HeroForm_5 from "../../Front/HeroForm/HeroForm_5";
export default function AdminHeroForm_5({ dbCollection, item }) {
  const [loading, setLoading] = useState(false);
  const [enable, setEnable] = useState(false);
  const [topTitle, setTopTitle] = useState("");
  const [mainTitle, setMainTitle] = useState("");
  const [leftNumber, setLeftNumber] = useState("");
  const [rightTitle, setRightTitle] = useState("");
  const [rightDescription, setRightDescription] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        enable,
        loading,
        topTitle,
        mainTitle,
        leftNumber,
        rightTitle,
        rightDescription,
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
        if (res.data?.hero_form_5) {
          setEnable(res.data?.hero_form_5?.enable);
          setTopTitle(res.data?.hero_form_5?.topTitle);
          setMainTitle(res.data?.hero_form_5?.mainTitle);
          setLeftNumber(res.data?.hero_form_5?.leftNumber);
          setRightTitle(res.data?.hero_form_5?.rightTitle);
          setRightDescription(res.data?.hero_form_5?.rightDescription);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component 5
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <Input
          value={topTitle}
          onChange={(e) => setTopTitle(e.target.value)}
          type="text"
          label="Top Title"
        />
        <Spacer y="1" />
        <Input
          value={mainTitle}
          onChange={(e) => setMainTitle(e.target.value)}
          type="text"
          label="Main Title | dot [ . ] is the seperator"
        />
        <Spacer y="1" />
        <Input
          value={leftNumber}
          onChange={(e) => setLeftNumber(e.target.value)}
          type="text"
          label="Left Number"
        />
        <Spacer y="1" />
        <Input
          value={rightTitle}
          onChange={(e) => setRightTitle(e.target.value)}
          type="text"
          label="Right Title"
        />
        <Spacer y="1" />
        <Input
          value={rightDescription}
          onChange={(e) => setRightDescription(e.target.value)}
          type="text"
          label="Right Description"
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
      <HeroForm_5 data={{ enable: true }} />
    </div>
  );
}
