import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function RawData() {
  const whois = useSelector((state) => state?.whois);
  const who = whois ? (whois.length > 1 ? whois[1][1] : whois[0][1]) : null;
  return (
    <>
      <Card>
        <CardHeader>
          <p>RAW Data</p>
        </CardHeader>

        <CardBody>
          <pre>{JSON.stringify(who, null, 2)}</pre>
        </CardBody>
      </Card>
    </>
  );
}
