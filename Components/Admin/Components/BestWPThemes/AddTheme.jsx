import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TextEditor from "../../../ReUsable/Editor";
import { v4 as uuidv4 } from "uuid";
export default function AddTheme() {
  const [topTitle, setTopTitle] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("lg_tk");
  const formData = new FormData();

  formData.append("topTitle", topTitle);
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("image", image);
  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);
  formData.append("rightButtonText", rightButtonText);
  formData.append("rightButtonLink", rightButtonLink);
  formData.append("content", content);
  formData.append("token", token);
  formData.append("uniqueId", uuidv4());

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/best-wp-themes/add-theme", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  // useEffect(() => {
  //   axios.get("/api/best-wp-themes/add-theme").then((res) => {
  //     if (res.data?.hero) {
  //       setIconText1(res.data?.hero?.iconText1);
  //       setIconText2(res.data?.hero?.iconText2);
  //       setIconText3(res.data?.hero?.iconText3);
  //       setTitle(res.data?.hero?.title);
  //       setDesc(res.data?.hero?.desc);
  //       setLeftButtonText(res.data?.hero?.leftButtonText);
  //       setLeftButtonLink(res.data?.hero?.leftButtonLink);
  //       setRightButtonText(res.data?.hero?.rightButtonText);
  //       setRightButtonLink(res.data?.hero?.rightButtonLink);
  //     }
  //   });
  // }, []);

  return (
    <div className="m-4 !border-0" shadow="lg">
      <Toaster />

      <div>
        <div className="flex">
          <Input
            value={topTitle}
            onChange={(e) => setTopTitle(e.target.value)}
            type="text"
            label="Top Title"
          />
        </div>
        <Spacer y="3" />
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          label="Theme Name"
        />
        <Spacer y="3" />
        <Input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          label="Theme Short Description"
        />
        <Spacer y="3" />
        <Input
          type="file"
          labelPlacement="outside-left"
          label="Theme Screenshot image"
          placeholder="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Spacer y="3" />
        <div className="flex  justify-between items-center">
          <div className="w-full mb-2 mr-3">
            <Input
              value={leftButtonText}
              onChange={(e) => setLeftButtonText(e.target.value)}
              type="text"
              label="Left Button Text"
            />
            <Spacer y="2" />
            <Input
              value={leftButtonLink}
              onChange={(e) => setLeftButtonLink(e.target.value)}
              type="text"
              label="Left Button Affiliate Link"
            />
          </div>
          <div className="w-full">
            <Input
              value={rightButtonText}
              onChange={(e) => setRightButtonText(e.target.value)}
              type="text"
              label="Right Button Text"
            />
            <Spacer y="2" />
            <Input
              value={rightButtonLink}
              onChange={(e) => setRightButtonLink(e.target.value)}
              type="text"
              label="Right Button Affiliate Link"
            />
          </div>
        </div>
        <div className="mt-4">
          <p>Content</p>
          <TextEditor
            setDefaultStyle="font-size:20px;"
            height="100vh"
            setContent={content}
            onChange={(e) => setContent(e)}
          />
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
    </div>
  );
}
