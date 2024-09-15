import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Stats_5 from "../../Front/Stats/Stats_5";

export default function AdminStats_5({ dbCollection, item }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [stat1Number, setStat1Number] = useState("");
  const [stat1Desc, setStat1Desc] = useState("");

  const [stat2Number, setStat2Number] = useState("");
  const [stat2Desc, setStat2Desc] = useState("");

  const [stat3Number, setStat3Number] = useState("");
  const [stat3Desc, setStat3Desc] = useState("");

  const [stat4Number, setStat4Number] = useState("");
  const [stat4Desc, setStat4Desc] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        desc,
        stat1Number,
        stat1Desc,
        stat2Number,
        stat2Desc,
        stat3Number,
        stat3Desc,
        stat4Number,
        stat4Desc,
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
        if (res.data?.stats_5) {
          setEnable(res.data?.stats_5?.enable);
          setTitle(res.data?.stats_5?.title);
          setDesc(res.data?.stats_5?.desc);

          setStat1Number(res.data?.stats_5?.stat1Number);
          setStat1Desc(res.data?.stats_5?.stat1Desc);

          setStat2Number(res.data?.stats_5?.stat2Number);
          setStat2Desc(res.data?.stats_5?.stat2Desc);

          setStat3Number(res.data?.stats_5?.stat3Number);
          setStat3Desc(res.data?.stats_5?.stat3Desc);

          setStat4Number(res.data?.stats_5?.stat4Number);
          setStat4Desc(res.data?.stats_5?.stat4Desc);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Stats 5 Component
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
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={stat1Number}
            onChange={(e) => setStat1Number(e.target.value)}
            type="text"
            label="Stat 1 Number"
          />
          <Input
            value={stat1Desc}
            onChange={(e) => setStat1Desc(e.target.value)}
            type="text"
            label="Stat 1 Description"
          />
          <Input
            value={stat2Number}
            onChange={(e) => setStat2Number(e.target.value)}
            type="text"
            label="Stat 2 Number"
          />
          <Input
            value={stat2Desc}
            onChange={(e) => setStat2Desc(e.target.value)}
            type="text"
            label="Stat 2 Description"
          />
          <Input
            value={stat3Number}
            onChange={(e) => setStat3Number(e.target.value)}
            type="text"
            label="Stat 3 Number"
          />
          <Input
            value={stat3Desc}
            onChange={(e) => setStat3Desc(e.target.value)}
            type="text"
            label="Stat 3 Description"
          />
          <Input
            value={stat4Number}
            onChange={(e) => setStat4Number(e.target.value)}
            type="text"
            label="Stat 4 Number"
          />
          <Input
            value={stat4Desc}
            onChange={(e) => setStat4Desc(e.target.value)}
            type="text"
            label="Stat 4 Description"
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
      <Stats_5 data={{ enable: true }} />
    </div>
  );
}
