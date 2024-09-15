import { useRouter } from "next/router";

import HeroForm from "../../Admin/Components/BulkLocationChecker/HeroForm";
import FAQ from "../../Admin/Components/BulkLocationChecker/FAQ";
import CTA from "../../Admin/Components/BulkLocationChecker/CTA";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Content from "../../Admin/Components/BulkLocationChecker/Content";
import Features from "../../Admin/Components/BulkLocationChecker/Features";
import Stats from "../../Admin/Components/BulkLocationChecker/Stats";
export default function BulkLocationChecker() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "bulk-location-hero" ? (
        <HeroForm />
      ) : route === "bulk-location-cta" ? (
        <CTA />
      ) : route === "bulk-location-content" ? (
        <Content />
      ) : route === "bulk-location-stats" ? (
        <Stats />
      ) : route === "bulk-location-features" ? (
        <Features />
      ) : route === "bulk-location-faq" ? (
        <FAQ />
      ) : route === "bulk-location-seo" ? (
        <Seo dbCollection={"bulk-location"} />
      ) : (
        ""
      )}
    </>
  );
}
