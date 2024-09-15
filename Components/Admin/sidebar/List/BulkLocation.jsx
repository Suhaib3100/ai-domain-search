import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BulkLocation() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("bulk-location")}
        icon={<BalanceIcon />}
        items={[
          // {
          //   text: "Hero Section",
          //   link: "/admin/bulk-location-hero",
          //   bold: router.query.route === "bulk-location-hero",
          // },
          {
            text: "Stats",
            bold: router.query.route === "bulk-location-stats",
            link: `/admin/bulk-location-stats`,
          },
          {
            text: "Call to Action",
            bold: router.query.route === "bulk-location-cta",
            link: `/admin/bulk-location-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "bulk-location-content",
            link: `/admin/bulk-location-content`,
          },

          {
            text: "Features",
            bold: router.query.route === "bulk-location-features",
            link: `/admin/bulk-location-features`,
          },

          {
            text: "FAQ",
            bold: router.query.route === "bulk-location-faq",
            link: `/admin/bulk-location-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "bulk-location-seo",
            link: `/admin/bulk-location-seo`,
          },
        ]}
        title="Bulk Location"
      />
    </>
  );
}
