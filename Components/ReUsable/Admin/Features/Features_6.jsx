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
import Feature_6 from "../../Front/Features/Feature_6";
export default function AdminFeatures_6({ storagePath, dbCollection }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list1, setList1] = useState("");
  const [list2, setList2] = useState("");
  const [list3, setList3] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");

  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");

  const [heroImage, setHeroImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [enable, setEnable] = useState(false);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("list1", list1);
  formData.append("list2", list2);
  formData.append("list3", list3);

  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);
  formData.append("rightButtonText", rightButtonText);
  formData.append("rightButtonText", rightButtonText);

  formData.append("enable", enable);
  formData.append("storagePath", storagePath);
  formData.append("dbCollection", dbCollection);

  const handleSave = (e) => {
    const token = localStorage.getItem("lg_tk");
    formData.append("token", token);
    formData.append("heroImage", heroImage);
    setLoading(true);
    axios
      .post("/api/features/features-6", formData)
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
      .get("/api/features/features-6", { params: { dbCollection } })
      .then((res) => {
        if (res.data?.features_6) {
          setEnable(res.data?.features_6?.enable);
          setTitle(res.data?.features_6?.title);
          setDesc(res.data?.features_6?.desc);
          setList1(res.data?.features_6?.list1);
          setList2(res.data?.features_6?.list2);
          setList3(res.data?.features_6?.list3);

          setLeftButtonText(res.data?.features_6?.leftButtonText);
          setLeftButtonLink(res.data?.features_6?.leftButtonLink);
          setRightButtonText(res.data?.features_6?.rightButtonText);
          setRightButtonLink(res.data?.features_6?.rightButtonLink);
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
        <Spacer y="4" />
        <div className="grid grid-cols-3 gap-2">
          <Textarea
            value={list1}
            onChange={(e) => setList1(e.target.value)}
            type="text"
            label="Feature 1 Description"
          />
          <Textarea
            value={list2}
            onChange={(e) => setList2(e.target.value)}
            type="text"
            label="Feature 2 Description"
          />
          <Textarea
            value={list3}
            onChange={(e) => setList3(e.target.value)}
            type="text"
            label="Feature 3 Description"
          />
        </div>

        <Spacer y="3" />
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={leftButtonText}
            onChange={(e) => setLeftButtonText(e.target.value)}
            type="text"
            label="Left Button Text"
          />
          <Input
            value={leftButtonLink}
            onChange={(e) => setLeftButtonLink(e.target.value)}
            type="text"
            label="Left Button Link"
          />
          <Input
            value={rightButtonText}
            onChange={(e) => setRightButtonText(e.target.value)}
            type="text"
            label="Right Button Text"
          />
          <Input
            value={rightButtonLink}
            onChange={(e) => setRightButtonLink(e.target.value)}
            type="text"
            label="Right Button Link"
          />
        </div>
        <Spacer y="4" />
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
      <Feature_6 data={{ enable: true }} />
    </div>
  );
}
