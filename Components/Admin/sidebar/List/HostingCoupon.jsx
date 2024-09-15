import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function HostingCoupon() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("coupons-promo")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Nav Bar Content",
            link: "/admin/coupons-promo-nav-content",
            bold: router.query.route === "coupons-promo-nav-content",
          },
          {
            text: "Hero Section",
            link: "/admin/coupons-promo-hero",
            bold: router.query.route === "coupons-promo-hero",
          },
          {
            text: "Coupon List",
            bold: router.query.route === "add-coupons-promo",
            link: `/admin/add-coupons-promo`,
          },
          {
            text: "Content",
            bold: router.query.route === "coupons-promo-content",
            link: `/admin/coupons-promo-content`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "coupons-promo-faq",
            link: `/admin/coupons-promo-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "coupons-promo-seo",
            link: `/admin/coupons-promo-seo`,
          },
        ]}
        title="Coupons & Promo"
      />
    </>
  );
}
