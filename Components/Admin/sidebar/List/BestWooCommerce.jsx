import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function BestWooCommerce() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("best-woocommerce")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/best-woocommerce-hosting-hero",
            bold: router.query.route === "best-woocommerce-hosting-hero",
          },
          // {
          //   text: "Logo Grid",
          //   bold: router.query.route === "best-woocommerce-hosting-logo-grid",
          //   link: `/admin/best-woocommerce-hosting-logo-grid`,
          // },
          {
            text: "Call to Action",
            bold: router.query.route === "best-woocommerce-hosting-cta",
            link: `/admin/best-woocommerce-hosting-cta`,
          },
          {
            text: "Content_1",
            bold: router.query.route === "best-woocommerce-hosting-content-1",
            link: `/admin/best-woocommerce-hosting-content-1`,
          },
          {
            text: "Hosting List",
            bold: router.query.route === "best-woocommerce-hosting-list",
            link: `/admin/best-woocommerce-hosting-list`,
          },
          {
            text: "Content_2",
            bold: router.query.route === "best-woocommerce-hosting-content-2",
            link: `/admin/best-woocommerce-hosting-content-2`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "best-woocommerce-hosting-table",
            link: `/admin/best-woocommerce-hosting-table`,
          },
          {
            text: "Stats",
            bold: router.query.route === "best-woocommerce-hosting-stats",
            link: `/admin/best-woocommerce-hosting-stats`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "best-woocommerce-hosting-faq",
            link: `/admin/best-woocommerce-hosting-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "best-woocommerce-hosting-seo",
            link: `/admin/best-woocommerce-hosting-seo`,
          },
        ]}
        title="Best WooCommerce"
      />
    </>
  );
}
