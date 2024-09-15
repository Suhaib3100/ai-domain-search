import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Hero() {
  const [topTitle, setTopTitle] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [quoteMessage, setQuoteMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [designation, setDesignation] = useState("");

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/contact-us", {
        topTitle,
        title,
        desc,
        quoteMessage,
        userName,
        designation,
        loading,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/contact-us").then((res) => {
      if (res.data?.data) {
        setTopTitle(res.data?.data?.topTitle);
        setTitle(res.data?.data?.title);
        setDesc(res.data?.data?.desc);
        setQuoteMessage(res.data?.data?.quoteMessage);
        setUserName(res.data?.data?.userName);
        setDesignation(res.data?.data?.designation);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Hero Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={topTitle}
            onChange={(e) => setTopTitle(e.target.value)}
            type="text"
            label="Top Title Text"
          />
          <Spacer y="2" />

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

          <Spacer y="2" />
          <Input
            value={quoteMessage}
            onChange={(e) => setQuoteMessage(e.target.value)}
            type="text"
            label="Block Quote Text"
          />
          <Spacer y="2" />
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            label="User Name"
          />
          <Spacer y="2" />
          <Input
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            type="text"
            label="User Designation"
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
      </CardBody>
    </Card>
  );
}
