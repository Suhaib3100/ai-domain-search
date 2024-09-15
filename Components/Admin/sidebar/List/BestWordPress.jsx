import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestWordPress() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-wp")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-wp-hero",
            bold: router.query.route === "best-wp-hero",
          },
          // {
          //   text: "Logo Grid",
          //   bold: router.query.route === "best-wp-logo-grid",
          //   link: `/admin/best-wp-logo-grid`,
          // },
          {
            text: "Call to Action",
            bold: router.query.route === "best-wp-cta",
            link: `/admin/best-wp-cta`,
          },
          {
            text: "Content_1",
            bold: router.query.route === "best-wp-content-1",
            link: `/admin/best-wp-content-1`,
          },
          {
            text: "Hosting List",
            bold: router.query.route === "best-wp-hosting-list",
            link: `/admin/best-wp-hosting-list`,
          },
          {
            text: "Content_2",
            bold: router.query.route === "best-wp-content-2",
            link: `/admin/best-wp-content-2`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "best-wp-hosting-table",
            link: `/admin/best-wp-hosting-table`,
          },
          {
            text: "Stats",
            bold: router.query.route === "best-wp-stats",
            link: `/admin/best-wp-stats`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "best-wp-faq",
            link: `/admin/best-wp-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "best-wp-seo",
            link: `/admin/best-wp-seo`,
          },
        ]}
        title="Best WordPress"
      />
    </>
  );
}
