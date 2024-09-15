import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ModalContents from "./ModalContent";
export default function MouseOut({ onOpen, isOpen, onOpenChange }) {
  //   useEffect(() => {
  //     window.addEventListener("mouseout", function (event) {
  //       const exitModal = localStorage.getItem("exit-modal");

  //       if (event.toElement === null && event.relatedTarget === null) {
  //         // if (!exitModal) {
  //         onOpen();
  //         localStorage.setItem("exit-modal", true);
  //         // }
  //         console.log("Mouse has exited the browser.");
  //       }
  //     });
  //   }, []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        className="bg-gradient-to-r from-fuchsia-600 to-purple-600"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <ModalContents />
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}

          {/* Modal body content */}
        </ModalContent>
      </Modal>
    </div>
  );
}
