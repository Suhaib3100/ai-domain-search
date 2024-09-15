import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
export default function AddHosting() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [hosting, setHosting] = useState("");
  const [pricing, setPricing] = useState("");
  const [traffic, setTraffic] = useState("");
  const [storage, setStorage] = useState("");
  const [freeDomain, setFreeDomain] = useState("");
  const [link, setLink] = useState("");
  const handleSave = (e) => {
    const token = JSON.parse(localStorage.getItem("lg_tk"));
    setLoading(true);
    axios
      .post("/api/bulk-location/add-hosting", {
        uniqueId: uuidv4(),
        id,
        hosting,
        pricing,
        traffic,
        storage,
        freeDomain,
        link,
        token,
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

  return (
    <div>
      <Toaster />
      <p className="text-xl font-semibold text-violet-700 mb-2">
        Add Recommended Hosting Provider
      </p>
      <Input
        value={id}
        onChange={(e) => setId(e.target.value)}
        type="number"
        label="Set ID / Serial No"
      />
      <Spacer y="2" />
      <Input
        value={hosting}
        onChange={(e) => setHosting(e.target.value)}
        type="text"
        label="Web Hosting Provider Name"
      />
      <Spacer y="2" />
      <Input
        value={pricing}
        onChange={(e) => setPricing(e.target.value)}
        type="text"
        label="Hosting Price"
      />
      <Spacer y="2" />
      <Input
        value={traffic}
        onChange={(e) => setTraffic(e.target.value)}
        type="text"
        label="Hosting Traffic"
      />
      <Spacer y="2" />
      <Input
        value={storage}
        onChange={(e) => setStorage(e.target.value)}
        type="text"
        label="Hosting Storage"
      />
      <Spacer y="2" />
      <Input
        value={freeDomain}
        onChange={(e) => setFreeDomain(e.target.value)}
        type="text"
        label="Is Domain Free || Yes or No only"
      />
      <Spacer y="2" />
      <Input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        type="text"
        label="Hosting Affiliate Link"
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
  );
}
