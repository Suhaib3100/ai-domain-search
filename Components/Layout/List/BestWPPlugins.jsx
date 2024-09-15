import { useRouter } from "next/router";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import AllWPPlugin from "../../Admin/Components/BestWPPlugins/AllPlugin";
import Hero from "../../Admin/Components/BestWPPlugins/Hero";

export default function BestWordPressPlugin() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "best-wordpress-plugins-hero" ? (
        <Hero />
      ) : route === "all-best-wordpress-plugins" ? (
        <AllWPPlugin />
      ) : route === "best-wordpress-plugins-seo" ? (
        <Seo dbCollection={"best-wp-plugins"} />
      ) : (
        ""
      )}
    </>
  );
}
