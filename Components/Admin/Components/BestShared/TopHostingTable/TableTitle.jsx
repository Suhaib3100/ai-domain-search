import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function TableTitle() {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/best-shared-hosting/hosting-table-title", {
        title,
        desc,
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

  return (
    <div>
      <Toaster />
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="number"
        label="Hosting Table Title"
      />
      <Spacer y="1" />
      <Input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        label="Hosting Table Description"
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
