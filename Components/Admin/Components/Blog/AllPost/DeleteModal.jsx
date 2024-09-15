import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spacer,
} from "@nextui-org/react";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export default function EditModal({ isOpen, onOpenChange, data }) {
  const [id, setUniqueId] = useState("");
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("lg_tk"));
  const handleDelete = (x) => {
    setLoading(true);

    axios
      .post("/api/blog/delete-post", { id, token })
      .then((res) => {
        setLoading(false);

        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };
  useEffect(() => {
    if (data) {
      setUniqueId(data);
    }
  }, [data]);

  return (
    <>
      <Toaster />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div>
                  <p className="text-center text-xl">
                    Are you sure want to delete this post?
                  </p>
                  <Spacer y="4" />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button
                  size="md"
                  color="danger"
                  variant="shadow"
                  isLoading={loading}
                  onPress={handleDelete}
                >
                  Yes
                </Button>
                <Button
                  size="md"
                  color="secondary"
                  variant="shadow"
                  // isLoading={loading}
                  onPress={onClose}
                >
                  No
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
