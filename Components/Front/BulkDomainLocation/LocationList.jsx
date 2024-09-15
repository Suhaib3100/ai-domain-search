import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);
  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}

export default function BulkLocation() {
  const bulkLocation = useSelector((state) => state?.bulkLocation);

  // download domain location data
  const download = () => {
    const csvContent = convertToCSV(
      bulkLocation?.map((x) => ({
        Domain: x.domain || "N/A",
        IP: x.query || "N/A",
        ISP: x.isp.split(",").join(" ") || x.org || "N/A",
        Continent: x.continent || "N/A",
        Country: x.country || "N/A",
        Code: x.countryCode || "N/A",
        District: x.district || "N/A",
        City: x.city || "N/A",
        Region: x.regionName || x.region || "N/A",
        Lat: x.lat || "N/A",
        Lon: x.lon || "N/A",
        zip: x.zip || "N/A",
        Time_Zone: x.timezone || "N/A",
      }))
    );
    var element = document.createElement("a");
    element.href = "data:text/csv;charset=utf-8," + encodeURI(csvContent);
    element.target = "_blank";
    element.download = "bulk_domain_location.csv";
    element.click();
  };

  return (
    <Card>
      <CardBody>
        <CardHeader className="flex justify-between p-0 pb-2">
          <div className="flex justify-center items-center">
            <p>Success: </p>
            <Chip radius="sm" variant="dot" color={"success"} className="ml-2">
              {bulkLocation ? bulkLocation?.filter((x) => x).length : "0"}
            </Chip>
          </div>
          <Button radius="sm" className="ml-3" size={"sm"} onPress={download}>
            Download
          </Button>
        </CardHeader>
        <Table
          aria-label="Example static collection table"
          //   striped
          selectionMode="multiple"
          compact
          sticked
          hoverable
          lined
          //   headerLined
          //   bordered
        >
          <TableHeader>
            <TableColumn key="sl">#</TableColumn>
            <TableColumn key="domain">Domain</TableColumn>
            <TableColumn key="ip">IP</TableColumn>
            <TableColumn key="isp">ISP</TableColumn>
            <TableColumn key="continent">Continent</TableColumn>
            <TableColumn key="country">Country</TableColumn>
            <TableColumn key="code">Code</TableColumn>
            <TableColumn key="district">District</TableColumn>
            <TableColumn key="city">City</TableColumn>
            <TableColumn key="rigion">Region</TableColumn>
            <TableColumn key="lat">Lat</TableColumn>
            <TableColumn key="lon">Lon</TableColumn>
            <TableColumn key="zip">zip</TableColumn>
            <TableColumn key="timezone">Time Zone</TableColumn>
          </TableHeader>

          <TableBody>
            {bulkLocation &&
              bulkLocation
                ?.filter((x) => x)
                ?.map((x, i) => (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>
                      <p className="jost font-semibold text-cyan-900">
                        {x?.domain?.toLowerCase() || "N/A"}
                      </p>
                    </TableCell>
                    <TableCell>{x?.query || "N/A"}</TableCell>
                    <TableCell>
                      {x?.isp?.split(",")?.join(" ") || x?.org || "N/A"}
                    </TableCell>
                    <TableCell>{x?.continent || "N/A"}</TableCell>
                    <TableCell>{x?.country || "N/A"}</TableCell>
                    <TableCell>{x?.countryCode || "N/A"}</TableCell>
                    <TableCell>{x?.district || "N/A"}</TableCell>
                    <TableCell>{x?.city || "N/A"}</TableCell>
                    <TableCell>{x?.regionName || x?.region || "N/A"}</TableCell>
                    <TableCell>{x?.lat || "N/A"}</TableCell>
                    <TableCell>{x?.lon || "N/A"}</TableCell>
                    <TableCell>{x?.zip || "N/A"}</TableCell>
                    <TableCell>{x?.timezone || "N/A"}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
}
