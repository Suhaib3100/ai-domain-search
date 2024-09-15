import { useRouter } from "next/router";

import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import CTA from "../../Admin/Components/LandingPage/CTA";
import HeroForm from "../../Admin/Components/LandingPage/HeroForm";
import FAQ from "../../Admin/Components/LandingPage/FAQ";
import Features from "../../Admin/Components/LandingPage/Features";
import Stats from "../../Admin/Components/LandingPage/Stats";
import BannerAds from "../../Admin/Components/LandingPage/BannerAds";
import Content from "../../Admin/Components/LandingPage/Content";

export default function HomePage() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "home-page-hero" ? (
        <HeroForm />
      ) : route === "home-page-content" ? (
        <Content />
      ) : route === "home-page-cta" ? (
        <CTA />
      ) : route === "home-page-faq" ? (
        <FAQ />
      ) : route === "home-page-features" ? (
        <Features />
      ) : route === "home-page-stats" ? (
        <Stats />
      ) : route === "home-page-banner-ads" ? (
        <BannerAds />
      ) : route === "home-page-seo" ? (
        <Seo dbCollection={"home-page"} />
      ) : (
        ""
      )}
    </>
  );
}
