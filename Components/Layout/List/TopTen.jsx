import { useRouter } from "next/router";
import TopTenHero from "../../Admin/Components/TopTenHosting/Hero";
import TopTenLogoGrid from "../../Admin/Components/TopTenHosting/LogoGrid";
import TopTenCTA from "../../Admin/Components/TopTenHosting/CTA";
import TopTenContent1 from "../../Admin/Components/TopTenHosting/Content/Content1";
import TopTenContent2 from "../../Admin/Components/TopTenHosting/Content/Content2";
import TopTenHostList from "../../Admin/Components/TopTenHosting/HostingList";
import TopTenHostingTable from "../../Admin/Components/TopTenHosting/TopHostingTable";
import TopTenFaq from "../../Admin/Components/TopTenHosting/FAQ";
import Stats from "../../Admin/Components/TopTenHosting/Stats";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";

export default function TopTen() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "top-ten-hero" ? (
        <TopTenHero />
      ) : route === "top-ten-logo-grid" ? (
        <TopTenLogoGrid />
      ) : route === "top-ten-cta" ? (
        <TopTenCTA />
      ) : route === "top-ten-content-1" ? (
        <TopTenContent1 />
      ) : route === "top-ten-content-2" ? (
        <TopTenContent2 />
      ) : route === "top-ten-hosting-list" ? (
        <TopTenHostList />
      ) : route === "top-ten-hosting-table" ? (
        <TopTenHostingTable />
      ) : route === "top-ten-faq" ? (
        <TopTenFaq />
      ) : route === "top-ten-stats" ? (
        <Stats />
      ) : route === "top-ten-seo" ? (
        <Seo dbCollection={"top-ten-hosting"} />
      ) : (
        ""
      )}
    </>
  );
}
