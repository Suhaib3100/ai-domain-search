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
import toast, { Toaster } from "react-hot-toast";
export default function CouponFaq() {
  const [loading, setLoading] = useState(false);
  const [faqTitle, setFaqTitle] = useState("");
  const [faqDesc, setFaqDesc] = useState("");
  const [q1, setQ1] = useState("");
  const [a1, setA1] = useState("");
  const [q2, setQ2] = useState("");
  const [a2, setA2] = useState("");
  const [q3, setQ3] = useState("");
  const [a3, setA3] = useState("");
  const [q4, setQ4] = useState("");
  const [a4, setA4] = useState("");
  const [q5, setQ5] = useState("");
  const [a5, setA5] = useState("");
  const [q6, setQ6] = useState("");
  const [a6, setA6] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/hosting-coupon/faq", {
        faqTitle,
        faqDesc,
        q1,
        a1,
        q2,
        a2,
        q3,
        a3,
        q4,
        a4,
        q5,
        a5,
        q6,
        a6,
        token,
      })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/hosting-coupon/faq").then((res) => {
      if (res.data?.faq) {
        setFaqTitle(res.data?.faq?.faqTitle);
        setFaqDesc(res.data?.faq?.faqDesc);
        setQ1(res.data?.faq?.q1);
        setA1(res.data?.faq?.a1);
        setQ2(res.data?.faq?.q2);
        setA2(res.data?.faq?.a2);
        setQ3(res.data?.faq?.q3);
        setA3(res.data?.faq?.a3);
        setQ4(res.data?.faq?.q4);
        setA4(res.data?.faq?.a4);
        setQ5(res.data?.faq?.q5);
        setA5(res.data?.faq?.a5);
        setQ6(res.data?.faq?.q6);
        setA6(res.data?.faq?.a6);
      }
    });
  }, []);

  return (
    <Card className="m-4 !border-0" shadow="lg">
      <Toaster />
      <CardHeader>
        <h4 className="text-xl font-semibold text-violet-700">
          Call To Action Component
        </h4>
      </CardHeader>
      <Divider />
      <CardBody>
        <div>
          <Input
            value={faqTitle}
            onChange={(e) => setFaqTitle(e.target.value)}
            type="text"
            label="Faq Title"
          />
          <Spacer y="1" />
          <Input
            value={faqDesc}
            onChange={(e) => setFaqDesc(e.target.value)}
            type="text"
            label="Faq Description"
          />
          <Spacer y="4" />
          <Input
            value={q1}
            onChange={(e) => setQ1(e.target.value)}
            type="text"
            label="Faq 1 Question"
          />
          <Spacer y="1" />
          <Textarea
            value={a1}
            onChange={(e) => setA1(e.target.value)}
            type="text"
            label="Faq 1 Answer"
          />
          <Spacer y="3" />
          <Input
            value={q2}
            onChange={(e) => setQ2(e.target.value)}
            type="text"
            label="Faq 2 Question"
          />
          <Spacer y="1" />
          <Textarea
            value={a2}
            onChange={(e) => setA2(e.target.value)}
            type="text"
            label="Faq 2 Answer"
          />
          <Spacer y="3" />

          <Input
            value={q3}
            onChange={(e) => setQ3(e.target.value)}
            type="text"
            label="Faq 3 Question"
          />
          <Spacer y="1" />
          <Textarea
            value={a3}
            onChange={(e) => setA3(e.target.value)}
            type="text"
            label="Faq 3 Answer"
          />
          <Spacer y="3" />
          <Input
            value={q4}
            onChange={(e) => setQ4(e.target.value)}
            type="text"
            label="Faq 4 Question"
          />
          <Spacer y="1" />
          <Textarea
            value={a4}
            onChange={(e) => setA4(e.target.value)}
            type="text"
            label="Faq 4 Answer"
          />

          <Spacer y="3" />
          <Input
            value={q5}
            onChange={(e) => setQ5(e.target.value)}
            type="text"
            label="Faq 5 Question"
          />
          <Spacer y="1" />
          <Textarea
            value={a5}
            onChange={(e) => setA5(e.target.value)}
            type="text"
            label="Faq 5 Answer"
          />

          <Spacer y="3" />
          <Input
            value={q6}
            onChange={(e) => setQ6(e.target.value)}
            type="text"
            label="Faq 6 Question"
          />
          <Spacer y="1" />
          <Textarea
            value={a6}
            onChange={(e) => setA6(e.target.value)}
            type="text"
            label="Faq 6 Answer"
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
