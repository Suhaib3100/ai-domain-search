import { useRouter } from "next/router";
// import AllReviewHostList from "../../Admin/Components/AllReviews/HostingList";
import HeroForm from "../../Admin/Components/ServerLocation/HeroForm";
import FAQ from "../../Admin/Components/ServerLocation/FAQ";
import CTA from "../../Admin/Components/ServerLocation/CTA";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Content from "../../Admin/Components/ServerLocation/Content";
import Stats from "../../Admin/Components/ServerLocation/Stats";
import Features from "../../Admin/Components/ServerLocation/Features";
export default function ServerLocation() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "server-location-hero" ? (
        <HeroForm />
      ) : route === "server-location-cta" ? (
        <CTA />
      ) : route === "server-location-lists" ? (
        ""
      ) : // <AllReviewHostList />
      route === "server-location-stats" ? (
        <Stats />
      ) : route === "server-location-content" ? (
        <Content />
      ) : route === "server-location-faq" ? (
        <FAQ />
      ) : route === "server-location-features" ? (
        <Features />
      ) : route === "server-location-seo" ? (
        <Seo dbCollection={"hosting-location"} />
      ) : (
        ""
      )}
    </>
  );
}
