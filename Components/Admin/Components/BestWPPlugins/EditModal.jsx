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
  Textarea,
} from "@nextui-org/react";

import axios from "axios";
import TextEditor from "../../../ReUsable/Editor";
import toast, { Toaster } from "react-hot-toast";

export default function EditModal({ isOpen, onOpen, onOpenChange, data }) {
  const [topTitle, setTopTitle] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [leftButtonText, setLeftButtonText] = useState("");
  const [leftButtonLink, setLeftButtonLink] = useState("");
  const [rightButtonText, setRightButtonText] = useState("");
  const [rightButtonLink, setRightButtonLink] = useState("");
  const [content, setContent] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const token = localStorage.getItem("lg_tk");
  const formData = new FormData();

  formData.append("topTitle", topTitle);
  formData.append("title", title);
  formData.append("desc", desc);
  formData.append("image", image);
  formData.append("leftButtonText", leftButtonText);
  formData.append("leftButtonLink", leftButtonLink);
  formData.append("rightButtonText", rightButtonText);
  formData.append("rightButtonLink", rightButtonLink);
  formData.append("content", content);
  formData.append("uniqueId", uniqueId);
  formData.append("token", token);

  const handleSave = (e) => {
    setLoading1(true);
    axios
      .post("/api/best-wp-plugins/edit-plugin", formData)
      .then((res) => {
        setLoading1(false);
        toast(res.data?.message, { position: "bottom-right" });
      })
      .catch((err) => {
        toast.error("Some Error Occurred", { position: "bottom-right" });
      });
  };

  const handleDelete = (x) => {
    setLoading2(true);
    axios
      .post("/api/best-wp-plugins/delete-plugin", { uniqueId, token })
      .then((res) => {
        setLoading2(false);
        toast(res.data?.message, { position: "bottom-right" });
      });
  };

  useEffect(() => {
    // console.log(data);
    if (data) {
      setTopTitle(data?.topTitle);
      setTitle(data?.title);
      setDesc(data?.desc);
      setLeftButtonText(data?.leftButtonText);
      setLeftButtonLink(data?.leftButtonLink);
      setRightButtonText(data?.rightButtonText);
      setRightButtonLink(data?.rightButtonLink);
      setUniqueId(data?.uniqueId);
      setContent(data?.content);
    }
  }, [data]);

  return (
    <div>
      <Toaster />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        scrollBehavior="outside"
        className="z-auto w-full ml-20"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Plugin
              </ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex">
                    <Input
                      value={topTitle}
                      onChange={(e) => setTopTitle(e.target.value)}
                      type="text"
                      label="Top Title"
                    />
                  </div>
                  <Spacer y="3" />
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    label="Theme Name"
                  />
                  <Spacer y="3" />
                  <Input
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    type="text"
                    label="Theme Short Description"
                  />
                  <Spacer y="3" />
                  <Input
                    type="file"
                    labelPlacement="outside-left"
                    label="Theme Screenshot image"
                    placeholder="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <Spacer y="3" />
                  <div className="flex  justify-between items-center">
                    <div className="w-full mb-2 mr-3">
                      <Input
                        value={leftButtonText}
                        onChange={(e) => setLeftButtonText(e.target.value)}
                        type="text"
                        label="Left Button Text"
                      />
                      <Spacer y="2" />
                      <Input
                        value={leftButtonLink}
                        onChange={(e) => setLeftButtonLink(e.target.value)}
                        type="text"
                        label="Left Button Affiliate Link"
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        value={rightButtonText}
                        onChange={(e) => setRightButtonText(e.target.value)}
                        type="text"
                        label="Right Button Text"
                      />
                      <Spacer y="2" />
                      <Input
                        value={rightButtonLink}
                        onChange={(e) => setRightButtonLink(e.target.value)}
                        type="text"
                        label="Right Button Affiliate Link"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p>Content</p>
                    <TextEditor
                      setDefaultStyle="font-size:20px;"
                      height="100vh"
                      setContent={content}
                      onChange={(e) => setContent(e)}
                    />
                  </div>
                  <Spacer y="4" />
                  <div className="w-full flex justify-between items-center">
                    <Button
                      size="md"
                      color="secondary"
                      variant="shadow"
                      isLoading={loading1}
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
