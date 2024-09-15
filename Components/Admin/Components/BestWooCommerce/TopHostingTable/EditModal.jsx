import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import axios from "axios";

export default function EditModal({ isOpen, onOpen, onOpenChange, data }) {
  const [id, setId] = useState("");
  const [hostingName, setHostingName] = useState("");
  const [pricing, setPricing] = useState("");
  const [traffic, setTraffic] = useState("");
  const [storage, setStorage] = useState("");
  const [freeDomain, setFreeDomain] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [uniqueId, setUinqueId] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);
    const formData = new FormData();

    axios
      .post("/api/best-woocommerce-hosting/top-hosting-table/edit", {
        id,
        hostingName,
        pricing,
        traffic,
        storage,
        freeDomain,
        affiliateLink,
        uniqueId,
        token,
      })
      .then((res) => {
        setLoading(false);
        alert(res.data.message);
      });
  };

  const handleDelete = (x) => {
    setLoading2(true);
    axios
      .post("/api/best-woocommerce-hosting/top-hosting-table/delete", {
        uniqueId,
        token,
      })
      .then((res) => {
        setLoading2(false);
        alert(res.data.message);
      });
  };
  useEffect(() => {
    if (data) {
      setId(data?.id);
      setHostingName(data?.hostingName);
      setPricing(data?.pricing);
      setTraffic(data?.traffic);
      setStorage(data?.storage);
      setFreeDomain(data?.freeDomain);
      setAffiliateLink(data?.affiliateLink);
      setUinqueId(data?.uniqueId);
    }
  }, [data]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        size="xl"
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
                  <Spacer y="1" />
                  <Input
                    value={hostingName}
                    onChange={(e) => setHostingName(e.target.value)}
                    type="text"
                    label="Web Hosting Company Name"
                  />
                  <Spacer y="1" />
                  <Input
                    value={pricing}
                    onChange={(e) => setPricing(e.target.value)}
                    type="text"
                    label="Hosting Pricing"
                  />
                  <Spacer y="1" />
                  <Input
                    value={traffic}
                    onChange={(e) => setTraffic(e.target.value)}
                    type="text"
                    label="Hosting Traffic"
                  />
                  <Spacer y="1" />
                  <Input
                    value={storage}
                    onChange={(e) => setStorage(e.target.value)}
                    type="text"
                    label="Hosting Storage"
                  />

                  <Spacer y="1" />
                  <Input
                    value={freeDomain}
                    onChange={(e) => setFreeDomain(e.target.value)}
                    type="text"
                    label="Is Domain Free || Yes or No only"
                  />

                  <Spacer y="1" />
                  <Input
                    value={affiliateLink}
                    onChange={(e) => setAffiliateLink(e.target.value)}
                    type="text"
                    label="Affiliate Link"
                  />

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
                      variant="shadow"
                      isLoading={loading2}
                      color="danger"
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
