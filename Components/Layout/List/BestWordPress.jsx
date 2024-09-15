import { useRouter } from "next/router";
import Hero from "../../Admin/Components/BestWordPress/Hero";
import BestWPLogoGrid from "../../Admin/Components/BestWordPress/LogoGrid";
import BestWPCTA from "../../Admin/Components/BestWordPress/CTA";
import BestWPContent1 from "../../Admin/Components/BestWordPress/Content/Content1";
import BestWPContent2 from "../../Admin/Components/BestWordPress/Content/Content2";
import BestWPHostList from "../../Admin/Components/BestWordPress/HostingList";
import BestWPHostingTable from "../../Admin/Components/BestWordPress/TopHostingTable";
import FAQ from "../../Admin/Components/BestWordPress/FAQ";
import Stats from "../../Admin/Components/BestWordPress/Stats";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";

export default function BestWordPress() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "best-wp-hero" ? (
        <Hero />
      ) : route === "best-wp-logo-grid" ? (
        <BestWPLogoGrid />
      ) : route === "best-wp-cta" ? (
        <BestWPCTA />
      ) : route === "best-wp-content-1" ? (
        <BestWPContent1 />
      ) : route === "best-wp-content-2" ? (
        <BestWPContent2 />
      ) : route === "best-wp-hosting-list" ? (
        <BestWPHostList />
      ) : route === "best-wp-hosting-table" ? (
        <BestWPHostingTable />
      ) : route === "best-wp-hosting-stats" ? (
        <Stats />
      ) : route === "best-wp-faq" ? (
        <FAQ />
      ) : route === "best-wp-seo" ? (
        <Seo dbCollection={"best-wp-hosting"} />
      ) : (
        ""
      )}
    </>
  );
}
