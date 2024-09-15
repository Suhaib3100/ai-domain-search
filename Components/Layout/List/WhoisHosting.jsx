import { useRouter } from "next/router";
import CheckHosting from "../../Admin/Components/WhoIsHosting/CheckHosting";
import FAQ from "../../Admin/Components/WhoIsHosting/FAQ";
import Features from "../../Admin/Components/WhoIsHosting/Features";
// import WhoIsHero from "../../Admin/Components/WhoIsHosting/Hero";
import RecommendedHost from "../../Admin/Components/WhoIsHosting/RecommendedHost";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Content from "../../Admin/Components/WhoIsHosting/Content";
import HeroForm from "../../Admin/Components/WhoIsHosting/HeroForm";
import Stats from "../../Admin/Components/WhoIsHosting/Stats";
import CTA from "../../Admin/Components/WhoIsHosting/CTA";
import BestHost from "../../Admin/Components/WhoIsHosting/HostingList";
export default function WhoisHosting() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "who-is-hosting-hero" ? (
        <HeroForm />
      ) : route === "who-is-hosting-checker" ? (
        <CheckHosting />
      ) : route === "who-is-hosting-list" ? (
        <RecommendedHost />
      ) : route === "who-is-hosting-best-host" ? (
        <BestHost />
      ) : route === "who-is-hosting-content" ? (
        <Content />
      ) : route === "who-is-hosting-features" ? (
        <Features />
      ) : route === "who-is-hosting-faq" ? (
        <FAQ />
      ) : route === "who-is-hosting-stats" ? (
        <Stats />
      ) : route === "who-is-hosting-cta" ? (
        <CTA />
      ) : route === "who-is-hosting-seo" ? (
        <Seo dbCollection="who-is-hosting" />
      ) : (
        ""
      )}
    </>
  );
}
