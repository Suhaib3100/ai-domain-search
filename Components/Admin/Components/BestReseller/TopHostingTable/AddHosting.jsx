import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
export default function AddHosting() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [hostingName, setHostingName] = useState("");
  const [pricing, setPricing] = useState("");
  const [traffic, setTraffic] = useState("");
  const [storage, setStorage] = useState("");
  const [freeDomain, setFreeDomain] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/best-reseller-hosting/top-hosting-table", {
        id,
        hostingName,
        pricing,
        traffic,
        storage,
        freeDomain,
        affiliateLink,
        uniqueId: uuidv4(),
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
      <Input
        value={id}
        onChange={(e) => setId(e.target.value)}
        type="number"
        label="Set ID / Serial No"
      />
      <Spacer y="1" />
      <Input
        value={hostingName}
        onChange={(e) => setHostingName(e.target.value)}
        type="text"
        label="Web Hosting Company Name"
      />
      <Spacer y="1" />
      <Input
        value={pricing}
        onChange={(e) => setPricing(e.target.value)}
        type="text"
        label="Hosting Pricing"
      />
      <Spacer y="1" />
      <Input
        value={traffic}
        onChange={(e) => setTraffic(e.target.value)}
        type="text"
        label="Hosting Traffic"
      />
      <Spacer y="1" />
      <Input
        value={storage}
        onChange={(e) => setStorage(e.target.value)}
        type="text"
        label="Hosting Storage"
      />

      <Spacer y="1" />
      <Input
        value={freeDomain}
        onChange={(e) => setFreeDomain(e.target.value)}
        type="text"
        label="Is Domain Free || Yes or No only"
      />

      <Spacer y="1" />
      <Input
        value={affiliateLink}
        onChange={(e) => setAffiliateLink(e.target.value)}
        type="text"
        label="Affiliate Link"
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
