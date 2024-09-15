import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function ListTitle() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);

    axios
      .post("/api/best-reseller-hosting/add-hosting/list-title", {
        title,
        desc,
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
    axios
      .get("/api/best-reseller-hosting/add-hosting/list-title")
      .then((res) => {
        if (res.data.listTitle) {
          setTitle(res.data?.listTitle?.title);
          setDesc(res.data?.listTitle?.desc);
        }
      });
  }, []);

  return (
    <div>
      <Toaster />
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        label="Set Title"
      />
      <Spacer y="2" />
      <Input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        label="Set Description"
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
  );
}
