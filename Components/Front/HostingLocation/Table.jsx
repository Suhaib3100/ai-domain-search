import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function Tables() {
  const hostingLocation = useSelector((state) => state.hostingLocation);
  const ips = hostingLocation && Object.entries(hostingLocation).map((x) => x);
  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Property</TableColumn>
        <TableColumn>Content</TableColumn>
      </TableHeader>
      <TableBody>
        {hostingLocation ? (
          hostingLocation?.status === "success" ? (
            ips.map((x, i) => (
              <TableRow key={i}>
                <TableCell>
                  <p className="font-semibold">
                    {x[0]?.charAt(0).toUpperCase() + x[0]?.slice(1)}
                  </p>
                </TableCell>
                <TableCell>{x[1]}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow key={1}>
              <TableCell>Invalid Domain</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
          )
        ) : (
          ""
        )}
      </TableBody>
    </Table>
  );
}
