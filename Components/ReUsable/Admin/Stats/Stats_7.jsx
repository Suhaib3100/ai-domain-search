import {
  Button,
  Checkbox,
  Divider,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Stats_7 from "../../Front/Stats/Stats_7";

export default function AdminStats_7({ dbCollection, item }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [card1Title, setCard1Title] = useState("");
  const [card1Desc, setCard1Desc] = useState("");

  const [card2Title, setCard2Title] = useState("");
  const [card2Desc, setCard2Desc] = useState("");

  const [card3Title, setCard3Title] = useState("");
  const [card3Desc, setCard3Desc] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        desc,
        card1Title,
        card1Desc,
        card2Title,
        card2Desc,
        card3Title,
        card3Desc,
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
        if (res.data?.stats_7) {
          setEnable(res.data?.stats_7?.enable);

          setTitle(res.data?.stats_7?.title);
          setDesc(res.data?.stats_7?.desc);

          setCard1Title(res.data?.stats_7?.card1Title);
          setCard1Desc(res.data?.stats_7?.card1Desc);

          setCard2Title(res.data?.stats_7?.card2Title);
          setCard2Desc(res.data?.stats_7?.card2Desc);

          setCard3Title(res.data?.stats_7?.card3Title);
          setCard3Desc(res.data?.stats_7?.card3Desc);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Stats 7 Component
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
          label="Section Title"
        />
        <Spacer y="2" />
        <Input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          label="Section Description"
        />
        <Spacer y="4" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <Input
              value={card1Title}
              onChange={(e) => setCard1Title(e.target.value)}
              type="text"
              label="Card 1 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={card1Desc}
              onChange={(e) => setCard1Desc(e.target.value)}
              type="text"
              label="Card 1 Description"
            />
          </div>
          <div>
            <Input
              value={card2Title}
              onChange={(e) => setCard2Title(e.target.value)}
              type="text"
              label="Card 2 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={card2Desc}
              onChange={(e) => setCard2Desc(e.target.value)}
              type="text"
              label="Card 2 Description"
            />
          </div>
          <div>
            <Input
              value={card3Title}
              onChange={(e) => setCard3Title(e.target.value)}
              type="text"
              label="Card 3 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={card3Desc}
              onChange={(e) => setCard3Desc(e.target.value)}
              type="text"
              label="Card 3 Description"
            />
          </div>
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
      <Stats_7 data={{ enable: true }} />
    </div>
  );
}
