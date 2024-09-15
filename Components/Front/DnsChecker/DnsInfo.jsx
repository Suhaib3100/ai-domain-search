import { Card, CardBody, CardHeader, Progress } from "@nextui-org/react";
import Tables from "./Table";
import { useSelector } from "react-redux";

export default function DnsInfo() {
  const loading = useSelector((state) => state.loading);
  const dnsInfo = useSelector((state) => state.dnsInfo);
  return (
    <div id="serverLocation">
      {loading && (
        <Progress
          size="md"
          isIndeterminate
          color="secondary"
          aria-label="Loading..."
          className="text-center mb-1"
        />
      )}
      {dnsInfo ? (
        <div className="px-4 sm:px-10">
          <Card>
            <CardHeader className="font-semibold text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
              DNS Records
            </CardHeader>
            <CardBody>
              <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 ">
                <Tables />
                {/* <LocationMap /> */}
              </div>
            </CardBody>
          </Card>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
