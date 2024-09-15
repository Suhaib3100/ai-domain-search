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

export default function OpenAi() {
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("");
  const [domainCount, setDomainCount] = useState("");
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  // this function will send the ads settings to the server
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/apis/open-ai", {
        apiKey,
        model,
        enable,
        domainCount,
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
    axios.post("/api/apis/open-ai-get", { token }).then((res) => {
      if (res.data) {
        setApiKey(res.data?.apiKey);
        setModel(res.data?.model);
        setEnable(res.data?.enable);
        setDomainCount(res.data?.domainCount);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Open Ai API Settings
        </h4>
      </div>
      <Divider />
      <CardBody>
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>
        <Spacer y="4" />
        <Chip variant="flat" radius="sm" color={"secondary"}>
          If you disable, Our inbuilt AI Generator tool will be used. Please
          refer to the documentation on how to get Open Ai API.
        </Chip>
        <div>
          <Spacer y={2} />
          <Input
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            type="text"
            label="API Key"
            placeholder="q1333c40a7d8c36941sd4262fb63rt"
          />
          <Spacer y={2} />
          <Input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            type="text"
            label="API Model"
            placeholder="gpt-4o"
          />
          <Spacer y={2} />
          <Input
            className="w-80"
            value={domainCount}
            onChange={(e) => setDomainCount(e.target.value)}
            type="number"
            label="How many domains should generate."
            placeholder="20 or 30 or 50 or even 100"
          />
          <Spacer y={1} />
          <p className="text-xs text-secondary">
            Please type the model name currectly. We recommend to use GPT-4o
            mini model. Its cost efficient and sufficient for domain name
            generator. But you can use any model.
          </p>
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
