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

export default function HostingList({ data }) {
  return (
    <div className="mt-10">
      <div className="px-4 sm:px-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {data?.listTitle?.title || "We invest in the world’s potential"}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          {data?.listTitle?.desc ||
            "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."}
        </p>
      </div>
      {Array.isArray(data?.addHosting) &&
        [...data?.addHosting]
          .sort((a, b) => a?.id - b?.id)
          ?.map((x, i) => (
            <div className="px-3 md:px-20 my-3" key={i}>
              <Card>
                <CardHeader className="flex justify-between items-center pb-1">
                  <Chip
                    size="lg"
                    radius="sm"
                    className="uppercase bg-[#EEF2FE] dark:bg-gray-800 text-[#395BB6] font-bold"
                  >
                    <p className="font-semibold">{x?.hostingTag}</p>
                  </Chip>
                  <Link href={x?.affiliateLink || "#!"} isExternal>
                    <Image
                      className=" h-12 w-40 "
                      isZoomed
                      // width={"200px"}
                      // height={"100px"}
                      alt="NextUI hero Image"
                      src={x?.hostingImage?.split("public")[1]}
                    />
                  </Link>
                </CardHeader>
                {/* <Divider /> */}
                <CardBody className="pt-1">
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
                              key={i}
                              className="mb-0"
                              href={x?.affiliateLink}
                              color="success"
                              target="_blank"
                            >
                              <div className="flex items-center">
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <p className="ml-2 text-black dark:text-gray-300">
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
                          className="space-y-5 md:space-y-8 blog"
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
                          className="space-y-5 md:space-y-8 blog"
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
