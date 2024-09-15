import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Image,
  Input,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Logo() {
  const [logo, setLogo] = useState("");
  const [favicon, setFavicon] = useState("");
  const [logoImage, setLogoImage] = useState("");
  const [favImage, setFavImage] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const token = localStorage.getItem("lg_tk");

  const formData1 = new FormData();
  formData1.append("logo", logo);
  formData1.append("token", token);

  const formData2 = new FormData();
  formData2.append("favicon", favicon);
  formData2.append("token", token);

  const handleLogo = (e) => {
    setLoading1(true);
    axios
      .post("/api/logo/logo", formData1)
      .then((res) => {
        setLoading1(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };
  const handleFavicon = (e) => {
    setLoading2(true);
    axios
      .post("/api/logo/favicon", formData2)
      .then((res) => {
        setLoading2(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  useEffect(() => {
    axios.get("/api/logo/logo").then((res) => {
      setLogoImage(res.data?.logo?.split("public")[1]);
      setFavImage(res.data?.favicon?.split("public")[1]);
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
          <div className="flex justify-center mb-10 mt-5">
            <Image
              className="w-96 h-full"
              src={logoImage || ""}
              alt="Logo"
              aria-label="image"
            />
          </div>
          <div className="flex justify-start items-center">
            <Input
              type="file"
              labelPlacement="outside-left"
              className="w-auto"
              label="Upload Logo"
              placeholder="logo"
              onChange={(e) => setLogo(e.target.files[0])}
            />

            <Chip color="secondary" variant="bordered" className="ml-5">
              Logo should be in .png file only.
            </Chip>
          </div>
          <Spacer y="4" />
          <Button
            size="md"
            color="secondary"
            variant="shadow"
            isLoading={loading1}
            onPress={handleLogo}
          >
            Upload
          </Button>
          <Spacer y="4" />
          <Divider />
          <Spacer y="4" />
          <div className="flex justify-center mb-3">
            <Image
              className="w-52"
              src={favImage || ""}
              alt="Logo"
              aria-label="image"
            />
          </div>
          <div className="flex justify-start items-center">
            <Input
              type="file"
              labelPlacement="outside-left"
              label="Upload Favicon"
              placeholder="image"
              className="w-auto"
              onChange={(e) => setFavicon(e.target.files[0])}
            />
            <Chip color="secondary" variant="bordered" className="ml-5">
              Favicon should be in .png file only.
            </Chip>
          </div>
          <Spacer y="4" />
          <Button
            size="md"
            color="secondary"
            variant="shadow"
            isLoading={loading2}
            onPress={handleFavicon}
          >
            Upload
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
