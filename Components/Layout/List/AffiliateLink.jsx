import { useRouter } from "next/router";
import AffiliateLink from "../../Admin/Components/AffiliateLink";

export default function Affiliatelink() {
  const router = useRouter();
  const route = router.query.route;
  return <>{route === "affiliate-links" ? <AffiliateLink /> : ""}</>;
}
