import { useRouter } from "next/router";

import HeroForm from "../../Admin/Components/BulkHostingChecker/HeroForm";
import FAQ from "../../Admin/Components/BulkHostingChecker/FAQ";
import CTA from "../../Admin/Components/BulkHostingChecker/CTA";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Content from "../../Admin/Components/BulkHostingChecker/Content";
import Features from "../../Admin/Components/BulkHostingChecker/Features";
import Stats from "../../Admin/Components/BulkHostingChecker/Stats";
export default function BulkHostingChecker() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "bulk-hosting-hero" ? (
        <HeroForm />
      ) : route === "bulk-hosting-cta" ? (
        <CTA />
      ) : route === "bulk-hosting-content" ? (
        <Content />
      ) : route === "bulk-hosting-stats" ? (
        <Stats />
      ) : route === "bulk-hosting-features" ? (
        <Features />
      ) : route === "bulk-hosting-faq" ? (
        <FAQ />
      ) : route === "bulk-hosting-seo" ? (
        <Seo dbCollection={"bulk-hosting"} />
      ) : (
        ""
      )}
    </>
  );
}
