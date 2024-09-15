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
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
export default function EditModal({ isOpen, onOpen, onOpenChange, data }) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [id, setId] = useState("");
  const [hosting, setHosting] = useState("");
  const [pricing, setPricing] = useState("");
  const [traffic, setTraffic] = useState("");
  const [storage, setStorage] = useState("");
  const [freeDomain, setFreeDomain] = useState("");
  const [link, setLink] = useState("");
  const [uniqueId, setUinqueId] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleSave = (e) => {
    setLoading(true);

    axios
      .post("/api/bulk-location/add-hosting/edit", {
        id,
        hosting,
        pricing,
        traffic,
        storage,
        freeDomain,
        link,
        uniqueId,
        token,
      })
      .then((res) => {
        setLoading(false);
        alert(res.data?.message);
        // toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        alert(res.data?.message);
        // toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  const handleDelete = (x) => {
    setLoading2(true);
    axios
      .post("/api/bulk-location/add-hosting/delete", { uniqueId, token })
      .then((res) => {
        setLoading2(false);
        alert(res.data?.message);
        // toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading2(false);
        alert(res.data?.message);
        // toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };
  useEffect(() => {
    // console.log(data);
    if (data) {
      setId(data?.id);
      setHosting(data?.hosting);
      setPricing(data?.pricing);
      setTraffic(data?.traffic);
      setStorage(data?.storage);
      setFreeDomain(data?.freeDomain);
      setLink(data?.link);
      setUinqueId(data?.uniqueId);
    }
  }, [data]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
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
                    value={hosting}
                    onChange={(e) => setHosting(e.target.value)}
                    type="text"
                    label="Web Hosting Company Name"
                  />
                  <Spacer y="1" />
                  <Input
                    value={pricing}
                    onChange={(e) => setPricing(e.target.value)}
                    type="text"
                    label="Hosting Price"
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
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    type="text"
                    label="Hosting Affiliate Link"
                  />
                  <Spacer y="4" />
                  <div className="flex justify-around">
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
                <p>{}</p>
                <Button color="secondary" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
