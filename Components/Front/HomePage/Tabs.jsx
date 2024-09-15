import { Tabs, Tab } from "@nextui-org/react";
import DomainList from "../../ReUsable/Front/DomainList";
import { useSelector } from "react-redux";
import Auction from "./Auction";
import PremiumDomain from "./PremiumDomain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHome,
  faMagnifyingGlassDollar,
} from "@fortawesome/free-solid-svg-icons";
import { AuctionIcon, Dollar, Home, Suggested } from "./icons";
import { useEffect } from "react";
import axios from "axios";

export default function TabComponent() {
  const godaddyDomains = useSelector((state) => state?.godaddyDomains);
  const allExt = useSelector((state) => state?.allExt);
  const suggestedDomains = useSelector((state) => state?.suggestedDomains);
  const prefix = useSelector((state) => state?.prefix);
  const suffix = useSelector((state) => state?.suffix);
  const showSedoDomain = useSelector((state) => state?.showSedoDomain);

  useEffect(() => {
    axios
      .get(
        "https://www.godaddy.com/en-in/domainfind/v1/search/spins?search_guid=6807009c-3047-47da-8b58-e819e59d2bdf&req_id=1721903625110&isc=cjcfos3&itc=dpp_absol1&partial_query=domain&pagesize=41&pagestart=0&key=dpp_search&q=domain"
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [godaddyDomains]);
  return (
    <div className="">
      <Tabs
        size="lg"
        variant="solid"
        className="mt-4 flex justify-center items-center"
        classNames={{
          tabList: "p-4",
        }}
      >
        <Tab
          key="homepage"
          title={
            <div className="flex justify-center items-center">
              {/* <FontAwesomeIcon icon={faHome} className="p-0" /> */}
              <Home className="text-warning" fill="currentColor" size={20} />
              <span className="mt-1">Domain</span>
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3 mx-3 2xl:mx-16 scroll">
            <DomainList ext={godaddyDomains} />
            <DomainList ext={allExt?.slice(0, 100)} />
            <DomainList ext={allExt?.slice(100, 250)} />
          </div>
        </Tab>
        <Tab
          key={"Suggested"}
          title={
            <div className="flex justify-center items-center">
              <Suggested
                className="text-warning"
                fill="currentColor"
                size={20}
              />
              <span className="m-1">Suggested</span>
            </div>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-3 mx-3 2xl:mx-16 scroll">
            <DomainList
              header={"Suggested Domain"}
              tlds
              ext={suggestedDomains}
            />
            <DomainList header={"Prefix"} tlds ext={prefix} />
            <DomainList header={"Suffix"} tlds ext={suffix} />
          </div>
        </Tab>

        <Tab
          key={"Auctions"}
          title={
            <div className="flex justify-center items-center">
              <AuctionIcon
                className="text-warning"
                fill="currentColor"
                size={20}
              />
              <span className="mt-1">Auctions</span>
            </div>
          }
        >
          <Auction />
        </Tab>

        {showSedoDomain && (
          <Tab
            key={"Premium"}
            title={
              <div className="flex justify-center items-center space-x-1">
                <Dollar
                  className="text-warning"
                  fill="currentColor"
                  size={20}
                />
                <span className="">Premium Domains</span>
              </div>
            }
          >
            <PremiumDomain />
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
