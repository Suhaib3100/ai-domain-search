import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Stats_6 from "../../Front/Stats/Stats_6";

export default function AdminStats_6({ dbCollection, item }) {
  const [stat1Title, setStat1Title] = useState("");
  const [stat1Number, setStat1Number] = useState("");
  const [stat1LeftPercent, setStat1LeftPercent] = useState("");
  const [stat1LeftDesc, setStat1LeftDesc] = useState("");
  const [stat1RightNumber, setStat1RightNumber] = useState("");
  const [stat1RightDesc, setStat1RightDesc] = useState("");

  const [stat2Title, setStat2Title] = useState("");
  const [stat2Number, setStat2Number] = useState("");
  const [stat2LeftPercent, setStat2LeftPercent] = useState("");
  const [stat2LeftDesc, setStat2LeftDesc] = useState("");
  const [stat2RightNumber, setStat2RightNumber] = useState("");
  const [stat2RightDesc, setStat2RightDesc] = useState("");

  const [stat3Title, setStat3Title] = useState("");
  const [stat3Number, setStat3Number] = useState("");
  const [stat3LeftPercent, setStat3LeftPercent] = useState("");
  const [stat3LeftDesc, setStat3LeftDesc] = useState("");
  const [stat3RightNumber, setStat3RightNumber] = useState("");
  const [stat3RightDesc, setStat3RightDesc] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        stat1Title,
        stat1Number,
        stat1LeftPercent,
        stat1LeftDesc,
        stat1RightNumber,
        stat1RightDesc,
        stat2Title,
        stat2Number,
        stat2LeftPercent,
        stat2LeftDesc,
        stat2RightNumber,
        stat2RightDesc,
        stat3Title,
        stat3Number,
        stat3LeftPercent,
        stat3LeftDesc,
        stat3RightNumber,
        stat3RightDesc,
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
        if (res.data?.stats_6) {
          setEnable(res.data?.stats_6?.enable);

          setStat1Title(res.data?.stats_6?.stat1Title);
          setStat1Number(res.data?.stats_6?.stat1Number);
          setStat1LeftPercent(res.data?.stats_6?.stat1LeftPercent);
          setStat1LeftDesc(res.data?.stats_6?.stat1LeftDesc);
          setStat1RightNumber(res.data?.stats_6?.stat1RightNumber);
          setStat1RightDesc(res.data?.stats_6?.setStat1RightDesc);

          setStat2Title(res.data?.stats_6?.stat2Title);
          setStat2Number(res.data?.stats_6?.stat2Number);
          setStat2LeftPercent(res.data?.stats_6?.stat2LeftPercent);
          setStat2LeftDesc(res.data?.stats_6?.stat2LeftDesc);
          setStat2RightNumber(res.data?.stats_6?.stat2RightNumber);
          setStat2RightDesc(res.data?.stats_6?.setStat2RightDesc);

          setStat3Title(res.data?.stats_6?.stat3Title);
          setStat3Number(res.data?.stats_6?.stat3Number);
          setStat3LeftPercent(res.data?.stats_6?.stat3LeftPercent);
          setStat3LeftDesc(res.data?.stats_6?.stat3LeftDesc);
          setStat3RightNumber(res.data?.stats_6?.stat3RightNumber);
          setStat3RightDesc(res.data?.stats_6?.setStat3RightDesc);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Stats 6 Component
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
            value={stat1Title}
            onChange={(e) => setStat1Title(e.target.value)}
            type="text"
            label="Stats 1 Title"
          />

          <Input
            value={stat1Number}
            onChange={(e) => setStat1Number(e.target.value)}
            type="text"
            label="Stats 1 number"
          />

          <Input
            value={stat1LeftPercent}
            onChange={(e) => setStat1LeftPercent(e.target.value)}
            type="text"
            label="Stat 1 Left Side Percentage"
          />
          <Input
            value={stat1LeftDesc}
            onChange={(e) => setStat1LeftDesc(e.target.value)}
            type="text"
            label="Stat 1 Left Side Description"
          />
          <Input
            value={stat1RightNumber}
            onChange={(e) => setStat1RightNumber(e.target.value)}
            type="text"
            label="Stat 1 Right Side Number"
          />
          <Input
            value={stat1RightDesc}
            onChange={(e) => setStat1RightDesc(e.target.value)}
            type="text"
            label="Stat 1 Right Side Description"
          />
        </div>
        <Spacer y="4" />
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={stat2Title}
            onChange={(e) => setStat2Title(e.target.value)}
            type="text"
            label="Stats 2 Title"
          />

          <Input
            value={stat2Number}
            onChange={(e) => setStat2Number(e.target.value)}
            type="text"
            label="Stats 2 number"
          />

          <Input
            value={stat2LeftPercent}
            onChange={(e) => setStat2LeftPercent(e.target.value)}
            type="text"
            label="Stat 2 Left Side Percentage"
          />
          <Input
            value={stat2LeftDesc}
            onChange={(e) => setStat2LeftDesc(e.target.value)}
            type="text"
            label="Stat 2 Left Side Description"
          />
          <Input
            value={stat2RightNumber}
            onChange={(e) => setStat2RightNumber(e.target.value)}
            type="text"
            label="Stat 2 Right Side Number"
          />
          <Input
            value={stat2RightDesc}
            onChange={(e) => setStat2RightDesc(e.target.value)}
            type="text"
            label="Stat 2 Right Side Description"
          />
        </div>
        <Spacer y="4" />
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={stat3Title}
            onChange={(e) => setStat3Title(e.target.value)}
            type="text"
            label="Stats 3 Title"
          />

          <Input
            value={stat3Number}
            onChange={(e) => setStat3Number(e.target.value)}
            type="text"
            label="Stats 3 number"
          />

          <Input
            value={stat3LeftPercent}
            onChange={(e) => setStat3LeftPercent(e.target.value)}
            type="text"
            label="Stat 3 Left Side Percentage"
          />
          <Input
            value={stat3LeftDesc}
            onChange={(e) => setStat3LeftDesc(e.target.value)}
            type="text"
            label="Stat 3 Left Side Description"
          />
          <Input
            value={stat3RightNumber}
            onChange={(e) => setStat3RightNumber(e.target.value)}
            type="text"
            label="Stat 3 Right Side Number"
          />
          <Input
            value={stat3RightDesc}
            onChange={(e) => setStat3RightDesc(e.target.value)}
            type="text"
            label="Stat 3 Right Side Description"
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
      <Stats_6 data={{ enable: true }} />
    </div>
  );
}
