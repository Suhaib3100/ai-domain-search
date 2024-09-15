import { Card, CardBody, Link } from "@nextui-org/react";
import { godaddy, nameCheap } from "./icons";
import { useSelector } from "react-redux";
const dynadot = "/images/registrar/dynadot.png";
const domain_com = "/images/registrar/domaincom.png";
export default function RegistrarList({ domain }) {
  const affiliateLinks = useSelector((state) => state?.affiliateLinks);
  const arr = [
    { reg: "Godaddy", icon: godaddy },
    { reg: "Dynadot", icon: "", logo: dynadot },
    { reg: "Domain", icon: "", logo: domain_com },
    { reg: "Namecheap", icon: nameCheap },
    // { reg: "Epik", icon: "" },
  ];
  const link = (x) => {
    return x?.reg === "Godaddy"
      ? `${affiliateLinks?.godaddyLink}https://in.godaddy.com/domainsearch/find?domainToCheck=${domain?.domain}`
      : x?.reg === "Namecheap"
      ? `${affiliateLinks?.nameCheapLink}https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D${domain?.domain}&afftrack=`
      : x?.reg === "Domain"
      ? `https://www.domain.com/registration/?flow=domainDFE&search=${domain?.domain}${affiliateLinks?.domainLink}`
      : x?.reg === "Dynadot"
      ? `${affiliateLinks?.dynadotLink}https%3A%2F%2Fwww.dynadot.com%2Fdomain%2Fsearch.html%3Fdomain%3D${domain?.domain}`
      : affiliateLinks?.otherLink;
  };
  return (
    <div className="grid grid-cols-4 gap-3 mt-2">
      {arr?.map((x, i) => (
        <Card as={"a"} target="_blank" href={link(x)} className=" " key={i}>
          <div className="flex justify-between items-center gap-3 p-0">
            <span className="text-white bg-transparent border-r p-3 rounded-2 rounded-r-0">
              {x?.logo && <img style={{ width: "30px" }} src={x?.logo} />}

              {!x?.logo && (x?.icon || arr[0].icon)}
            </span>
            <span className="flex-1 font-monospace">{x?.reg}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
