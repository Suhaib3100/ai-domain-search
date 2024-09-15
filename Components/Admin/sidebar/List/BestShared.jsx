import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestShared() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-shared")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-shared-hero",
            bold: router.query.route === "best-shared-hero",
          },
          // {
          //   text: "Logo Grid",
          //   bold: router.query.route === "best-shared-logo-grid",
          //   link: `/admin/best-shared-logo-grid`,
          // },
          {
            text: "Call to Action",
            bold: router.query.route === "best-shared-cta",
            link: `/admin/best-shared-cta`,
          },
          {
            text: "Content_1",
            bold: router.query.route === "best-shared-content-1",
            link: `/admin/best-shared-content-1`,
          },

          {
            text: "Hosting List",
            bold: router.query.route === "best-shared-hosting-list",
            link: `/admin/best-shared-hosting-list`,
          },
          {
            text: "Content_2",
            bold: router.query.route === "best-shared-content-2",
            link: `/admin/best-shared-content-2`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "best-shared-hosting-table",
            link: `/admin/best-shared-hosting-table`,
          },

          {
            text: "Stats",
            bold: router.query.route === "best-shared-hosting-stats",
            link: `/admin/best-shared-hosting-stats`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "best-shared-faq",
            link: `/admin/best-shared-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "best-shared-seo",
            link: `/admin/best-shared-seo`,
          },
        ]}
        title="Best Shared"
      />
    </>
  );
}
