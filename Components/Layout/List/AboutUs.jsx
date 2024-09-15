import { useRouter } from "next/router";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Hero from "../../Admin/Components/AboutUs/Hero";
import FeatureTab from "../../Admin/Components/AboutUs/FeatureTab";

export default function Aboutus() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "about-us-hero" ? (
        <Hero />
      ) : route === "about-us-tabs" ? (
        <FeatureTab />
      ) : route === "about-us-seo" ? (
        <Seo dbCollection={"about-us"} />
      ) : (
        ""
      )}
    </>
  );
}
