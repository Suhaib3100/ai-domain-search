import { useRouter } from "next/router";

import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import CTA from "../../Admin/Components/AiDomainGenerator/CTA";
import HeroForm from "../../Admin/Components/AiDomainGenerator/HeroForm";
import Content from "../../Admin/Components/AiDomainGenerator/Content";
import FAQ from "../../Admin/Components/AiDomainGenerator/FAQ";
import Features from "../../Admin/Components/AiDomainGenerator/Features";
import Stats from "../../Admin/Components/AiDomainGenerator/Stats";
import BannerAds from "../../Admin/Components/AiDomainGenerator/BannerAds";

export default function AiDomainGenerator() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "ai-domain-generator-hero" ? (
        <HeroForm />
      ) : route === "ai-domain-generator-cta" ? (
        <CTA />
      ) : route === "ai-domain-generator-content" ? (
        <Content />
      ) : route === "ai-domain-generator-faq" ? (
        <FAQ />
      ) : route === "ai-domain-generator-features" ? (
        <Features />
      ) : route === "ai-domain-generator-stats" ? (
        <Stats />
      ) : route === "ai-domain-generator-banner-ads" ? (
        <BannerAds />
      ) : route === "ai-domain-generator-seo" ? (
        <Seo dbCollection={"ai-generator"} />
      ) : (
        ""
      )}
    </>
  );
}
