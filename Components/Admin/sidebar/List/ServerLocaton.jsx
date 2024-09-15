import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function ServerLocation() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("server-location")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/server-location-hero",
            bold: router.query.route === "server-location-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "server-location-stats",
            link: `/admin/server-location-stats`,
          },
          {
            text: "Call to Action",
            bold: router.query.route === "server-location-cta",
            link: `/admin/server-location-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "server-location-content",
            link: `/admin/server-location-content`,
          },

          {
            text: "Features",
            bold: router.query.route === "server-location-features",
            link: `/admin/server-location-features`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "server-location-faq",
            link: `/admin/server-location-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "server-location-seo",
            link: `/admin/server-location-seo`,
          },
        ]}
        title="Hosting Location"
      />
    </>
  );
}
