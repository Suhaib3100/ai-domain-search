import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Banner_3 from "../../Front/Banner/Banner_3";

export default function AdminBannerAds_3({ dbCollection, item }) {
  const [left1ButtonText, setLeft1ButtonText] = useState("");
  const [left1ButtonLink, setLeft1ButtonLink] = useState("");

  const [left2ButtonText, setLeft2ButtonText] = useState("");
  const [left2ButtonLink, setLeft2ButtonLink] = useState("");

  const [rightText, setRightText] = useState("");

  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        left1ButtonText,
        left1ButtonLink,
        left2ButtonText,
        left2ButtonLink,
        rightText,
        rightButtonText,
        rightButtonLink,
        enable,
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
        if (res.data?.banner_3) {
          setEnable(res.data?.banner_3?.enable);
          setLeft1ButtonText(res.data?.banner_3?.left1ButtonText);
          setLeft1ButtonLink(res.data?.banner_3?.left1ButtonLink);
          setLeft2ButtonText(res.data?.banner_3?.left2ButtonText);
          setLeft2ButtonLink(res.data?.banner_3?.left2ButtonLink);
          setRightText(res.data?.banner_3?.rightText);
          setRightButtonText(res.data?.banner_3?.rightButtonText);
          setRightButtonLink(res.data?.banner_3?.rightButtonLink);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Banner Ads 2 Component
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
            value={left1ButtonText}
            onChange={(e) => setLeft1ButtonText(e.target.value)}
            type="text"
            label="Left Side Button 1 Text"
          />
          <Input
            value={left1ButtonLink}
            onChange={(e) => setLeft1ButtonLink(e.target.value)}
            type="text"
            label="Left Side Button 1 Link"
          />

          <Input
            value={left2ButtonText}
            onChange={(e) => setLeft2ButtonText(e.target.value)}
            type="text"
            label="Left Side Button 2 Text"
          />

          <Input
            value={left2ButtonLink}
            onChange={(e) => setLeft2ButtonLink(e.target.value)}
            type="text"
            label="Left Side Button 2 Link"
          />
        </div>
        <Spacer y="4" />
        <div className="grid grid-cols-3 gap-2">
          <Input
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
            type="text"
            label="Right Side Ads Text"
          />
          <Input
            value={rightButtonText}
            onChange={(e) => setRightButtonText(e.target.value)}
            type="text"
            label="Right Side Button Text"
          />
          <Input
            value={rightButtonLink}
            onChange={(e) => setRightButtonLink(e.target.value)}
            type="text"
            label="Right Side Button Link"
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
      <Spacer y="4" />
      <Banner_3 data={{ enable: true }} />
    </div>
  );
}
