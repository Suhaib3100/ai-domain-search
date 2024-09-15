import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BulkDomain() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("bulk-domain")}
        icon={<BalanceIcon />}
        items={[
          // {
          //   text: "Hero Section",
          //   link: "/admin/bulk-domain-hero",
          //   bold: router.query.route === "bulk-domain-hero",
          // },
          {
            text: "Stats",
            bold: router.query.route === "bulk-domain-stats",
            link: `/admin/bulk-domain-stats`,
          },

          {
            text: "Call to Action",
            bold: router.query.route === "bulk-domain-cta",
            link: `/admin/bulk-domain-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "bulk-domain-content",
            link: `/admin/bulk-domain-content`,
          },

          {
            text: "Features",
            bold: router.query.route === "bulk-domain-features",
            link: `/admin/bulk-domain-features`,
          },

          {
            text: "FAQ",
            bold: router.query.route === "bulk-domain-faq",
            link: `/admin/bulk-domain-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "bulk-domain-seo",
            link: `/admin/bulk-domain-seo`,
          },
        ]}
        title="Bulk Domain"
      />
    </>
  );
}
