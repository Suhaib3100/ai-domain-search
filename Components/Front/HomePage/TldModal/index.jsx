import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import TldList from "./TldList";
import Ads from "../../Ads";
export default function TldModal({ data, isOpen, onOpenChange }) {
  // console.log(data);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="3xl"
      hideCloseButton
      scrollBehavior="outside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="py-2">
              <h3>TLDs</h3>
            </ModalHeader>

            <ModalBody>
              <TldList domains={data} />
              <Ads />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
