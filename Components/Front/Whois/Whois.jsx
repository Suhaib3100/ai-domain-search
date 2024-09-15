import { Progress } from "@nextui-org/react";
import { useSelector } from "react-redux";
import LeftTable from "./LeftTable";
import RightTable from "./RightTable";
import RawData from "./RawData";

export default function Who() {
  const loading = useSelector((state) => state?.loading);
  const whois = useSelector((state) => state?.whois);

  return (
    <>
      {loading && (
        <Progress
          size="md"
          isIndeterminate
          color="secondary"
          aria-label="Loading..."
          className="text-center mb-1"
        />
      )}
      {whois && (
        <div className="m-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LeftTable />
            <RightTable />
          </div>
          <div className="my-4">
            <RawData />
          </div>
        </div>
      )}
    </>
  );
}
