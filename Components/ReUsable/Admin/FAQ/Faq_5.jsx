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
import FAQ_5 from "../../Front/FAQ/FAQ_5";

export default function AdminFaq_5({ dbCollection, item }) {
  const [title, setTitle] = useState("");
  //   const [desc, setDesc] = useState("");
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

  const [enable, setEnable] = useState(false);

  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));

  const handleSave = () => {
    setLoading(true);
    axios
      .post("/api/data/plain-data", {
        title,
        // desc,
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
        if (res.data?.faq_5) {
          setEnable(res.data?.faq_5?.enable);
          setTitle(res.data?.faq_5?.title);
          //   setDesc(res.data?.faq_5?.desc);

          setQ1(res.data?.faq_5?.q1);
          setA1(res.data?.faq_5?.a1);

          setQ2(res.data?.faq_5?.q2);
          setA2(res.data?.faq_5?.a2);

          setQ3(res.data?.faq_5?.q3);
          setA3(res.data?.faq_5?.a3);

          setQ4(res.data?.faq_5?.q4);
          setA4(res.data?.faq_5?.a4);

          setQ5(res.data?.faq_5?.q5);
          setA5(res.data?.faq_5?.a5);

          setQ6(res.data?.faq_5?.q6);
          setA6(res.data?.faq_5?.a6);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <div className="p-2">
        <h4 className="text-xl font-semibold text-violet-700">
          FAQ 5 Component
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
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              value={q1}
              onChange={(e) => setQ1(e.target.value)}
              type="text"
              label="FAQ 1 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={a1}
              onChange={(e) => setA1(e.target.value)}
              type="text"
              label="FAQ 1 Answer"
            />
          </div>
          <div>
            <Input
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              type="text"
              label="FAQ 2 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={a2}
              onChange={(e) => setA2(e.target.value)}
              type="text"
              label="FAQ 2 Answer"
            />
          </div>
          <div>
            <Input
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              type="text"
              label="FAQ 3 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={a3}
              onChange={(e) => setA3(e.target.value)}
              type="text"
              label="FAQ 3 Answer"
            />
          </div>
          {/* <div>
            <Input
              value={q4}
              onChange={(e) => setQ4(e.target.value)}
              type="text"
              label="FAQ 4 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={a4}
              onChange={(e) => setA4(e.target.value)}
              type="text"
              label="FAQ 4 Answer"
            />
          </div> */}
          {/* <div>
            <Input
              value={q5}
              onChange={(e) => setQ5(e.target.value)}
              type="text"
              label="FAQ 5 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={a5}
              onChange={(e) => setA5(e.target.value)}
              type="text"
              label="FAQ 5 Answer"
            />
          </div> */}
          {/* <div>
            <Input
              value={q6}
              onChange={(e) => setQ6(e.target.value)}
              type="text"
              label="FAQ 6 Title"
            />
            <Spacer y="2" />
            <Textarea
              value={a6}
              onChange={(e) => setA6(e.target.value)}
              type="text"
              label="FAQ 6 Answer"
            />
          </div> */}
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
      <FAQ_5 data={{ enable: true }} />
    </div>
  );
}
