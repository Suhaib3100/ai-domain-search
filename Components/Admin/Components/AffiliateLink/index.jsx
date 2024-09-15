import {
  Button,
  Card,
  CardBody,
  Chip,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AffiliateLink() {
  const [affiliateProvider, setAffiliateProvider] = useState("godaddy");
  const [godaddyLink, setGodaddyLink] = useState("");
  const [domainLink, setDomainLink] = useState("");
  const [dynadotLink, setDynadotLink] = useState("");
  const [nameCheapLink, setNameCheapLink] = useState("");
  const [otherLink, setOtherLink] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  // this function will send the ads settings to the server
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/affiliate-link", {
        affiliateProvider,
        godaddyLink,
        domainLink,
        dynadotLink,
        nameCheapLink,
        otherLink,
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
    axios.get("/api/affiliate-link").then((res) => {
      if (res.data?.affiliateLink) {
        setAffiliateProvider(res.data?.affiliateLink?.affiliateProvider);
        setGodaddyLink(res.data?.affiliateLink?.godaddyLink);
        setDomainLink(res.data?.affiliateLink?.domainLink);
        setDynadotLink(res.data?.affiliateLink?.dynadotLink);
        setNameCheapLink(res.data?.affiliateLink?.nameCheapLink);
        setOtherLink(res.data?.affiliateLink?.otherLink);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Affiliate Link Settings
        </h4>
      </div>
      <Divider />
      <CardBody>
        <div>
          <RadioGroup
            orientation="horizontal"
            label="Affiliate Link Provider"
            value={affiliateProvider}
            onValueChange={setAffiliateProvider}
          >
            <Radio value="godaddy" size="lg" color="primary">
              Godaddy
            </Radio>
            <Radio value="domain.com" size="lg" color="warning">
              Domain.com
            </Radio>
            <Radio value="dynadot" size="lg" color="success">
              Dynadot
            </Radio>
            <Radio value="namecheap" size="lg" color="danger">
              NameCheap
            </Radio>
            <Radio value="other" size="lg" color="default">
              Other Affiliate
            </Radio>
          </RadioGroup>
        </div>
        <Spacer y={2} />
        <Chip variant="flat" radius="sm" color={"secondary"}>
          Please select one registrar from whome you got affiliate link.
        </Chip>
        <Spacer y={4} />
        <div>
          <Input
            value={godaddyLink}
            onChange={(e) => setGodaddyLink(e.target.value)}
            type="text"
            label="Godaddy Affiliate Link"
            placeholder="https://www.tkqlhce.com/click-100984641-12527387?url="
          />

          <Spacer y={2} />

          <Input
            value={domainLink}
            onChange={(e) => setDomainLink(e.target.value)}
            placeholder="https://www.tkqlhce.com/click-100984641-12527387?url="
            aria-label="domain.com Link"
            label="Domain.com Affiliate Link"
          />
          <Spacer y={2} />

          <Input
            value={dynadotLink}
            onChange={(e) => setDynadotLink(e.target.value)}
            placeholder="https://www.tkqlhce.com/click-100984641-12527387?url="
            aria-label="Dynadot Link"
            label="Dynadot Affiliate Link"
          />
          <Spacer y={2} />

          <Input
            value={nameCheapLink}
            onChange={(e) => setNameCheapLink(e.target.value)}
            placeholder="https://www.tkqlhce.com/click-100984641-12527387?url="
            aria-label="Namecheap Link"
            label="NameCheap Affiliate Link"
          />
          <Spacer y={2} />

          <Input
            value={otherLink}
            onChange={(e) => setOtherLink(e.target.value)}
            placeholder="https://www.tkqlhce.com/click-100984641-12527387?url="
            aria-label="Other Link"
            label="Other Provider Affiliate Link"
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
