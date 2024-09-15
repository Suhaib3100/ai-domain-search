import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestWPThemes() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-wordpress-themes")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-wordpress-themes-hero",
            bold: router.query.route === "best-wordpress-themes-hero",
          },
          {
            text: "Themes",
            link: "/admin/all-best-wordpress-themes",
            bold: router.query.route === "all-best-wordpress-themes",
          },
          {
            text: "SEO",
            link: "/admin/best-wordpress-themes-seo",
            bold: router.query.route === "best-wordpress-themes-seo",
          },
        ]}
        title="Best WP Themes"
      />
    </>
  );
}
