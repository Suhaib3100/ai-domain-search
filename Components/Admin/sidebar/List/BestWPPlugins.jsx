import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestWPPlugins() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-wordpress-plugins")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-wordpress-plugins-hero",
            bold: router.query.route === "best-wordpress-plugins-hero",
          },
          {
            text: "Plugins",
            link: "/admin/all-best-wordpress-plugins",
            bold: router.query.route === "all-best-wordpress-plugins",
          },
          {
            text: "SEO",
            link: "/admin/best-wordpress-plugins-seo",
            bold: router.query.route === "best-wordpress-plugins-seo",
          },
        ]}
        title="Best WP Plugins"
      />
    </>
  );
}
