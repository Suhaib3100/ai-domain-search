import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function AboutUs() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("about-us")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/about-us-hero",
            bold: router.query.route === "about-us-hero",
          },
          {
            text: "Feature Tab",
            bold: router.query.route === "about-us-tabs",
            link: `/admin/about-us-tabs`,
          },

          {
            text: "SEO",
            bold: router.query.route === "about-us-seo",
            link: `/admin/about-us-seo`,
          },
        ]}
        title="About Us"
      />
    </>
  );
}
