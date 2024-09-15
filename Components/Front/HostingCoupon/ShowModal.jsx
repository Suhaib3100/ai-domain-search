import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Snippet,
  Link,
  Image,
} from "@nextui-org/react";

export default function ShowModal({ isOpen, onOpen, onOpenChange, data }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable
        size="3xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-start items-center">
                <Image
                  className="h-10 w-40"
                  isZoomed
                  // width={"200px"}
                  // height={"100px"}
                  alt="hosting coupon image"
                  src={data?.hostingImage?.split("public")[1] || "/"}
                />
                <p className="ml-20"> {data?.modalTitle || "Hosting Coupon"}</p>
              </ModalHeader>
              <ModalBody>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700">
                    {data?.modalText || "Use this coupon code at checkout:"}
                  </p>
                  <div className=" p-4 mx-auto w-fit flex items-center">
                    <Snippet
                      color="success"
                      className="text-3xl !font-bold py-3 px-10"
                      symbol=""
                    >
                      {data?.couponCode || "XXxxXX"}
                    </Snippet>
                  </div>

                  <Link
                    isBlock
                    showAnchorIcon
                    href={data?.affiliateLink || "#"}
                    color="foreground"
                  >
                    Visit Site
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter className="border-t flex justify-between items-center">
                <div className="pr-10">
                  <p className="font-semibold">
                    {data?.modalFooterText ||
                      "Up To 84% OFF Exclusive Offer: Up To 75% OFF + Extra 9% OFF On Web Hosting + Free Domain + 100"}
                  </p>
                </div>
                <Button color="secondary" onPress={onClose} size="sm">
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
