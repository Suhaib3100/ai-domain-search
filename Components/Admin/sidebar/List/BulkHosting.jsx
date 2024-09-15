import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BulkHosting() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("bulk-hosting")}
        icon={<BalanceIcon />}
        items={[
          // {
          //   text: "Hero Section",
          //   link: "/admin/bulk-hosting-hero",
          //   bold: router.query.route === "bulk-hosting-hero",
          // },
          {
            text: "Stats",
            bold: router.query.route === "bulk-hosting-stats",
            link: `/admin/bulk-hosting-stats`,
          },
          {
            text: "Call to Action",
            bold: router.query.route === "bulk-hosting-cta",
            link: `/admin/bulk-hosting-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "bulk-hosting-content",
            link: `/admin/bulk-hosting-content`,
          },

          {
            text: "Features",
            bold: router.query.route === "bulk-hosting-features",
            link: `/admin/bulk-hosting-features`,
          },

          {
            text: "FAQ",
            bold: router.query.route === "bulk-hosting-faq",
            link: `/admin/bulk-hosting-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "bulk-hosting-seo",
            link: `/admin/bulk-hosting-seo`,
          },
        ]}
        title="Bulk Hosting"
      />
    </>
  );
}
