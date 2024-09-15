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
import Feature_3 from "../../Front/Features/Feature_3";

export default function AdminFeatures_3({ dbCollection, item }) {
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

  const [title5, setTitle5] = useState("");
  const [desc5, setDesc5] = useState("");

  const [title6, setTitle6] = useState("");
  const [desc6, setDesc6] = useState("");

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
        title5,
        desc5,
        title6,
        desc6,
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
        if (res.data?.features_3) {
          setEnable(res.data?.features_3?.enable);
          setTitle(res.data?.features_3?.title);
          setDesc(res.data?.features_3?.desc);

          setTitle1(res.data?.features_3?.title1);
          setDesc1(res.data?.features_3?.setDesc1);

          setTitle2(res.data?.features_3?.title2);
          setDesc2(res.data?.features_3?.setDesc2);

          setTitle3(res.data?.features_3?.title3);
          setDesc3(res.data?.features_3?.setDesc3);

          setTitle4(res.data?.features_3?.title4);
          setDesc4(res.data?.features_3?.setDesc4);

          setTitle5(res.data?.features_3?.title5);
          setDesc5(res.data?.features_3?.setDesc5);

          setTitle6(res.data?.features_3?.title6);
          setDesc6(res.data?.features_3?.setDesc6);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          Feature 3 Component
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
          <div>
            <Input
              value={title5}
              onChange={(e) => setTitle5(e.target.value)}
              type="text"
              label="Feature 5 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={desc5}
              onChange={(e) => setDesc5(e.target.value)}
              type="text"
              label="Feature 5 Description"
            />
          </div>
          <div>
            <Input
              value={title6}
              onChange={(e) => setTitle6(e.target.value)}
              type="text"
              label="Feature 6 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={desc6}
              onChange={(e) => setDesc6(e.target.value)}
              type="text"
              label="Feature 6 Description"
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
      <Feature_3 data={{ enable: true }} />
    </div>
  );
}
