import { Button, Card, CardBody, Chip, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function SavedDomains() {
  const [domains, setDomains] = useState([
    { domain: "favourite-domain.com", availability: "available" },
  ]);

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("favouriteDomains"));
    const filteredArray = [];
    const encounteredDomains = [];
    if (ls) {
      for (const item of ls) {
        if (!encounteredDomains.includes(item?.domain)) {
          filteredArray.push(item);
          encounteredDomains.push(item?.domain);
        }
      }
      setDomains(filteredArray);
    }
  }, []);

  const convertToCSV = (arr) =>
    [Object.keys(arr[0])]
      .concat(arr)
      .map((it) => Object.values(it).toString())
      .join("\n");

  // csv download function
  const handleDownload = (e) => {
    const csvContent = convertToCSV(domains);
    var element = document.createElement("a");
    element.href = "data:text/csv;charset=utf-8," + encodeURI(csvContent);
    element.target = "_blank";
    element.download = "favourite_domains.csv";
    element.click();
  };

  return (
    <div className="h-screen">
      <Card
        isHoverable
        className="m-4 border-1 border-gray-100 dark:border-gray-600"
      >
        <CardBody className="py-3">
          <div className="flex justify-center items-center gap-x-20">
            <h3
              className="text-xl font-bold text-slate-600 dark:text-slate-400"
              style={{ fontFamily: "jost" }}
            >
              Saved Domains
            </h3>
            <Button
              style={{ fontFamily: "jost" }}
              color="primary"
              size="sm"
              variant="shadow"
              className="py-0 px-6 font-semibold"
              onPress={handleDownload}
            >
              Download
            </Button>
          </div>
        </CardBody>
      </Card>
      <div className="m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains?.map((x, i) => (
            <Card key={i} isPressable>
              <CardBody>
                <div className="flex justify-between items-center">
                  <Link
                    isBlock
                    href="#!"
                    className="font-semibold text-lg text-slate-700 dark:text-slate-400"
                    style={{ fontFamily: "jost" }}
                  >
                    {x?.domain}
                  </Link>
                  <Chip
                    as={Link}
                    href="#!"
                    style={{ fontFamily: "jost" }}
                    className="px-6 text-gray-200"
                    color={
                      x?.availability === "available" ? "success" : "warning"
                    }
                    variant="shadow"
                    radius="sm"
                  >
                    {x?.availability === "available" ? "Buy Now" : "Registered"}
                  </Chip>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
