import { useRouter } from "next/router";

import HeroForm from "../../Admin/Components/ReverseIP/HeroForm";
import FAQ from "../../Admin/Components/ReverseIP/FAQ";
import CTA from "../../Admin/Components/ReverseIP/CTA";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Content from "../../Admin/Components/ReverseIP/Content";
import Features from "../../Admin/Components/ReverseIP/Features";
import Stats from "../../Admin/Components/ReverseIP/Stats";
export default function ReverseIP() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "reverse-ip-hero" ? (
        <HeroForm />
      ) : route === "reverse-ip-cta" ? (
        <CTA />
      ) : route === "reverse-ip-content" ? (
        <Content />
      ) : route === "reverse-ip-stats" ? (
        <Stats />
      ) : route === "reverse-ip-features" ? (
        <Features />
      ) : route === "reverse-ip-faq" ? (
        <FAQ />
      ) : route === "reverse-ip-seo" ? (
        <Seo dbCollection={"reverse-ip"} />
      ) : (
        ""
      )}
    </>
  );
}
