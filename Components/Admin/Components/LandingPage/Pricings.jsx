import {
  Button,
  Input,
  Spacer,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Pricings() {
  const [pricingTitle, setPricingTitle] = useState("");
  const [pricingDesc, setPricingDesc] = useState("");

  const [hosting1, setHosting1] = useState("");
  const [hostingDesc1, setHostingDesc1] = useState("");
  const [pricing1, setPricing1] = useState("");
  const [buttonText1, setButtonText1] = useState("");
  const [buttonLink1, setButtonLink1] = useState("");
  const [hostingFeatures1, setHostingFeatures1] = useState("");

  const [hosting2, setHosting2] = useState("");
  const [hostingDesc2, setHostingDesc2] = useState("");
  const [pricing2, setPricing2] = useState("");
  const [buttonText2, setButtonText2] = useState("");
  const [buttonLink2, setButtonLink2] = useState("");
  const [hostingFeatures2, setHostingFeatures2] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/home-page/pricing", {
        pricingTitle,
        pricingDesc,
        hosting1,
        hostingDesc1,
        pricing1,
        buttonText1,
        buttonLink1,
        hostingFeatures1,
        hosting2,
        hostingDesc2,
        pricing2,
        buttonText2,
        buttonLink2,
        hostingFeatures2,
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

  useEffect(() => {
    axios.get("/api/home-page/pricing").then((res) => {
      if (res.data?.pricing) {
        setPricingTitle(res.data?.pricing?.pricingTitle);
        setPricingDesc(res.data?.pricing?.pricingDesc);
        setHosting1(res.data?.pricing?.hosting1);
        setHostingDesc1(res.data?.pricing?.hostingDesc1);
        setPricing1(res.data?.pricing?.pricing1);
        setButtonText1(res.data?.pricing?.buttonText1);
        setButtonLink1(res.data?.pricing?.buttonLink1);
        setHosting2(res.data?.pricing?.hosting2);
        setHostingDesc2(res.data?.pricing?.hostingDesc2);
        setPricing2(res.data?.pricing?.pricing2);
        setButtonText2(res.data?.pricing?.buttonText2);
        setButtonLink2(res.data?.pricing?.buttonLink2);
        setHostingFeatures1(res.data?.pricing?.hostingFeatures1);
        setHostingFeatures2(res.data?.pricing?.hostingFeatures2);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Pricing Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={pricingTitle}
            onChange={(e) => setPricingTitle(e.target.value)}
            type="text"
            label="Pricing Title"
          />
          <Spacer y="2" />
          <Input
            value={pricingDesc}
            onChange={(e) => setPricingDesc(e.target.value)}
            type="text"
            label="Pricing Description"
          />
          <Spacer y="4" />
          <div className="flex flex-col sm:flex-row justify-between ">
            <div className="w-full px-2">
              <h4 className="text-sm text-violet-700 ml-2 mb-1 font-semibold">
                Pricing Component 1
              </h4>

              <Input
                value={hosting1}
                onChange={(e) => setHosting1(e.target.value)}
                type="text"
                label="Hosting 1 Name"
              />
              <Spacer y="2" />
              <Input
                value={hostingDesc1}
                onChange={(e) => setHostingDesc1(e.target.value)}
                type="text"
                label="Hosting 1 Description"
              />
              <Spacer y="2" />
              <Input
                value={pricing1}
                onChange={(e) => setPricing1(e.target.value)}
                type="text"
                label="Pricing per month"
              />
              <Spacer y="4" />
              <Input
                value={buttonText1}
                onChange={(e) => setButtonText1(e.target.value)}
                type="text"
                label="Pricing 1 Button Text"
              />
              <Spacer y="2" />
              <Input
                value={buttonLink1}
                onChange={(e) => setButtonLink1(e.target.value)}
                type="text"
                label="Hosting 1 Link"
              />
              <Spacer y="2" />
              <Textarea
                value={hostingFeatures1}
                onChange={(e) => setHostingFeatures1(e.target.value)}
                type="text"
                label="Hosting 1 Features"
                // labelPlacement="outside"
                placeholder="Hosting 1 Features"
              />
              <Spacer y="4" />
            </div>
            {/* Pricing 2 component */}
            <div className="w-full px-2">
              <h4 className="text-sm text-violet-700 ml-2 mb-1 font-semibold">
                Pricing Component 2
              </h4>

              <Input
                value={hosting2}
                onChange={(e) => setHosting2(e.target.value)}
                type="text"
                label="Hosting 2 Name"
              />
              <Spacer y="2" />
              <Input
                value={hostingDesc2}
                onChange={(e) => setHostingDesc2(e.target.value)}
                type="text"
                label="Hosting 2 Desctiption"
              />
              <Spacer y="2" />
              <Input
                value={pricing2}
                onChange={(e) => setPricing2(e.target.value)}
                type="text"
                label="Pricing per month"
              />
              <Spacer y="4" />
              <Input
                value={buttonText2}
                onChange={(e) => setButtonText2(e.target.value)}
                type="text"
                label="Pricing 2 Button Text"
              />
              <Spacer y="2" />
              <Input
                value={buttonLink2}
                onChange={(e) => setButtonLink2(e.target.value)}
                type="text"
                label="Hosting 2 Link"
              />
              <Spacer y="2" />
              <Textarea
                value={hostingFeatures2}
                onChange={(e) => setHostingFeatures2(e.target.value)}
                type="text"
                label="Hosting 2 Features"
                // labelPlacement="inside"
                placeholder="Hosting 2 Features"
              />
              <Spacer y="4" />
            </div>
          </div>
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
