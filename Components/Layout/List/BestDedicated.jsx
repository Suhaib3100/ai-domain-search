import { useRouter } from "next/router";
import Hero from "../../Admin/Components/BestDedicated/Hero";
import DedicatedLogoGrid from "../../Admin/Components/BestDedicated/LogoGrid";
import CTA from "../../Admin/Components/BestDedicated/CTA";
import DedicatedContent1 from "../../Admin/Components/BestDedicated/Content/Content1";
import DedicatedContent2 from "../../Admin/Components/BestDedicated/Content/Content2";
import DedicatedHostList from "../../Admin/Components/BestDedicated/HostingList";
import DedicatedHostingTable from "../../Admin/Components/BestDedicated/TopHostingTable";
import FAQ from "../../Admin/Components/BestDedicated/FAQ";
import Stats from "../../Admin/Components/BestDedicated/Stats";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";

export default function BestDedicated() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "best-dedicated-hero" ? (
        <Hero />
      ) : route === "best-dedicated-logo-grid" ? (
        <DedicatedLogoGrid />
      ) : route === "best-dedicated-cta" ? (
        <CTA />
      ) : route === "best-dedicated-content-1" ? (
        <DedicatedContent1 />
      ) : route === "best-dedicated-content-2" ? (
        <DedicatedContent2 />
      ) : route === "best-dedicated-hosting-list" ? (
        <DedicatedHostList />
      ) : route === "best-dedicated-hosting-table" ? (
        <DedicatedHostingTable />
      ) : route === "best-dedicated-hosting-stats" ? (
        <Stats />
      ) : route === "best-dedicated-faq" ? (
        <FAQ />
      ) : route === "best-dedicated-seo" ? (
        <Seo dbCollection={"best-dedicated-hosting"} />
      ) : (
        ""
      )}
    </>
  );
}
