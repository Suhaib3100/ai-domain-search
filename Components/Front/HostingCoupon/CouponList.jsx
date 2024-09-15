import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import ShowModal from "./ShowModal";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function HostingList() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState("");
  const pageData = useSelector((state) => state.pageData);
  const showCoupon = (data) => {
    onOpen();
    setModalData(data);
    setTimeout(() => {
      window.open(data?.affiliateLink, "_blank");
    }, 3000);
  };

  return (
    <div className="mt-10 px-3 sm:px-20 md:px-32 lg:px-40">
      <ShowModal isOpen={isOpen} onOpenChange={onOpenChange} data={modalData} />
      <div className="">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {pageData?.listTitle?.title || "We invest in the world’s potentialss"}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {pageData?.listTitle?.desc ||
            "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."}
        </p>
      </div>
      {pageData?.couponList &&
        [...pageData?.couponList]
          ?.sort((a, b) => a?.id - b?.id)
          ?.map((x, i) => (
            <div className="my-3 " key={i}>
              <Card isHoverable className="">
                <CardBody className="">
                  <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-between ">
                    <div>
                      <Image
                        className="h-100 w-40 border dark:border-0"
                        isZoomed
                        // width={"200px"}
                        // height={"100px"}
                        alt="hosting coupon image"
                        src={x?.hostingImage?.split("public")[1] || "/"}
                      />
                    </div>
                    <div>
                      <Card
                        className="flex flex-col w-full border-none bg-[#F1F3F5] dark:bg-slate-800 mt-4 lg:mt-0"
                        isPressable
                        shadow="sm"
                      >
                        <CardBody>
                          <div className=" ">
                            <p className="text- font-bold mr-3">
                              {x?.couponTitle || "75% OFF SHARED HOSTING"}
                            </p>
                          </div>
                          <Chip
                            startContent={
                              <FontAwesomeIcon icon={faCircleCheck} />
                            }
                            variant="flat"
                            color="warning"
                            size="xs"
                            className="text-orange-700 py-1 mt-1"
                          >
                            {x?.exclusive || "Exclusive Deals"}
                          </Chip>
                          <div className="flex mt-3">
                            <p className="text-xs">
                              {x?.expiry?.split(",")[0] ||
                                "Last tried 15 Hours and 46 Mins ago,"}
                            </p>
                            <p className="text-xs text-red-500 ml-1">
                              {" "}
                              {x?.expiry?.split(",")[1] || "EXPIRES 9/1/24"}
                            </p>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="mt-3 lg:mt-0 flex flex-col justify-center items-center">
                      <p className="text-md font-semibold text-green-700">
                        {x?.discount || "75% OFF"}
                      </p>
                      <div className="relative my-4">
                        <Button
                          color="secondary"
                          size="md"
                          radius="md"
                          className="text-xl font-bold text-white absolute"
                          onClick={() => showCoupon(x)}
                        >
                          {x?.couponCode || "XXxxXX"}
                        </Button>
                        <Button
                          color="success"
                          size=""
                          radius="md"
                          className="text-sm font-bold text-white hover:bg-green-600 -translate-x-6 hover:-translate-x-10"
                          onClick={() => showCoupon(x)}
                        >
                          Show Code
                        </Button>
                      </div>

                      <p className="text-xs text-gray-500 border-0 border-l-3 ps-1 border-green-600 rounded-sm">
                        {x?.couponUsed || "2282 users used this coupon"}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
    </div>
  );
}
