import { useRouter } from "next/router";

import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import CTA from "../../Admin/Components/Whois/CTA";
import HeroForm from "../../Admin/Components/Whois/HeroForm";
import Content from "../../Admin/Components/Whois/Content";
import FAQ from "../../Admin/Components/Whois/FAQ";
import Features from "../../Admin/Components/Whois/Features";
import Stats from "../../Admin/Components/Whois/Stats";
import BannerAds from "../../Admin/Components/Whois/BannerAds";

export default function Whois() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "whois-hero" ? (
        <HeroForm />
      ) : route === "whois-cta" ? (
        <CTA />
      ) : route === "whois-content" ? (
        <Content />
      ) : route === "whois-faq" ? (
        <FAQ />
      ) : route === "whois-features" ? (
        <Features />
      ) : route === "whois-stats" ? (
        <Stats />
      ) : route === "whois-banner-ads" ? (
        <BannerAds />
      ) : route === "whois-seo" ? (
        <Seo dbCollection={"whois"} />
      ) : (
        ""
      )}
    </>
  );
}
