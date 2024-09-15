import {
  Button,
  Checkbox,
  Divider,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Feature_5 from "../../Front/Features/Feature_5";
export default function AdminFeatures_5({ storagePath, dbCollection }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [featureList, setFeatureList] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [enable, setEnable] = useState(false);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("featureList", featureList);
  formData.append("enable", enable);
  formData.append("storagePath", storagePath);
  formData.append("dbCollection", dbCollection);

  const handleSave = (e) => {
    const token = localStorage.getItem("lg_tk");
    formData.append("token", token);
    formData.append("heroImage", heroImage);
    setLoading(true);
    axios
      .post("/api/features/features-5", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/features/features-5", { params: { dbCollection } })
      .then((res) => {
        if (res.data?.features_5) {
          setEnable(res.data?.features_5?.enable);
          setTitle(res.data?.features_5?.title);
          setDesc(res.data?.features_5?.desc);
          setFeatureList(res.data?.features_5?.featureList);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Feature Component 5
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          label="Title"
        />
        <Spacer y="2" />
        <Input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          label="Description"
        />
        <Spacer y="2" />
        <Textarea
          value={featureList}
          onChange={(e) => setFeatureList(e.target.value)}
          type="text"
          label="Description"
          placeholder="one feature per line"
        />

        <Spacer y="3" />
        <Input
          onChange={(e) => setHeroImage(e.target.files[0])}
          type="file"
          labelPlacement="outside-left"
          label="Feature Image"
          placeholder="Feature Image"
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

      <Divider />
      <Feature_5 data={{ enable: true }} />
    </div>
  );
}
