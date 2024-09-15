import { useRouter } from "next/router";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import CTA from "../../Admin/Components/AdvanceAi/CTA";
import HeroForm from "../../Admin/Components/AdvanceAi/HeroForm";
import Content from "../../Admin/Components/AdvanceAi/Content";
import FAQ from "../../Admin/Components/AdvanceAi/FAQ";
import Features from "../../Admin/Components/AdvanceAi/Features";
import Stats from "../../Admin/Components/AdvanceAi/Stats";

export default function AdvanceAi() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "advance-ai-generator-hero" ? (
        <HeroForm />
      ) : route === "advance-ai-generator-cta" ? (
        <CTA />
      ) : route === "advance-ai-generator-content" ? (
        <Content />
      ) : route === "advance-ai-generator-faq" ? (
        <FAQ />
      ) : route === "advance-ai-generator-features" ? (
        <Features />
      ) : route === "advance-ai-generator-stats" ? (
        <Stats />
      ) : route === "advance-ai-generator-seo" ? (
        <Seo dbCollection={"advance-ai"} />
      ) : (
        ""
      )}
    </>
  );
}
