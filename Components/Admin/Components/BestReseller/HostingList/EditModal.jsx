import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Spacer,
  Input,
  Textarea,
} from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import TextEditor from "../../../../ReUsable/Editor";

export default function EditModal({ isOpen, onOpen, onOpenChange, data }) {
  const [id, setId] = useState("");
  const [hostingName, setHostingName] = useState("");
  const [hostingTag, setHostingTag] = useState("");
  const [hostingRating, setHostingRating] = useState("");
  const [hostingFeatures, setHostingFeatures] = useState("");
  const [buttonText, setButtonText] = useState("");

  const [affiliateLink, setAffiliateLink] = useState("");
  const [hostingImage, setHostingImage] = useState("");
  const [whyPicked, setWhyPicked] = useState("");
  const [prosCons, setProsCons] = useState("");
  const [uniqueId, setUinqueId] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const token = localStorage.getItem("lg_tk");
  const handleSave = (e) => {
    setLoading(true);
    const formData = new FormData();

    formData.append("id", id);
    formData.append("hostingName", hostingName);
    formData.append("hostingTag", hostingTag);
    formData.append("hostingRating", hostingRating);
    formData.append("hostingFeatures", hostingFeatures);
    formData.append("buttonText", buttonText);
    formData.append("affiliateLink", affiliateLink);
    formData.append("hostingImage", hostingImage);
    formData.append("whyPicked", whyPicked);
    formData.append("prosCons", prosCons);
    formData.append("uniqueId", uniqueId);
    formData.append("token", token);
    axios
      .post("/api/best-reseller-hosting/add-hosting/edit", formData)
      .then((res) => {
        setLoading(false);
        // alert(res.data.message);
        toast(res.data?.message, { position: "bottom-right" });
      });
  };
  const handleDelete = (x) => {
    setLoading2(true);
    axios
      .post("/api/best-reseller-hosting/add-hosting/delete", {
        uniqueId,
        token,
      })
      .then((res) => {
        setLoading2(false);
        // alert(res.data.message);
        toast(res.data?.message, { position: "bottom-right" });
      });
  };
  useEffect(() => {
    // console.log(data);
    if (data) {
      setId(data?.id);
      setHostingName(data?.hostingName);
      setHostingTag(data?.hostingTag);
      setHostingRating(data?.hostingRating);
      setHostingFeatures(data?.hostingFeatures);
      setButtonText(data?.buttonText);
      setAffiliateLink(data?.affiliateLink);

      setWhyPicked(data?.whyPicked);
      setProsCons(data?.prosCons);
      setUinqueId(data?.uniqueId);
    }
  }, [data]);

  return (
    <div>
      <Toaster />
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
                  <Spacer y="1" />
                  <Input
                    value={hostingName}
                    onChange={(e) => setHostingName(e.target.value)}
                    type="text"
                    label="Web Hosting Company Name"
                  />
                  <Spacer y="1" />
                  <Input
                    value={hostingTag}
                    onChange={(e) => setHostingTag(e.target.value)}
                    type="text"
                    label="Best For What"
                  />
                  <Spacer y="1" />
                  <Input
                    value={hostingRating}
                    onChange={(e) => setHostingRating(e.target.value)}
                    type="text"
                    label="Hosting Rating"
                  />
                  <Spacer y="1" />
                  <Textarea
                    value={hostingFeatures}
                    onChange={(e) => setHostingFeatures(e.target.value)}
                    type="text"
                    label="Hosting Features | One feature per line"
                  />

                  <Spacer y="1" />
                  <Input
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                    type="text"
                    label="Button Text"
                  />

                  <Spacer y="1" />
                  <Input
                    value={affiliateLink}
                    onChange={(e) => setAffiliateLink(e.target.value)}
                    type="text"
                    label="Affiliate Link"
                  />

                  <Spacer y="1" />
                  <Input
                    onChange={(e) => setHostingImage(e.target.files[0])}
                    type="file"
                    labelPlacement="outside"
                    label="Hosting Logo"
                    placeholder="Logo"
                  />
                  <Spacer y="4" />

                  <h2 className="text-xl">Why We Picked It</h2>
                  <TextEditor
                    setDefaultStyle="font-size:20px;"
                    height="300px"
                    setContent={whyPicked}
                    onChange={(e) => setWhyPicked(e)}
                  />
                  <Spacer y="4" />

                  <h2 className="text-xl">Pros & Cons</h2>
                  <TextEditor
                    setDefaultStyle="font-size:20px;"
                    height="300px"
                    setContent={prosCons}
                    onChange={(e) => setProsCons(e)}
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
