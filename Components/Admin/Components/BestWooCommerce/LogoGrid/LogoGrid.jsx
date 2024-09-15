import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function LogoGrid() {
  //   const [newsText, setNewsText] = useState("");
  //   const [newsLink, setNewsLink] = useState("");
  const [title, setTitle] = useState("");
  const [logo1, setLogo1] = useState("");
  const [logo2, setLogo2] = useState("");
  const [logo3, setLogo3] = useState("");
  const [logo4, setLogo4] = useState("");
  const token = localStorage.getItem("lg_tk");
  const formData = new FormData();
  formData.append("title", title);
  formData.append("logo1", logo1);
  formData.append("logo2", logo2);
  formData.append("logo3", logo3);
  formData.append("logo4", logo4);
  formData.append("token", token);

  const handleSave = (e) => {
    axios
      .post("/api/best-woocommerce-hosting/logo-grid", formData)
      .then((res) => console.log(res.data));
  };

  //   useEffect(() => {
  //     axios.get("/api/best-woocommerce-hosting/logo-grid").then((res) => {
  //       if (res.data?.logoGrid) {
  //         setTitle(res.data?.logoGrid?.title);
  //       }
  //     });
  //   }, []);

  return (
    <div>
      <h4>Hero Component</h4>

      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        label="Title"
      />
      <Spacer y="1" />
      <Input
        // value={desc}
        onChange={(e) => setLogo1(e.target.files[0])}
        type="file"
        labelPlacement="outside"
        label="Hosting Logo 1"
        placeholder="image"
      />
      <Spacer y="1" />
      <Input
        // value={buttonText}
        onChange={(e) => setLogo2(e.target.files[0])}
        type="file"
        labelPlacement="outside"
        label="Hosting Logo 2"
        placeholder="image"
      />
      <Spacer y="1" />
      <Input
        // value={buttonLink}
        onChange={(e) => setLogo3(e.target.files[0])}
        type="file"
        labelPlacement="outside"
        label="Hosting Logo 3"
        placeholder="image"
      />
      <Spacer y="1" />
      <Input
        // value={startRatingText}
        onChange={(e) => setLogo4(e.target.files[0])}
        type="file"
        labelPlacement="outside"
        label="Hosting Logo 4"
        placeholder="image"
      />
      <Spacer y="4" />

      <Button onPress={handleSave}>Save</Button>
    </div>
  );
}
