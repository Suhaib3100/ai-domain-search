import { useRouter } from "next/router";

import HeroForm from "../../Admin/Components/BulkWhoisChecker/HeroForm";
import FAQ from "../../Admin/Components/BulkWhoisChecker/FAQ";
import CTA from "../../Admin/Components/BulkWhoisChecker/CTA";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Content from "../../Admin/Components/BulkWhoisChecker/Content";
import Features from "../../Admin/Components/BulkWhoisChecker/Features";
import Stats from "../../Admin/Components/BulkWhoisChecker/Stats";
export default function BulkWhoisChecker() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "bulk-whois-hero" ? (
        <HeroForm />
      ) : route === "bulk-whois-cta" ? (
        <CTA />
      ) : route === "bulk-whois-content" ? (
        <Content />
      ) : route === "bulk-whois-stats" ? (
        <Stats />
      ) : route === "bulk-whois-features" ? (
        <Features />
      ) : route === "bulk-whois-faq" ? (
        <FAQ />
      ) : route === "bulk-whois-seo" ? (
        <Seo dbCollection={"bulk-whois"} />
      ) : (
        ""
      )}
    </>
  );
}
