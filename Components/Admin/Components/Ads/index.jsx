import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Chip,
  Divider,
  Input,
  Spacer,
  Switch,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function GoogleAds() {
  const [enableAds, setEnableAds] = useState(false);
  const [clientID, setClientID] = useState("");
  const [slotID, setSlotID] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  // this function will send the ads settings to the server
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/adsense", { enableAds, clientID, slotID, token })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  // this is to get the ads settings from the server
  useEffect(() => {
    axios.get("/api/adsense").then((res) => {
      setEnableAds(res.data?.googleAds?.enableAds);
      setClientID(res.data?.googleAds?.clientID);
      setSlotID(res.data?.googleAds?.slotID);
    });
  }, []);

  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Google Ads Setting
        </h4>
      </div>
      <Divider />
      <CardBody>
        <div className="flex justify-start items-center">
          <Checkbox
            size="lg"
            isSelected={enableAds}
            onValueChange={setEnableAds}
          >
            <span className="text-primary font-semibold">Enable Ads</span>
          </Checkbox>
        </div>
        <Spacer y={2} />
        <Chip variant="flat" color={"secondary"}>
          Please do not enable Google Adsense and Banner Ads simultaneously. It
          will make your web site look dirty.
        </Chip>
        <Spacer y={4} />
        <div>
          <Input
            value={clientID}
            onChange={(e) => setClientID(e.target.value)}
            type="text"
            label="Adsense Client ID"
            placeholder="ca-pub-3546542221546543"
          />

          <Spacer y={2} />

          <Input
            value={slotID}
            onChange={(e) => setSlotID(e.target.value)}
            placeholder="1254587554"
            aria-label="slotid"
            label="Adsense Slot ID"
          />
          <Spacer y={4} />
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
      </CardBody>
    </Card>
  );
}
