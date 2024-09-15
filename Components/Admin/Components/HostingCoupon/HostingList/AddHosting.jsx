import { Button, Input, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
export default function AddHosting() {
  const [loading, setLoading] = useState(false);

  const [id, setId] = useState("");
  const [hostingName, setHostingName] = useState("");

  const [couponTitle, setCouponTitle] = useState("");
  const [exclusive, setExclusive] = useState("");
  const [expiry, setExpiry] = useState("");

  const [discount, setDiscount] = useState("");
  const [couponUsed, setCouponUsed] = useState("");

  const [affiliateLink, setAffiliateLink] = useState("");
  const [hostingImage, setHostingImage] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const [modalFooterText, setModalFooterText] = useState("");

  const token = localStorage.getItem("lg_tk");
  const handleSave = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("id", id);
    formData.append("hostingName", hostingName);
    formData.append("couponTitle", couponTitle);
    formData.append("exclusive", exclusive);
    formData.append("expiry", expiry);
    formData.append("discount", discount);
    formData.append("couponUsed", couponUsed);
    formData.append("affiliateLink", affiliateLink);
    formData.append("hostingImage", hostingImage);
    formData.append("couponCode", couponCode);
    formData.append("modalTitle", modalTitle);
    formData.append("modalText", modalText);
    formData.append("modalFooterText", modalFooterText);
    formData.append("uniqueId", uuidv4());
    formData.append("token", token);
    axios
      .post("/api/hosting-coupon/add-coupon", formData)
      .then((res) => {
        setLoading(false);
        setId("");
        setHostingName("");
        setCouponTitle("");
        setExclusive("");
        setExpiry("");
        setDiscount("");
        setCouponUsed("");
        setAffiliateLink("");
        setHostingImage("");
        setCouponCode("");
        setModalTitle("");
        setModalText("");
        setModalFooterText("");
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
        value={id}
        onChange={(e) => setId(e.target.value)}
        type="number"
        label="Set ID / Serial No"
      />
      <Spacer y="2" />
      <Input
        value={hostingName}
        onChange={(e) => setHostingName(e.target.value)}
        type="text"
        label="Coupon Provider Name"
      />
      <Spacer y="2" />
      <Input
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        type="text"
        label="Coupon Code"
      />
      <Spacer y="2" />
      <Input
        value={affiliateLink}
        onChange={(e) => setAffiliateLink(e.target.value)}
        type="text"
        label="Affiliate Link"
      />
      <Spacer y="2" />
      <Input
        value={couponTitle}
        onChange={(e) => setCouponTitle(e.target.value)}
        type="text"
        label="Coupon Title"
      />
      <Spacer y="2" />
      <Input
        value={exclusive}
        onChange={(e) => setExclusive(e.target.value)}
        type="text"
        label="Exclusive?"
      />
      <Spacer y="2" />
      <Input
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        type="text"
        label="Set Expiry Text"
      />

      <Spacer y="2" />
      <Input
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        type="text"
        label="Discount Text"
      />

      <Spacer y="2" />
      <Input
        value={couponUsed}
        onChange={(e) => setCouponUsed(e.target.value)}
        type="text"
        label="How many users used this coupon?"
      />

      <Spacer y="2" />
      <Input
        onChange={(e) => setHostingImage(e.target.files[0])}
        type="file"
        labelPlacement="outside-left"
        label="Coupon Provider Logo"
        placeholder="Logo"
      />
      <Spacer y="4" />
      <Input
        value={modalTitle}
        onChange={(e) => setModalTitle(e.target.value)}
        type="text"
        label="Coupon Modal Title"
      />

      <Spacer y="2" />
      <Input
        value={modalText}
        onChange={(e) => setModalText(e.target.value)}
        type="text"
        label="Set Coupon Modal Text"
      />

      <Spacer y="2" />
      <Input
        value={modalFooterText}
        onChange={(e) => setModalFooterText(e.target.value)}
        type="text"
        label="Coupon Modal Footer Text"
      />

      <Spacer y="2" />

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
