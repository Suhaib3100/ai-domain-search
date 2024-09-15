import {
  Card,
  CardBody,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function LeftTable() {
  const whois = useSelector((state) => state?.whois);
  const who = whois ? (whois?.length > 1 ? whois[1][1] : whois[0][1]) : null;
  return (
    <>
      <Card isHoverable>
        <CardBody>
          <Table
            striped
            color="secondary"
            selectionMode="single"
            aria-label="whois table"
          >
            <TableHeader>
              <TableColumn align="center">Domain Info</TableColumn>
              <TableColumn align="center">Details</TableColumn>
            </TableHeader>
            <TableBody className="text-center">
              <TableRow key={1}>
                <TableCell>
                  <p className="font-semibold">Domain</p>
                </TableCell>
                <TableCell>
                  {who && who["Domain Name"]?.toLowerCase()}
                </TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Registrar</p>
                </TableCell>
                <TableCell>{who && who.Registrar}</TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <Chip color="success" variant="flat" radius="sm">
                    Register On
                  </Chip>
                </TableCell>
                <TableCell>
                  <Chip color="success" variant="flat" radius="sm">
                    {who && who["Created Date"]?.slice(0, 10)}
                  </Chip>
                </TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <Chip color="warning" variant="flat" radius="sm">
                    Expires On
                  </Chip>
                </TableCell>
                <TableCell>
                  <Chip color="warning" variant="flat" radius="sm">
                    {who && who["Expiry Date"]?.slice(0, 10)}
                  </Chip>
                </TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Updated On</p>
                </TableCell>
                <TableCell>
                  {whois && who["Updated Date"]?.slice(0, 10)}
                </TableCell>
              </TableRow>
              <TableRow key={Math.random()}>
                <TableCell>
                  <p className="font-semibold">Status</p>
                </TableCell>
                <TableCell>ok</TableCell>
              </TableRow>
              <TableRow key={Math.random()} rowSpan={2}>
                <TableCell>
                  <p className="font-semibold">Name Servers</p>
                </TableCell>
                <TableCell>
                  {whois &&
                    who["Name Server"]?.map((x, i) => (
                      <div key={i}>
                        <span>{x}</span>
                        <br />
                      </div>
                    ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
}
