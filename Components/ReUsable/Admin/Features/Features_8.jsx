import { Button, Checkbox, Divider, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Feature_7 from "../../Front/Features/Feature_7";
import Feature_8 from "../../Front/Features/Feature_8";

export default function AdminFeatures_8({ storagePath, dbCollection }) {
  const [tabTitle, setTabTitle] = useState("");

  const [tab1Title, setTab1Title] = useState("");
  const [tab1Desc, setTab1Desc] = useState("");
  const [tab1Image, setTab1Image] = useState("");

  const [tab2Title, setTab2Title] = useState("");
  const [tab2Desc, setTab2Desc] = useState("");
  const [tab2Image, setTab2Image] = useState("");

  const [tab3Title, setTab3Title] = useState("");
  const [tab3Desc, setTab3Desc] = useState("");
  const [tab3Image, setTab3Image] = useState("");
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("lg_tk");

  const formData = new FormData();
  formData.append("tabTitle", tabTitle);
  formData.append("tab1Title", tab1Title);
  formData.append("tab1Desc", tab1Desc);
  formData.append("tabImage", tab1Image);

  formData.append("tab2Title", tab2Title);
  formData.append("tab2Desc", tab2Desc);
  formData.append("tabImage", tab2Image);

  formData.append("tab3Title", tab3Title);
  formData.append("tab3Desc", tab3Desc);
  formData.append("tabImage", tab3Image);

  formData.append("enable", enable);
  formData.append("token", token);
  formData.append("storagePath", storagePath);
  formData.append("dbCollection", dbCollection);

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/features/features-8", formData)
      .then((res) => {
        setLoading(false);
        toast.success(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/features/features-8", { params: { dbCollection } })
      .then((res) => {
        if (res.data?.features_8) {
          setEnable(res.data?.features_8?.enable);
          setTabTitle(res.data?.features_8?.tabTitle);

          setTab1Title(res.data?.features_8?.tab1Title);
          setTab1Desc(res.data?.features_8?.tab1Desc);

          setTab2Title(res.data?.features_8?.tab2Title);
          setTab2Desc(res.data?.features_8?.tab2Desc);

          setTab3Title(res.data?.features_8?.tab3Title);
          setTab3Desc(res.data?.features_8?.tab3Desc);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Feature 8 Component
        </h4>
      </div>
      <Divider />

      <div className="p-4">
        <Checkbox size="lg" isSelected={enable} onValueChange={setEnable}>
          <span className="text-primary font-semibold">Enable?</span>
        </Checkbox>

        <Spacer y="4" />
        <Input
          value={tabTitle}
          onChange={(e) => setTabTitle(e.target.value)}
          type="text"
          label="Feature Tab Heading"
        />
        <Spacer y="2" />

        <Input
          value={tab1Title}
          onChange={(e) => setTab1Title(e.target.value)}
          type="text"
          label="Tab 1 Title"
        />
        <Spacer y="2" />
        <Input
          value={tab1Desc}
          onChange={(e) => setTab1Desc(e.target.value)}
          type="text"
          label="Tab 1 Description"
        />
        <Spacer y="2" />

        <Input
          type="file"
          labelPlacement="outside-left"
          label="Tab 1 Image"
          placeholder="image"
          onChange={(e) => setTab1Image(e.target.files[0])}
        />
        <Spacer y="2" />

        <Input
          value={tab2Title}
          onChange={(e) => setTab2Title(e.target.value)}
          type="text"
          label="Tab 2 Title"
        />
        <Spacer y="2" />
        <Input
          value={tab2Desc}
          onChange={(e) => setTab2Desc(e.target.value)}
          type="text"
          label="Tab 2 Description"
        />

        <Spacer y="2" />
        <Input
          type="file"
          labelPlacement="outside-left"
          label="Tab 2 Image"
          placeholder="image"
          onChange={(e) => setTab2Image(e.target.files[0])}
        />
        <Spacer y="2" />
        <Input
          value={tab3Title}
          onChange={(e) => setTab3Title(e.target.value)}
          type="text"
          label="Tab 3 Title"
        />
        <Spacer y="2" />
        <Input
          value={tab3Desc}
          onChange={(e) => setTab3Desc(e.target.value)}
          type="text"
          label="Tab 3 Description"
        />
        <Spacer y="2" />
        <Input
          type="file"
          labelPlacement="outside-left"
          label="Tab 3 Image"
          placeholder="image"
          onChange={(e) => setTab3Image(e.target.files[0])}
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
      <Feature_8 data={{ enable: true }} />
    </div>
  );
}
