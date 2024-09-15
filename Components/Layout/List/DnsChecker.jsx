import { useRouter } from "next/router";

import HeroForm from "../../Admin/Components/DnsChecker/HeroForm";
import FAQ from "../../Admin/Components/DnsChecker/FAQ";
import CTA from "../../Admin/Components/DnsChecker/CTA";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Content from "../../Admin/Components/DnsChecker/Content";
import Stats from "../../Admin/Components/DnsChecker/Stats";
import Features from "../../Admin/Components/DnsChecker/Features";
export default function DnsChecker() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "dns-checker-hero" ? (
        <HeroForm />
      ) : route === "dns-checker-cta" ? (
        <CTA />
      ) : route === "dns-checker-content" ? (
        <Content />
      ) : route === "dns-checker-faq" ? (
        <FAQ />
      ) : route === "dns-checker-stats" ? (
        <Stats />
      ) : route === "dns-checker-features" ? (
        <Features />
      ) : route === "dns-checker-seo" ? (
        <Seo dbCollection={"dns-checker"} />
      ) : (
        ""
      )}
    </>
  );
}
