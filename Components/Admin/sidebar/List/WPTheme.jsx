import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function WPThemeDetector() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("wordpress-theme-info")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/wordpress-theme-info-hero",
            bold: router.query.route === "wordpress-theme-info-hero",
          },
          {
            text: "Theme Info",
            bold: router.query.route === "wordpress-theme-info",
            link: `/admin/wordpress-theme-info`,
          },
          {
            text: "Content",
            bold: router.query.route === "wordpress-theme-info-content",
            link: `/admin/wordpress-theme-info-content`,
          },
          {
            text: "Features List",
            bold: router.query.route === "wordpress-theme-info-features",
            link: `/admin/wordpress-theme-info-features`,
          },
          // {
          //   text: "FAQ",
          //   bold: router.query.route === "wordpress-theme-info-faq",
          //   link: `/admin/wordpress-theme-info-faq`,
          // },
          {
            text: "SEO",
            bold: router.query.route === "wordpress-theme-info-seo",
            link: `/admin/wordpress-theme-info-seo`,
          },
        ]}
        title="WP Theme Detector"
      />
    </>
  );
}
