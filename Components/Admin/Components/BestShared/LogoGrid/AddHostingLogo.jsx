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
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
export default function AddHostingLogo() {
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState("");
  const token = localStorage.getItem("lg_tk");
  const formData = new FormData();
  formData.append("logo", logo);
  formData.append("uniqueId", uuidv4());
  formData.append("token", token);
  const handleSave = (e) => {
    setLoading(true);
    axios
      .post("/api/best-shared-hosting/logo-grid", formData)
      .then((res) => {
        setLoading(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  return (
    <div>
      <Toaster />
      <Input
        onChange={(e) => setLogo(e.target.files[0])}
        type="file"
        label="Web Hosting Company Logo"
        placeholder="Hosting Logo"
        labelPlacement="outside-left"
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
