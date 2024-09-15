import { useRouter } from "next/router";

import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import CTA from "../../Admin/Components/RandomLetter/CTA";
import HeroForm from "../../Admin/Components/RandomLetter/HeroForm";
import Content from "../../Admin/Components/RandomLetter/Content";
import FAQ from "../../Admin/Components/RandomLetter/FAQ";
import Features from "../../Admin/Components/RandomLetter/Features";
import Stats from "../../Admin/Components/RandomLetter/Stats";
import BannerAds from "../../Admin/Components/RandomLetter/BannerAds";

export default function RandomLetterAdmin() {
  const router = useRouter();
  const route = router.query.route;

  return (
    <>
      {route === "random-letter-generator-hero" ? (
        <HeroForm />
      ) : route === "random-letter-generator-cta" ? (
        <CTA />
      ) : route === "random-letter-generator-content" ? (
        <Content />
      ) : route === "random-letter-generator-faq" ? (
        <FAQ />
      ) : route === "random-letter-generator-features" ? (
        <Features />
      ) : route === "random-letter-generator-stats" ? (
        <Stats />
      ) : route === "random-letter-generator-banner-ads" ? (
        <BannerAds />
      ) : route === "random-letter-generator-seo" ? (
        <Seo dbCollection={"random-letter"} />
      ) : (
        ""
      )}
    </>
  );
}
