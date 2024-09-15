import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function AddTitle() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/best-shared-hosting/add-title", { title, token })
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/best-shared-hosting/add-title").then((res) => {
      if (res.data?.logoGridTitle) {
        setTitle(res.data?.logoGridTitle?.title);
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
        label="Title"
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
