import { useRouter } from "next/router";
import Hero from "../../Admin/Components/BestVPS/Hero";
import BestVPSLogoGrid from "../../Admin/Components/BestVPS/LogoGrid";
import CTA from "../../Admin/Components/BestVPS/CTA";
import BestVPSContent1 from "../../Admin/Components/BestVPS/Content/Content1";
import BestVPSContent2 from "../../Admin/Components/BestVPS/Content/Content2";
import BestVPSHostList from "../../Admin/Components/BestVPS/HostingList";
import BestVPSHostingTable from "../../Admin/Components/BestVPS/TopHostingTable";
import FAQ from "../../Admin/Components/BestVPS/FAQ";
import Stats from "../../Admin/Components/BestVPS/Stats";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";

export default function BestVPS() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "best-vps-hero" ? (
        <Hero />
      ) : route === "best-vps-logo-grid" ? (
        <BestVPSLogoGrid />
      ) : route === "best-vps-cta" ? (
        <CTA />
      ) : route === "best-vps-content-1" ? (
        <BestVPSContent1 />
      ) : route === "best-vps-content-2" ? (
        <BestVPSContent2 />
      ) : route === "best-vps-hosting-list" ? (
        <BestVPSHostList />
      ) : route === "best-vps-hosting-table" ? (
        <BestVPSHostingTable />
      ) : route === "best-vps-hosting-stats" ? (
        <Stats />
      ) : route === "best-vps-faq" ? (
        <FAQ />
      ) : route === "best-vps-seo" ? (
        <Seo dbCollection={"best-vps-hosting"} />
      ) : (
        ""
      )}
    </>
  );
}
