import { useSelector } from "react-redux";
import DomainList from "./DomainList";

export default function Auction() {
  const godaddyAuction = useSelector((state) => state?.godaddyAuction);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-3 mx-3 2xl:mx-16 scroll">
      <DomainList domain={godaddyAuction?.slice(0, 33)} />
      <DomainList domain={godaddyAuction?.slice(33, 66)} />
      <DomainList domain={godaddyAuction?.slice(66, 100)} />
    </div>
  );
}
