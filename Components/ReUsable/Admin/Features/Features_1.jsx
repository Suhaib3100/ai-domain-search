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
import Feature_1 from "../../Front/Features/Feature_1";

export default function AdminFeatures_1({ dbCollection, item }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");

  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");

  const [title1, setTitle1] = useState("");
  const [desc1, setDesc1] = useState("");

  const [title2, setTitle2] = useState("");
  const [desc2, setDesc2] = useState("");

  const [title3, setTitle3] = useState("");
  const [desc3, setDesc3] = useState("");

  const [title4, setTitle4] = useState("");
  const [desc4, setDesc4] = useState("");

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        desc,
        leftButtonText,
        leftButtonLink,
        rightButtonText,
        rightButtonLink,
        title1,
        desc1,
        title2,
        desc2,
        title3,
        desc3,
        title4,
        desc4,
        enable,
        token,
        dbCollection,
        item,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios
      .get("/api/data/plain-data", { params: { dbCollection, item } })
      .then((res) => {
        if (res.data?.features_1) {
          setEnable(res.data?.features_1?.enable);
          setTitle(res.data?.features_1?.title);
          setDesc(res.data?.features_1?.desc);

          setTitle1(res.data?.features_1?.title1);
          setDesc1(res.data?.features_1?.setDesc1);

          setTitle2(res.data?.features_1?.title2);
          setDesc2(res.data?.features_1?.setDesc2);

          setTitle3(res.data?.features_1?.title3);
          setDesc3(res.data?.features_1?.setDesc3);

          setTitle4(res.data?.features_1?.title4);
          setDesc4(res.data?.features_1?.setDesc4);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Feature 1 Component
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
          label="Section Title"
        />
        <Spacer y="2" />
        <Input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          label="Section Description"
        />
        <Spacer y="4" />
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
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              value={title1}
              onChange={(e) => setTitle1(e.target.value)}
              type="text"
              label="Feature 1 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={desc1}
              onChange={(e) => setDesc1(e.target.value)}
              type="text"
              label="Feature 1 Description"
            />
          </div>
          <div>
            <Input
              value={title2}
              onChange={(e) => setTitle2(e.target.value)}
              type="text"
              label="Feature 2 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={desc2}
              onChange={(e) => setDesc2(e.target.value)}
              type="text"
              label="Feature 2 Description"
            />
          </div>
          <div>
            <Input
              value={title3}
              onChange={(e) => setTitle3(e.target.value)}
              type="text"
              label="Feature 3 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={desc3}
              onChange={(e) => setDesc3(e.target.value)}
              type="text"
              label="Feature 3 Description"
            />
          </div>
          <div>
            <Input
              value={title4}
              onChange={(e) => setTitle4(e.target.value)}
              type="text"
              label="Feature 4 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={desc4}
              onChange={(e) => setDesc4(e.target.value)}
              type="text"
              label="Feature 4 Description"
            />
          </div>
        </div>
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
      <Feature_1 data={{ enable: true }} />
    </div>
  );
}
