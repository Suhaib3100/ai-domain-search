import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestVPS() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-vps")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-vps-hero",
            bold: router.query.route === "best-vps-hero",
          },
          // {
          //   text: "Logo Grid",
          //   bold: router.query.route === "best-vps-logo-grid",
          //   link: `/admin/best-vps-logo-grid`,
          // },
          {
            text: "Call to Action",
            bold: router.query.route === "best-vps-cta",
            link: `/admin/best-vps-cta`,
          },
          {
            text: "Content_1",
            bold: router.query.route === "best-vps-content-1",
            link: `/admin/best-vps-content-1`,
          },
          {
            text: "Hosting List",
            bold: router.query.route === "best-vps-hosting-list",
            link: `/admin/best-vps-hosting-list`,
          },
          {
            text: "Content_2",
            bold: router.query.route === "best-vps-content-2",
            link: `/admin/best-vps-content-2`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "best-vps-hosting-table",
            link: `/admin/best-vps-hosting-table`,
          },
          {
            text: "Stats",
            bold: router.query.route === "best-vps-hosting-stats",
            link: `/admin/best-vps-hosting-stats`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "best-vps-faq",
            link: `/admin/best-vps-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "best-vps-seo",
            link: `/admin/best-vps-seo`,
          },
        ]}
        title="Best VPS"
      />
    </>
  );
}
