import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CTA_6 from "../../Front/CTA/CTA_6";
export default function AdminCTA_6({ dbCollection, item }) {
  const [starRatingText, setStarRatingText] = useState("");

  const [desc, setDesc] = useState("");
  const [enable, setEnable] = useState(false);
  const [firstButtonText, setFirstButtonText] = useState("");
  const [firstButtonLink, setFirstButtonLink] = useState("");
  const [secondButtonText, setSecondButtonText] = useState("");
  const [secondButtonLink, setSecondButtonLink] = useState("");

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        starRatingText,
        firstButtonText,
        firstButtonLink,
        secondButtonText,
        secondButtonLink,
        desc,
        enable,
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
        if (res.data?.cta_6) {
          setEnable(res.data?.cta_6?.enable);
          setStarRatingText(res.data?.cta_6?.starRatingText);
          setFirstButtonText(res.data?.cta_6?.firstButtonText);
          setFirstButtonLink(res.data?.cta_6?.firstButtonLink);
          setSecondButtonText(res.data?.cta_6?.secondButtonText);
          setSecondButtonLink(res.data?.cta_6?.secondButtonLink);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Call to Action 6
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
            value={starRatingText}
            onChange={(e) => setStarRatingText(e.target.value)}
            type="text"
            label="Rating Text"
          />

          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            label="Description"
          />
        </div>
        <Spacer y="2" />
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={firstButtonText}
            onChange={(e) => setFirstButtonText(e.target.value)}
            type="text"
            label="First Button Text"
          />
          <Input
            value={firstButtonLink}
            onChange={(e) => setFirstButtonLink(e.target.value)}
            type="text"
            label="First Button Link"
          />
          <Input
            value={secondButtonText}
            onChange={(e) => setSecondButtonText(e.target.value)}
            type="text"
            label="Second Button Text"
          />
          <Input
            value={secondButtonLink}
            onChange={(e) => setSecondButtonLink(e.target.value)}
            type="text"
            label="Second Button Link"
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
      <CTA_6 data={{ enable: true }} />
    </div>
  );
}
