import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Link,
} from "@nextui-org/react";

export default function Tables() {
  return (
    <div className="px-4 mt-4">
      <p className="mb-2 text-xl font-semibold text-gray-600 dark:text-gray-300">
        Website and Script Information
      </p>
      <Table
        aria-label="Example static collection table"
        className="border rounded-2xl dark:border-gray-800"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Details</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Website</TableCell>
            <TableCell>
              <Link
                href={window.location.origin}
                showAnchorIcon
                isExternal
                // isBlock
                color="secondary"
              >
                {window.location.origin}
              </Link>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Script</TableCell>
            <TableCell className="font-semibold">Domain Hub</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Version</TableCell>
            <TableCell>
              <Chip color="warning" variant="dot" radius="sm">
                4.0
              </Chip>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>Framework</TableCell>
            <TableCell>
              <Chip color="secondary" variant="dot" radius="sm">
                React JS (Next JS)
              </Chip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
