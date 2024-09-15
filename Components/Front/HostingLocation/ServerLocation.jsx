import { Card, CardBody, CardHeader, Progress } from "@nextui-org/react";
import Tables from "./Table";
import LocationMap from "./Map";
import { useSelector } from "react-redux";

export default function ServerLocation() {
  const loading = useSelector((state) => state.loading);
  const hostingLocation = useSelector((state) => state.hostingLocation);
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
      {hostingLocation ? (
        <div className="px-4 sm:px-10">
          <Card>
            <CardHeader className="font-semibold text-gray-700 dark:text-gray-200 border-b dark:border-b-gray-600">
              Hosting Server Location
            </CardHeader>
            <CardBody>
              <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 ">
                <Tables />
                <LocationMap />
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
