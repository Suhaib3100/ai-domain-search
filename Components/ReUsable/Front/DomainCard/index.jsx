import {
  Card,
  CardBody,
  CardFooter,
  Link,
  Progress,
  useDisclosure,
} from "@nextui-org/react";
// import DomainModal from "./DomainModal";
import { useSelector } from "react-redux";
import { useState } from "react";
import DomainModal from "../DomainList/DomainModal";
const gradients = [
  "from-[#4F46E5] to-[#E114E5]",
  "from-pink-500 to-violet-600",
  "from-emerald-500 to-lime-600",
  "from-sky-400 to-blue-500",
  "from-yellow-500  via-red-500 to-green-500",
  "from-lime-400 to-lime-500",
  "from-violet-600  via-red-500 to-indigo-600",
  "from-rose-400 to-red-500",
  "from-sky-400 to-blue-500",
];

const getRandomGradient = () =>
  gradients[Math.floor(Math.random() * gradients.length)];

export default function DomainCard({ domains }) {
  const affiliateLinks = useSelector((state) => state?.affiliateLinks);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState("");
  const link = (x) => {
    if (x?.availability === "available") {
      return affiliateLinks?.affiliateProvider === "godaddy"
        ? `${affiliateLinks?.godaddyLink}https://in.godaddy.com/domainsearch/find?domainToCheck=${x?.domain}`
        : affiliateLinks?.affiliateProvider === "namecheap"
        ? `${affiliateLinks?.nameCheapLink}https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D${x.domain}&afftrack=`
        : affiliateLinks?.affiliateProvider === "domain.com"
        ? `https://www.domain.com/registration/?flow=domainDFE&search=${x?.domain}${affiliateLinks?.domainLink}`
        : affiliateLinks?.affiliateProvider === "dynadot"
        ? `${affiliateLinks?.dynadotLink}https%3A%2F%2Fwww.dynadot.com%2Fdomain%2Fsearch.html%3Fdomain%3D${x?.domain}`
        : affiliateLinks?.otherLink;
    }
    return `${affiliateLinks?.godaddyLink}https://in.godaddy.com/domainsearch/find?domainToCheck=${x?.domain}`;
  };
  const openModal = (data) => {
    onOpen();
    setModalData(data);
  };
  return (
    <div className="">
      <DomainModal
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        data={modalData}
      />
      {domains?.length == 0 && (
        <Progress
          size="md"
          color="primary"
          isIndeterminate
          aria-label="Loading..."
          className="w-full text-transparent bg-clip-text text-red-500 bg-gradient-to-r from-violet-600  via-red-500 to-indigo-600"
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-2 px-20 ">
        {domains?.map((x, i) => {
          const randomGradient = getRandomGradient();

          return (
            <Card
              className="min-h-40 box-shadow"
              isBlurred
              //   onClick={() => openModal(x)}
            >
              <CardBody onClick={() => openModal(x)}>
                <p
                  onClick={() => openModal(x)}
                  className={`m-auto text-2xl font-semibold mx-auto text-transparent bg-clip-text bg-gradient-to-r ${randomGradient} text-center`}
                >
                  {x?.domain?.split(".")?.[0]}
                </p>
              </CardBody>
              <CardFooter
                as={Link}
                isExternal
                href={link(x)}
                className="absolute flex justify-between bg-black/5 bottom-0 z-10 border-default-600 dark:border-default-100 border-b-1 border-b-gray-300"
              >
                <p className="text-tiny text-black/60">{x?.domain}</p>
                <p href={link(x)} className="text-tiny text-black/60 ">
                  Get Now
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
