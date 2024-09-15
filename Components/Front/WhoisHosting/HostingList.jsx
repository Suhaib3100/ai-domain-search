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
} from "@nextui-org/react";
import Rating from "./Rating";
import { useSelector } from "react-redux";

export default function HostingList({ data }) {
  return (
    <div className="mt-36">
      <div className=" px-3 md:px-24 mb-10">
        <p className="text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
          Most Recommended Hosting Providers.
        </p>
        <p className="text-sm text-gray-500 mt-2 dark:text-gray-500">
          Top 3 Hosting Providers.
        </p>
      </div>
      {data?.addHosting &&
        [...data?.addHosting]
          ?.sort((a, b) => a?.id - b?.id)
          ?.slice(0, 3)
          ?.map((x, i) => (
            <div className="px-3 md:px-20 my-8" key={i}>
              <Card>
                <CardHeader className="flex justify-between items-center pb-1">
                  <Chip
                    size="lg"
                    radius="sm"
                    className="uppercase bg-[#EEF2FE] text-[#395BB6] font-bold"
                  >
                    <p className="font-semibold">{x?.hostingTag}</p>
                  </Chip>
                  <Image
                    className=" h-12 w-40 "
                    isZoomed
                    // width={"200px"}
                    // height={"100px"}
                    alt="NextUI hero Image"
                    src={x?.hostingImage?.split("public")[1]}
                  />
                </CardHeader>
                {/* <Divider /> */}
                <CardBody className="pt-1 sm:px-10">
                  <div className="flex flex-col justify-between items-center lg:flex-row ">
                    <div>
                      <p className="text-2xl font-bold mb-3 ">
                        {x?.hostingName}
                      </p>
                      <div className="flex items-center ">
                        <p className="text-3xl font-bold mr-3">
                          {x?.hostingRating}
                        </p>

                        <Rating rating={x?.hostingRating} />
                      </div>
                    </div>
                    <div className="w-full lg:w-2/5 mt-3 lg:mt-0">
                      <Card
                        className="flex flex-col w-full border-none bg-[#F1F3F5] dark:bg-gray-800"
                        isPressable
                        shadow="sm"
                      >
                        {x?.hostingFeatures?.split("\n").map((a, b) => (
                          <div key={b}>
                            <Link
                              isBlock
                              isExternal
                              key={i}
                              className="mb-0 "
                              href={x?.affiliateLink}
                              color="success"
                            >
                              <div className="flex items-center">
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <p className="ml-2 text-gray-700 dark:text-gray-300">
                                  {a}
                                </p>
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
                        href={x?.affiliateLink}
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
                        Get Hosting
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
                          className="space-y-5 md:space-y-8 blog text-xl"
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
                          className="space-y-5 md:space-y-8 blog text-xl"
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
