import React from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import Tabs from "./Tabs";
const motionProps = {
  variants: {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  },
};
export default function AiModal({ value, isOpen, onOpen, onOpenChange }) {
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={motionProps}
        size="4xl"
        className="min-h-[500px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader> */}
              <ModalBody>
                <Tabs value={value} closeModal={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
