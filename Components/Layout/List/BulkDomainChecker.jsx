import { useRouter } from "next/router";

import HeroForm from "../../Admin/Components/BulkDomainChecker/HeroForm";
import FAQ from "../../Admin/Components/BulkDomainChecker/FAQ";
import CTA from "../../Admin/Components/BulkDomainChecker/CTA";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Content from "../../Admin/Components/BulkDomainChecker/Content";
import Features from "../../Admin/Components/BulkDomainChecker/Features";
import Stats from "../../Admin/Components/BulkDomainChecker/Stats";
export default function BulkDomainChecker() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "bulk-domain-hero" ? (
        <HeroForm />
      ) : route === "bulk-domain-cta" ? (
        <CTA />
      ) : route === "bulk-domain-content" ? (
        <Content />
      ) : route === "bulk-domain-stats" ? (
        <Stats />
      ) : route === "bulk-domain-features" ? (
        <Features />
      ) : route === "bulk-domain-faq" ? (
        <FAQ />
      ) : route === "bulk-domain-seo" ? (
        <Seo dbCollection={"bulk-domain"} />
      ) : (
        ""
      )}
    </>
  );
}
