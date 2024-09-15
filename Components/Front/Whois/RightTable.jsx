import {
  Card,
  CardBody,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function RightTable() {
  const whois = useSelector((state) => state?.whois);
  const who = whois ? (whois.length > 1 ? whois[1][1] : whois[0][1]) : null;
  return (
    <>
      <Card isHoverable>
        <CardBody>
          <Table
            striped
            sticked
            selectionMode="single"
            aria-label="whois table"
          >
            <TableHeader>
              <TableColumn align="center">Registrant Contact</TableColumn>
              <TableColumn align="center">Details</TableColumn>
            </TableHeader>
            <TableBody css={{ textAlign: "center" }}>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Name</p>
                </TableCell>
                <TableCell>
                  {(who && who["Registrant Name"]) ||
                    "* Redacted for Privacy *"}
                </TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Organization</p>
                </TableCell>
                <TableCell>{who && who["Registrant Organization"]}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Street</p>
                </TableCell>
                <TableCell>{who && who["Registrant Street"]}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">City</p>
                </TableCell>
                <TableCell>{who && who["Registrant City"]}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">State</p>
                </TableCell>
                <TableCell>
                  {whois && who["Registrant State/Province"]}
                </TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Postal Code</p>
                </TableCell>
                <TableCell>{whois && who["Registrant Postal Code"]}</TableCell>
              </TableRow>
              <TableRow key={Math.random()} rowSpan={2}>
                <TableCell>
                  <p className="font-semibold">Country</p>
                </TableCell>
                <TableCell>{whois && who["Registrant Country"]}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Phone</p>
                </TableCell>
                <TableCell>{whois && who["Registrant Phone"]}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Email</p>
                </TableCell>
                <TableCell>{whois && who["Registrant Email"]}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
