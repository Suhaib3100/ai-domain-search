import { Button, Card, CardBody, Link, Spinner } from "@nextui-org/react";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import Skeleton2 from "./Skeleton2";

export default function DomainCheck() {
  const domains = useSelector((state) => state?.domains);
  const affiliateLinks = useSelector((state) => state?.affiliateLinks);

  const link = (x) => {
    return affiliateLinks?.affiliateProvider === "godaddy"
      ? `${affiliateLinks?.godaddyLink}https://in.godaddy.com/domainsearch/find?domainToCheck=${x?.domain}`
      : affiliateLinks?.affiliateProvider === "namecheap"
      ? `${affiliateLinks?.nameCheapLink}https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D${x.domain}&afftrack=`
      : affiliateLinks?.affiliateProvider === "domain.com"
      ? `https://www.domain.com/registration/?flow=domainDFE&search=${x?.domain}${affiliateLinks?.domainLink}`
      : affiliateLinks?.affiliateProvider === "dynadot"
      ? `${affiliateLinks?.dynadotLink}https%3A%2F%2Fwww.dynadot.com%2Fdomain%2Fsearch.html%3Fdomain%3D${x?.domain}`
      : affiliateLinks?.otherLink;
  };
  return (
    <div className="px-3 sm:px-10 2xl:px-32 my-4 w-full scroll">
      <Card
        // isPressable
        className={`min-h-[185px] ${
          domains && domains[0]?.availability === "available"
            ? "available"
            : "not-available"
        }`}
      >
        <CardBody className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-center p-6 my-5 ">
          <div className="text-center sm:text-start">
            <div>
              {domains ? (
                <p className="font-semibold text-white ml-0 sm:ml-6">
                  {domains && domains[0]?.availability === "available"
                    ? "Hooray! This Domain is Available for Register"
                    : "Sorry This Domain is Registered"}
                </p>
              ) : (
                <Skeleton />
              )}
            </div>

            {domains ? (
              <Link
                isBlock
                href={link(domains[0])}
                isExternal
                className={`text-4xl sm:text-6xl text-center sm:text-start font-semibold py-4 cursor-pointer text-white ${
                  domains && domains[0]?.availability === "available"
                    ? "hover:text-green-800 hover:bg-green-50 rounded-xl"
                    : "hover:text-red-800"
                }`}
                color={
                  domains && domains[0]?.availability === "available"
                    ? "success"
                    : "danger"
                }
              >
                {domains && domains[0]?.domain}
              </Link>
            ) : (
              <Skeleton2 />
            )}
          </div>
          <div className="mt-4 sm:my-0">
            <Button
              isExternal
              as={Link}
              href={domains && link(domains[0] || "#!")}
              size="lg"
              className="px-20"
            >
              {domains ? (
                domains[0]?.availability === "available" ? (
                  "Buy Now"
                ) : (
                  "Whois"
                )
              ) : (
                <Spinner size="lg" color="white" />
              )}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
