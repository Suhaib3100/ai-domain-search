import { useRouter } from "next/router";

import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import CTA from "../../Admin/Components/RandomWord/CTA";
import HeroForm from "../../Admin/Components/RandomWord/HeroForm";
import Content from "../../Admin/Components/RandomWord/Content";
import FAQ from "../../Admin/Components/RandomWord/FAQ";
import Features from "../../Admin/Components/RandomWord/Features";
import Stats from "../../Admin/Components/RandomWord/Stats";
import BannerAds from "../../Admin/Components/RandomWord/BannerAds";

export default function RandomWordAdmin() {
  const router = useRouter();
  const route = router.query.route;

  return (
    <>
      {route === "random-word-generator-hero" ? (
        <HeroForm />
      ) : route === "random-word-generator-cta" ? (
        <CTA />
      ) : route === "random-word-generator-content" ? (
        <Content />
      ) : route === "random-word-generator-faq" ? (
        <FAQ />
      ) : route === "random-word-generator-features" ? (
        <Features />
      ) : route === "random-word-generator-stats" ? (
        <Stats />
      ) : route === "random-word-generator-banner-ads" ? (
        <BannerAds />
      ) : route === "random-word-generator-seo" ? (
        <Seo dbCollection={"random-word"} />
      ) : (
        ""
      )}
    </>
  );
}
