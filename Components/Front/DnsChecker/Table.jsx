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
  const dnsInfo = useSelector((state) => state.dnsInfo);
  // const ips = hostingLocation && Object.entries(hostingLocation).map((x) => x);
  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Record</TableColumn>
        <TableColumn>TTL</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Entris</TableColumn>
      </TableHeader>
      {dnsInfo?.status ? (
        <TableBody>
          {dnsInfo?.data?.A?.length && (
            <TableRow key={1}>
              <TableCell>
                <p className="font-semibold">A</p>
              </TableCell>
              <TableCell>{dnsInfo?.data?.A[0]?.ttl}</TableCell>
              <TableCell>{dnsInfo?.data?.A[0]?.type}</TableCell>
              <TableCell>
                {dnsInfo?.data?.A?.map((x, i) => (
                  <p key={i}>{x?.address}</p>
                ))}
              </TableCell>
            </TableRow>
          )}
          {dnsInfo?.data?.AAAA?.length && (
            <TableRow key={2}>
              <TableCell>
                <p className="font-semibold">AAAA</p>
              </TableCell>
              <TableCell>{dnsInfo?.data?.AAAA[0]?.ttl}</TableCell>
              <TableCell>{dnsInfo?.data?.AAAA[0]?.type}</TableCell>
              <TableCell>
                {dnsInfo?.data?.AAAA?.map((x, i) => (
                  <p key={i}>{x?.address}</p>
                ))}
              </TableCell>
            </TableRow>
          )}
          {dnsInfo?.data?.MX?.length && (
            <TableRow key={3}>
              <TableCell>
                <p className="font-semibold">MX</p>
              </TableCell>
              <TableCell>{dnsInfo?.data?.MX[0]?.ttl}</TableCell>
              <TableCell>{dnsInfo?.data?.MX[0]?.type}</TableCell>
              <TableCell>
                {dnsInfo?.data?.MX?.map((x, i) => (
                  <p key={i}>{x?.exchange}</p>
                ))}
              </TableCell>
            </TableRow>
          )}
          {dnsInfo?.data?.NS?.length && (
            <TableRow key={4}>
              <TableCell>
                <p className="font-semibold">NS</p>
              </TableCell>
              <TableCell>{dnsInfo?.data?.NS[0]?.ttl}</TableCell>
              <TableCell>{dnsInfo?.data?.NS[0]?.type}</TableCell>
              <TableCell>
                {dnsInfo?.data?.NS?.map((x, i) => (
                  <p key={i}>{x?.ns}</p>
                ))}
              </TableCell>
            </TableRow>
          )}
          {dnsInfo?.data?.TXT?.length && (
            <TableRow key={5}>
              <TableCell>
                <p className="font-semibold">TXT</p>
              </TableCell>
              <TableCell>{dnsInfo?.data?.TXT[0]?.ttl}</TableCell>
              <TableCell>{dnsInfo?.data?.TXT[0]?.type}</TableCell>
              <TableCell>
                {dnsInfo?.data?.TXT?.map((x, i) => (
                  <p key={i}>{x?.data}</p>
                ))}
              </TableCell>
            </TableRow>
          )}
          {dnsInfo?.data?.SOA?.length && (
            <TableRow key={6}>
              <TableCell>
                <p className="font-semibold">SOA</p>
              </TableCell>
              <TableCell>{dnsInfo?.data?.SOA[0]?.ttl}</TableCell>
              <TableCell>{dnsInfo?.data?.SOA[0]?.type}</TableCell>
              <TableCell>
                {dnsInfo?.data?.SOA?.map((x, i) => (
                  <div key={i}>
                    <p>Email: {x.admin || ""}</p>
                    <p>Serial: {x.serial || ""}</p>
                    <p>Refresh:{x.refresh || ""}</p>
                    <p>Retry: {x.retry || ""}</p>
                    <p>Expire: {x.expiration || ""}</p>
                    <p>Minimum TTL: {x.minimum || ""}</p>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      ) : (
        <TableBody>
          <TableRow key={7}>
            <TableCell>Invalide Domain</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
}
