import { useSelector } from "react-redux";
import DomainList from "./DomainList";

export default function PremiumDomain() {
  const sedoPremium = useSelector((state) => state?.sedoPremium);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-3 mx-3 2xl:mx-16 scroll">
      <DomainList domain={sedoPremium?.slice(0, 33)} />
      <DomainList domain={sedoPremium?.slice(33, 66)} />
      <DomainList domain={sedoPremium?.slice(66, 100)} />
    </div>
  );
}
