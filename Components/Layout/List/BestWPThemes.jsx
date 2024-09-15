import { useRouter } from "next/router";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import AllWPThemes from "../../Admin/Components/BestWPThemes/AllThemes";
import Hero from "../../Admin/Components/BestWPThemes/Hero";

export default function BestWordPressThemes() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "best-wordpress-themes-hero" ? (
        <Hero />
      ) : route === "all-best-wordpress-themes" ? (
        <AllWPThemes />
      ) : route === "best-wordpress-themes-seo" ? (
        <Seo dbCollection={"best-wp-themes"} />
      ) : (
        ""
      )}
    </>
  );
}
