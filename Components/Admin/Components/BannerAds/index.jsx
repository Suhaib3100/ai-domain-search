import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Chip,
  Divider,
  Image,
  Input,
  Link,
  Spacer,
  Switch,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function BannerAds() {
  const [enableAds, setEnableAds] = useState(false);
  const [affiliateLink, setAffiliateLink] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [bannerCdnLink, setBannerCdnLink] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("lg_tk");
  // this function will send the ads settings to the server
  const handleSave = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("bannerImage", bannerImage);
    formData.append("affiliateLink", affiliateLink);
    formData.append("bannerCdnLink", bannerCdnLink);
    formData.append("enableAds", enableAds);
    formData.append("token", token);
    axios
      .post("/api/banner-ads", formData)
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
    axios.get("/api/banner-ads").then((res) => {
      if (res.data?.bannerAds) {
        setEnableAds(res.data?.bannerAds?.enableAds);
        setImageURL(res.data?.bannerAds?.bannerImage?.split("public")[1]);
        setAffiliateLink(res.data?.bannerAds?.affiliateLink);
        setBannerCdnLink(res.data?.bannerAds?.bannerCdnLink);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Banner Ads Setting
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
            <span className="text-primary font-semibold">
              Enable Banner Ads
            </span>
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
            value={affiliateLink}
            onChange={(e) => setAffiliateLink(e.target.value)}
            label="Banner Ads Affiliate Link"
            placeholder="https://bluehost.com/affid-321354"
          />

          <Spacer y={2} />

          <Input
            value={bannerCdnLink}
            onChange={(e) => setBannerCdnLink(e.target.value)}
            placeholder="https://i.imgur.com/8uFSApS.png"
            aria-label="slotid"
            label="Banner Image CDN Link"
          />
          <Spacer y={2} />
          <Chip variant="flat" color={"secondary"}>
            Use any CDN url like imgur.com for fast loading | Recommended width
            1000px - height 100px.
          </Chip>
          <Spacer y={4} />
          <Input
            type={"file"}
            labelPlacement="outside-left"
            label="Banner Image"
            placeholder="Banner Image"
            onChange={(e) => setBannerImage(e.target.files[0])}
          />
          <Spacer y={2} />
          <Chip variant="flat" color={"secondary"}>
            Upload Your Banner Image | Recommended width 1000px - height 100px.
          </Chip>
          <Spacer y={4} />
          <Link href={affiliateLink || "#"} isExternal>
            <Image
              width={1000}
              height={100}
              src={bannerCdnLink || imageURL}
              alt="Banner Image"
            />
          </Link>
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
