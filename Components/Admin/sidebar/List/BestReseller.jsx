import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestReseller() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-reseller")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-reseller-hosting-hero",
            bold: router.query.route === "best-reseller-hosting-hero",
          },
          // {
          //   text: "Logo Grid",
          //   bold: router.query.route === "best-reseller-hosting-logo-grid",
          //   link: `/admin/best-reseller-hosting-logo-grid`,
          // },
          {
            text: "Call to Action",
            bold: router.query.route === "best-reseller-hosting-cta",
            link: `/admin/best-reseller-hosting-cta`,
          },
          {
            text: "Content_1",
            bold: router.query.route === "best-reseller-hosting-content-1",
            link: `/admin/best-reseller-hosting-content-1`,
          },
          {
            text: "Hosting List",
            bold: router.query.route === "best-reseller-hosting-list",
            link: `/admin/best-reseller-hosting-list`,
          },
          {
            text: "Content_2",
            bold: router.query.route === "best-reseller-hosting-content-2",
            link: `/admin/best-reseller-hosting-content-2`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "best-reseller-hosting-table",
            link: `/admin/best-reseller-hosting-table`,
          },
          {
            text: "Stats",
            bold: router.query.route === "best-reseller-hosting-stats",
            link: `/admin/best-reseller-hosting-stats`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "best-reseller-hosting-faq",
            link: `/admin/best-reseller-hosting-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "best-reseller-hosting-seo",
            link: `/admin/best-reseller-hosting-seo`,
          },
        ]}
        title="Best Reseller"
      />
    </>
  );
}
