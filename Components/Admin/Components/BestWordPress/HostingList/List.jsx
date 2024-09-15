import { faArrowRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import Rating from "./Rating";

import { useEffect, useState } from "react";
import axios from "axios";
import EditModal from "./EditModal";

// import Rating from "react-rating";

export default function HostingList() {
  const [data, setData] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState("");

  const handleModal = (x) => {
    onOpen();
    setModalData(x);
  };

  useEffect(() => {
    axios.get("/api/best-wp-hosting/add-hosting").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <EditModal isOpen={isOpen} onOpenChange={onOpenChange} data={modalData} />
      {data?.addHosting
        ?.sort((a, b) => a?.id - b?.id)
        ?.map((x, i) => (
          <div className="px-3 my-3" key={i}>
            <Card shadow="lg">
              <CardHeader className="flex justify-between items-center pb-1 ">
                <Chip
                  size="lg"
                  radius="sm"
                  className="uppercase bg-[#EEF2FE] text-[#395BB6] font-bold"
                >
                  <p className="font-semibold">{x?.hostingTag}</p>
                </Chip>
                <Button size="sm" onClick={() => handleModal(x)}>
                  Edit
                </Button>
                <a href={x?.affiliateLink || "#!"}>
                  <Image
                    className=" h-12 w-40 "
                    isZoomed
                    // width={"200px"}
                    // height={"100px"}
                    alt="NextUI hero Image"
                    src={x.hostingImage.split("public")[1]}
                  />
                </a>
              </CardHeader>
              {/* <Divider /> */}
              <CardBody className="pt-1">
                <div className="flex flex-col justify-between items-center lg:flex-row ">
                  <div>
                    <p className="text-2xl font-bold mb-3 ">{x?.hostingName}</p>
                    <div className="flex items-center ">
                      <p className="text-3xl font-bold mr-3">
                        {x?.hostingRating}
                      </p>

                      <Rating rating={x?.hostingRating} />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/5 mt-3 lg:mt-0">
                    <Card
                      className="flex flex-col w-full border-none bg-[#F1F3F5]"
                      isPressable
                      shadow="sm"
                    >
                      {x?.hostingFeatures?.split("\n").map((a, b) => (
                        <div key={b}>
                          <Link
                            isBlock
                            key={b}
                            className="mb-0"
                            href="#!"
                            color="success"
                          >
                            <div className="flex items-center">
                              <FontAwesomeIcon icon={faCircleCheck} />
                              <p className="ml-2 text-black">{a}</p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </Card>
                  </div>
                  <div className="mt-3 lg:mt-0 ">
                    <Button
                      as={Link}
                      isExternal
                      href={x?.affiliateLink || "#!"}
                      color="success"
                      size="lg"
                      radius="md"
                      className="pl-20 py-8 text-xl font-bold text-white hover:bg-green-600 ml-0 lg:ml-3 w-full"
                      endContent={
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-10"
                        />
                      }
                    >
                      {x?.buttonText || "Get Hosting"}
                    </Button>
                  </div>
                </div>
                <div className="mt">
                  <Accordion isCompact>
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      title={
                        <p className="text-primary text-sm hover:underline">
                          Why we Picked it
                        </p>
                      }
                    >
                      <div
                        className="space-y-5 md:space-y-8"
                        dangerouslySetInnerHTML={{
                          __html: x?.whyPicked,
                        }}
                      ></div>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Accordion 2"
                      title={
                        <p className="text-primary text-sm hover:underline">
                          Pros & Cons
                        </p>
                      }
                    >
                      <div
                        className="space-y-5 md:space-y-8"
                        dangerouslySetInnerHTML={{
                          __html: x?.prosCons,
                        }}
                      ></div>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
    </div>
  );
}
