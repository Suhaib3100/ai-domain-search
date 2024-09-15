import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Chip,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SedoApi() {
  const [signKey, setSignKey] = useState("");
  const [partnerId, setPartnerId] = useState("");
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  // this function will send the ads settings to the server
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/apis/sedo", {
        signKey,
        partnerId,
        enable,
        token,
      })
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
    axios.get("/api/apis/sedo").then((res) => {
      if (res.data) {
        setSignKey(res.data?.signKey);
        setPartnerId(res.data?.partnerId);
        setEnable(res.data?.enable);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Sedo API Settings
        </h4>
      </div>
      <Divider />
      <CardBody>
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>
        <Spacer y="4" />
        <Chip variant="flat" radius="sm" color={"secondary"}>
          If you disable, premium domains will not shown. Please refer to the
          documentation on how to get Sedo API for free.
        </Chip>
        <div>
          <Spacer y={2} />
          <Input
            value={signKey}
            onChange={(e) => setSignKey(e.target.value)}
            type="text"
            label="API Sign Key"
            placeholder="q1333c40a7d8c36941sd4262fb63rt"
          />
          <Spacer y={2} />
          <Input
            value={partnerId}
            onChange={(e) => setPartnerId(e.target.value)}
            type="text"
            label="Partner ID | CampaignID"
            placeholder="321234"
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
