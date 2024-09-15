import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TldModal from "./TldModal";

const cornerImg_1 = "./images/corner-1.png";
const cornerImg_2 = "./images/corner-2.png";
const cornerImg_3 = "./images/corner-3.png";
const cornerImg_4 = "./images/corner-4.png";
export default function Cards() {
  const domains = useSelector((state) => state?.domains);
  const [tldList, setTldList] = useState([]);
  const [modalData, setModalData] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const openModal = (data) => {
    onOpen();
    setModalData(data);
  };
  useEffect(() => {
    const params = {
      name: domains?.[0]?.domain?.split(".")?.[0],
      tlds: "@checked",
      "include-registered": true,
      "max-results": 2000,
    };
    if (domains) {
      setTimeout(() => {
        axios
          .get(`https://sugapi.verisign-grs.com/ns-api/2.0/rank-tlds?`, {
            params,
          })
          .then((res) => {
            // console.log(res.data);
            setTldList(res.data?.results);
          })
          .catch((err) => console.log(err));
      }, 500);
    }
  }, [domains]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-10">
      <TldModal onOpenChange={onOpenChange} isOpen={isOpen} data={modalData} />
      <Card className="relative" isPressable>
        <CardHeader>
          <h4>Total TLD Checked</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-contain object-right absolute"
          src={cornerImg_2}
        />
        <CardBody>
          {domains ? (
            <h4
              className="text-3xl text-gray-800 font-semibold"
              style={{ fontFamily: "jost" }}
            >
              {tldList?.length}
            </h4>
          ) : (
            <Spinner size="sm" color="default" />
          )}
        </CardBody>
      </Card>
      <Card
        className="relative"
        isPressable
        onClick={() =>
          openModal(tldList?.filter((x) => x?.availability === "available"))
        }
      >
        <CardHeader>
          <h4>Available</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-contain object-right absolute"
          src={cornerImg_3}
        />
        <CardBody>
          {domains ? (
            <h4
              className="text-3xl text-success font-semibold"
              style={{ fontFamily: "jost" }}
            >
              {tldList?.filter((x) => x?.availability === "available")?.length}
            </h4>
          ) : (
            <Spinner size="sm" color="success" />
          )}
        </CardBody>
      </Card>
      <Card
        className="relative"
        isPressable
        onClick={() =>
          openModal(tldList?.filter((x) => x?.availability != "available"))
        }
      >
        <CardHeader>
          <h4>Registered</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-contain object-right absolute"
          src={cornerImg_1}
        />
        <CardBody>
          {domains ? (
            <h4
              className="text-3xl text-warning font-semibold"
              style={{ fontFamily: "jost" }}
            >
              {tldList?.filter((x) => x?.availability != "available")?.length}
            </h4>
          ) : (
            <Spinner size="sm" color="warning" />
          )}
        </CardBody>
      </Card>
    </div>
  );
}
