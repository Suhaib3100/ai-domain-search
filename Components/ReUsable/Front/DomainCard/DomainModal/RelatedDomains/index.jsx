import { Card, CardBody, Link } from "@nextui-org/react";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";

export default function RelatedDomains({ domains }) {
  const affiliateLinks = useSelector((state) => state?.affiliateLinks);
  const link = (x) => {
    return affiliateLinks?.affiliateProvider === "godaddy"
      ? `${affiliateLinks?.godaddyLink}https://in.godaddy.com/domainsearch/find?domainToCheck=${x?.name}`
      : affiliateLinks?.affiliateProvider === "namecheap"
      ? `${affiliateLinks?.nameCheapLink}https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D${x.name}&afftrack=`
      : affiliateLinks?.affiliateProvider === "domain.com"
      ? `https://www.domain.com/registration/?flow=domainDFE&search=${x?.name}${affiliateLinks?.domainLink}`
      : affiliateLinks?.affiliateProvider === "dynadot"
      ? `${affiliateLinks?.dynadotLink}https%3A%2F%2Fwww.dynadot.com%2Fdomain%2Fsearch.html%3Fdomain%3D${x?.name}`
      : affiliateLinks?.otherLink;
  };
  return (
    <SimpleBar style={{ maxHeight: "20rem" }} className="py-1">
      <div className="grid grid-cols-2 gap-2 px-2">
        {domains?.map((x, i) => (
          <Card key={i} className="px-4 py-2 rounded-md">
            {/* <CardBody> */}
            <div>
              <Link
                href={link(x)}
                isExternal
                underline="hover"
                color="secondary"
                style={{ fontFamily: "jost" }}
                className="text-medium"
              >
                {x?.name}
              </Link>
            </div>
            {/* </CardBody> */}
          </Card>
        ))}
      </div>
    </SimpleBar>
  );
}
