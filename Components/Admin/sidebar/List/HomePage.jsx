import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("home-page")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/home-page-hero",
            bold: router.query.route === "home-page-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "home-page-stats",
            link: `/admin/home-page-stats`,
          },
          {
            text: "Call to Action",
            bold: router.query.route === "home-page-cta",
            link: `/admin/home-page-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "home-page-content",
            link: `/admin/home-page-content`,
          },
          {
            text: "Features Card",
            bold: router.query.route === "home-page-features",
            link: `/admin/home-page-features`,
          },
          {
            text: "Faq",
            bold: router.query.route === "home-page-faq",
            link: `/admin/home-page-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "home-page-seo",
            link: `home-page-seo`,
          },
        ]}
        title="Home Page"
      />
    </>
  );
}
