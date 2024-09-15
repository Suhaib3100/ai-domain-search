import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spacer,
  Input,
} from "@nextui-org/react";

import axios from "axios";

export default function EditModal({ isOpen, onOpen, onOpenChange, data }) {
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
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [uniqueId, setUinqueId] = useState("");
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
    formData.append("uniqueId", uniqueId);
    formData.append("token", token);

    axios.post("/api/hosting-coupon/add-coupon/edit", formData).then((res) => {
      setLoading(false);
      alert(res.data.message);
    });
  };
  const handleDelete = (x) => {
    setLoading2(true);
    axios
      .post("/api/hosting-coupon/add-coupon/delete", { uniqueId, token })
      .then((res) => {
        setLoading2(false);
        alert(res.data.message);
      });
  };
  useEffect(() => {
    // console.log(data);
    if (data) {
      setId(data?.id);
      setHostingName(data?.hostingName);
      setCouponTitle(data?.couponTitle);
      setExclusive(data?.exclusive);
      setExpiry(data?.expiry);
      setDiscount(data?.discount);
      setCouponUsed(data?.couponUsed);
      setAffiliateLink(data?.affiliateLink);
      setCouponCode(data?.couponCode);
      setModalTitle(data?.modalTitle);
      setModalText(data?.modalText);
      setUinqueId(data?.uniqueId);
      setModalFooterText(data?.modalFooterText);
    }
  }, [data]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        size="3xl"
        scrollBehavior="outside"
        className="z-auto w-full ml-20"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div>
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
                    label="Web Hosting Company Name"
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
                    label="Hosting Coupon Affiliate Link"
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
                    label="Hosting Logo"
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
                  <Spacer y="4" />
                  <div className="flex justify-between">
                    <Button
                      size="md"
                      color="secondary"
                      variant="shadow"
                      isLoading={loading}
                      onPress={handleSave}
                    >
                      Save
                    </Button>
                    <Button
                      size="md"
                      color="danger"
                      variant="shadow"
                      isLoading={loading2}
                      onPress={handleDelete}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
