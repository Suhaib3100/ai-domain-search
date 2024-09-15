import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BulkWhois() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("bulk-whois")}
        icon={<BalanceIcon />}
        items={[
          // {
          //   text: "Hero Section",
          //   link: "/admin/bulk-whois-hero",
          //   bold: router.query.route === "bulk-whois-hero",
          // },
          {
            text: "Stats",
            bold: router.query.route === "bulk-whois-stats",
            link: `/admin/bulk-whois-stats`,
          },
          {
            text: "Call to Action",
            bold: router.query.route === "bulk-whois-cta",
            link: `/admin/bulk-whois-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "bulk-whois-content",
            link: `/admin/bulk-whois-content`,
          },

          {
            text: "Features",
            bold: router.query.route === "bulk-whois-features",
            link: `/admin/bulk-whois-features`,
          },

          {
            text: "FAQ",
            bold: router.query.route === "bulk-whois-faq",
            link: `/admin/bulk-whois-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "bulk-whois-seo",
            link: `/admin/bulk-whois-seo`,
          },
        ]}
        title="Bulk Whois"
      />
    </>
  );
}
