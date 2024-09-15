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
import { useEffect, useState } from "react";
import axios from "axios";
import EditModal from "./EditModal";

export default function HostingList() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onOpenChange: onOpenChange2,
  } = useDisclosure();
  const [modalData, setModalData] = useState("");
  const [editModalData, setEditModalData] = useState("");
  const [coupons, setCoupons] = useState("");
  const showCoupon = (data) => {
    onOpen2();
    setModalData(data);
    setTimeout(() => {
      window.open(data?.affiliateLink, "_blank");
    }, 3000);
  };
  const editModal = (data) => {
    onOpen();
    setEditModalData(data);
  };
  useEffect(() => {
    axios.get("/api/hosting-coupon/add-coupon").then((res) => {
      setCoupons(res.data);
      // console.log(res.data);
    });
  }, []);

  return (
    <div className="mt-10 px-3 ">
      <ShowModal
        isOpen={isOpen2}
        onOpenChange={onOpenChange2}
        data={modalData}
      />
      <EditModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={editModalData}
      />
      {coupons?.couponList
        ?.sort((a, b) => a?.id - b?.id)
        ?.map((x, i) => (
          <div className="my-3 " key={i}>
            <Card isHoverable className="">
              <CardBody className="">
                <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-between ">
                  <div>
                    <Image
                      className="h-100 w-40 border"
                      isZoomed
                      // width={"200px"}
                      // height={"100px"}
                      alt="hosting coupon image"
                      src={x?.hostingImage?.split("public")[1] || "/"}
                    />
                    <Button
                      className="mt-2 text-center"
                      size="sm"
                      onClick={() => editModal(x)}
                    >
                      Edit
                    </Button>
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
