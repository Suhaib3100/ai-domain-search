import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextEditor from "../../../../ReUsable/Editor";
import toast, { Toaster } from "react-hot-toast";
export default function AddHosting() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [hostingName, setHostingName] = useState("");
  const [hostingTag, setHostingTag] = useState("");
  const [hostingRating, setHostingRating] = useState("");
  const [hostingFeatures, setHostingFeatures] = useState("");
  const [buttonText, setButtonText] = useState("");

  const [affiliateLink, setAffiliateLink] = useState("");
  const [hostingImage, setHostingImage] = useState("");
  const [whyPicked, setWhyPicked] = useState("");
  const [prosCons, setProsCons] = useState("");
  const token = localStorage.getItem("lg_tk");
  const handleSave = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("id", id);
    formData.append("hostingName", hostingName);
    formData.append("hostingTag", hostingTag);
    formData.append("hostingRating", hostingRating);
    formData.append("hostingFeatures", hostingFeatures);
    formData.append("buttonText", buttonText);
    formData.append("affiliateLink", affiliateLink);
    formData.append("hostingImage", hostingImage);
    formData.append("whyPicked", whyPicked);
    formData.append("prosCons", prosCons);
    formData.append("uniqueId", uuidv4());
    formData.append("token", token);
    axios
      .post("/api/best-shared-hosting/add-hosting", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };
  // useEffect(() => {
  //   axios.get("/api/best-shared-hosting/add-hosting").then((res) => {
  //     if (res.data.addHosting) {
  //       setId(res.data?.addHosting?.id);
  //       setHostingName(res.data?.addHosting?.hostingName);
  //       setHostingTag(res.data?.addHosting?.hostingTag);
  //       setHostingRating(res.data?.addHosting?.hostingRating);
  //       setHostingFeatures(res.data?.addHosting?.hostingFeatures);
  //       setButtonText(res.data?.addHosting?.buttonText);
  //       setAffiliateLink(res.data?.addHosting?.affiliateLink);
  //       setWhyPicked(res.data?.addHosting?.whyPicked);
  //       setProsCons(res.data?.addHosting?.prosCons);
  //     }
  //   });
  // }, []);

  return (
    <div>
      <Toaster />
      <Input
        value={id}
        onChange={(e) => setId(e.target.value)}
        type="number"
        label="Set ID / Serial No"
      />
      <Spacer y="2" />
      <Input
        value={hostingName}
        onChange={(e) => setHostingName(e.target.value)}
        type="text"
        label="Web Hosting Company Name"
      />
      <Spacer y="2" />
      <Input
        value={hostingTag}
        onChange={(e) => setHostingTag(e.target.value)}
        type="text"
        label="Best For What"
      />
      <Spacer y="2" />
      <Input
        value={hostingRating}
        onChange={(e) => setHostingRating(e.target.value)}
        type="text"
        label="Hosting Rating"
      />
      <Spacer y="2" />
      <Textarea
        value={hostingFeatures}
        onChange={(e) => setHostingFeatures(e.target.value)}
        type="text"
        label="Hosting Features | One feature per line"
      />

      <Spacer y="2" />
      <Input
        value={buttonText}
        onChange={(e) => setButtonText(e.target.value)}
        type="text"
        label="Button Text"
      />

      <Spacer y="2" />
      <Input
        value={affiliateLink}
        onChange={(e) => setAffiliateLink(e.target.value)}
        type="text"
        label="Affiliate Link"
      />

      <Spacer y="2" />
      <Input
        onChange={(e) => setHostingImage(e.target.files[0])}
        type="file"
        labelPlacement="outside-left"
        label="Hosting Logo"
        placeholder="Logo"
      />
      <Spacer y="4" />

      <h2 className="text-xl">Why We Picked It</h2>
      <TextEditor
        setDefaultStyle="font-size:20px;"
        height="300px"
        setContent={whyPicked}
        onChange={(e) => setWhyPicked(e)}
      />
      <Spacer y="4" />

      <h2 className="text-xl">Pros & Cons</h2>
      <TextEditor
        setDefaultStyle="font-size:20px;"
        height="300px"
        setContent={prosCons}
        onChange={(e) => setProsCons(e)}
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
