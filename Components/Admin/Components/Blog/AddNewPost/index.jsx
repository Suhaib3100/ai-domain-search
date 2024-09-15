import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Spacer,
  Switch,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";

import TextEditor from "../../../../ReUsable/Editor";
import axios from "axios";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
export default function AddNewPost() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router.query.post_id;
  const [postHeadline, setPostHeadline] = useState("");
  const [category, setCategory] = useState("");
  const [permalink, setPermalink] = useState("");
  const [title, setTitle] = useState("");
  const [meta, setMeta] = useState("");
  const [postImage, setPostImage] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const currentDate = new Date();
  const today = currentDate.toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const token = localStorage.getItem("lg_tk");
  const formData = new FormData();
  formData.append("id", id);
  formData.append("postHeadline", postHeadline);
  formData.append(
    "permalink",
    permalink || title.split(" ").join("-").toLowerCase()
  );
  formData.append("title", title);
  formData.append("meta", meta);
  formData.append("postImage", postImage);
  formData.append("category", category);
  formData.append("content", content);
  formData.append("published", published);
  formData.append("date", today);
  formData.append("token", token);

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/blog/add-new-post", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader className="flex flex-col items-start">
        <p className="text-xl">Add new Post</p>
        <p className="text-sm">Create New Blog Post</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={postHeadline}
            onChange={(e) => setPostHeadline(e.target.value)}
            type="text"
            label="Post Headline"
          />
          <Spacer y="2" />
          <Input
            value={permalink}
            onChange={(e) =>
              setPermalink(e.target.value.split(" ").join("-").toLowerCase())
            }
            type="text"
            label="URL Permalink"
          />
          <Spacer y="2" />
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            label="Post Category"
          />
          <Spacer y="2" />
          <Input
            // value={postImage}
            onChange={(e) => setPostImage(e.target.files[0])}
            type="file"
            placeholder="Post Image"
            labelPlacement="outside-left"
            label="Post Image"
          />
          <Spacer y="2" />
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            label="Page Seo Title"
          />
          <Spacer y="2" />
          <Textarea
            value={meta}
            onChange={(e) => setMeta(e.target.value)}
            type="text"
            label="Meta Description"
          />
          <Spacer y="2" />
          <p className="text-xl">Post Content</p>
          <TextEditor
            setDefaultStyle="font-size:20px; font-family:jost"
            height="100vh"
            setContent={content}
            onChange={(e) => setContent(e)}
          />
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button
          size="md"
          color="secondary"
          variant="shadow"
          isLoading={loading}
          onPress={handleSave}
        >
          Save
        </Button>
        <Switch
          value={published}
          onChange={() => setPublished(!published)}
          defaultSelected
        >
          Published
        </Switch>
      </CardFooter>
    </Card>
  );
}
