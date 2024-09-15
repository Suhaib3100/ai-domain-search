import { useRouter } from "next/router";
import BestSharedHero from "../../Admin/Components/BestShared/Hero";
import BestSharedLogoGrid from "../../Admin/Components/BestShared/LogoGrid";
import CTA from "../../Admin/Components/BestShared/CTA";
import BestSharedContent1 from "../../Admin/Components/BestShared/Content/Content1";
import BestSharedContent2 from "../../Admin/Components/BestShared/Content/Content2";
import BestSharedHostList from "../../Admin/Components/BestShared/HostingList";
import BestSharedHostingTable from "../../Admin/Components/BestShared/TopHostingTable";
import FAQ from "../../Admin/Components/BestShared/FAQ";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Stats from "../../Admin/Components/BestShared/Stats";

export default function BestShared() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "best-shared-hero" ? (
        <BestSharedHero />
      ) : route === "best-shared-logo-grid" ? (
        <BestSharedLogoGrid />
      ) : route === "best-shared-cta" ? (
        <CTA />
      ) : route === "best-shared-content-1" ? (
        <BestSharedContent1 />
      ) : route === "best-shared-content-2" ? (
        <BestSharedContent2 />
      ) : route === "best-shared-hosting-list" ? (
        <BestSharedHostList />
      ) : route === "best-shared-hosting-stats" ? (
        <Stats />
      ) : route === "best-shared-hosting-table" ? (
        <BestSharedHostingTable />
      ) : route === "best-shared-faq" ? (
        <FAQ />
      ) : route === "best-shared-seo" ? (
        <Seo dbCollection={"best-shared-hosting"} />
      ) : (
        ""
      )}
    </>
  );
}
