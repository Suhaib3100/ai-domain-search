import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Table,
  TableHeader,
  Tabs,
  Tab,
  Card,
  CardBody,
  Link,
} from "@nextui-org/react";
const barChart = "/images/modal_header/crm-bar-chart.png";
const lineChart = "/images/modal_header/crm-line-chart.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { relatedQuestion } from "./RelatedQuestions/function";
import { setRelatedQuestions } from "../../../../../Redux/reducer";
import QTable from "./RelatedQuestions/QTable";
import SimpleBarReact from "simplebar-react";
import axios from "axios";
import RelatedDomains from "./RelatedDomains";
import RegistrarList from "./RegistrarList";
import Ads from "../../../../Front/Ads";
export default function DomainModal({ data, isOpen, onOpenChange }) {
  const relatedQuestions = useSelector((state) => state?.relatedQuestions);
  const questions = relatedQuestions?.map((x) => x[1])?.flat();
  const [relatedDomains, setRelatedDomains] = useState([]);
  const affiliateLinks = useSelector((state) => state?.affiliateLinks);
  const dispatch = useDispatch();
  const params = {
    name: data?.domain,
    "max-results": 100,
    // tlds: req.body.tld,
    "sensitive-content-filter": true,
    "include-registered": true,
  };
  useEffect(() => {
    if (data) {
      relatedQuestion(
        data?.domain?.split(".")[0],
        dispatch,
        setRelatedQuestions
      );
      axios
        .get("https://sugapi.verisign-grs.com/ns-api/2.0/suggest?", { params })
        .then((response) => setRelatedDomains(response.data?.results));
    }
  }, [data]);

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
  return (
    <>
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
                {/* <h3>Domain Info</h3> */}
              </ModalHeader>

              <ModalBody>
                <Card className="w-full border-none rounded-" shadow="none">
                  <div className="flex justify-between items-center bg-slate-200 pr-3">
                    <div className="flex items-center py-0 ">
                      <img
                        src={barChart}
                        width={90}
                        alt="..."
                        //   className="border border-red-500"
                      />

                      <Link
                        isExternal
                        href={link(data)}
                        className="text-blue-600 font-bold text-xl"
                      >
                        {data?.domain?.split(".")?.[0]}
                        <span className="text-info font-semibold text-sky-500">
                          {"."}
                          {data?.domain?.split(".")?.[1]}
                        </span>
                      </Link>

                      <img src={lineChart} width={130} alt="..." className="" />
                    </div>
                    <Link
                      isExternal
                      href={link(data)}
                      className={`text-medium ${
                        data?.availability != "available"
                          ? "text-red-400"
                          : "text-green-700"
                      }`}
                      style={{ fontFamily: "jost" }}
                    >
                      {data?.availability != "available"
                        ? "Not Available"
                        : "Available"}
                    </Link>
                  </div>
                </Card>
                <div>
                  <RegistrarList domain={data} />
                </div>

                <Tabs aria-label="Related" variant="underlined">
                  <Tab key="domains" title="Related Domains">
                    <RelatedDomains domains={relatedDomains} />
                  </Tab>
                  <Tab key="question" title="Related Questions">
                    <QTable />
                  </Tab>
                </Tabs>
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
    </>
  );
}
