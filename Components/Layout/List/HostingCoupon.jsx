import { useRouter } from "next/router";
import Hero from "../../Admin/Components/HostingCoupon/Hero";
import AddCoupon from "../../Admin/Components/HostingCoupon/AddCoupon";
import CouponContent from "../../Admin/Components/HostingCoupon/Content/";
import CouponFaq from "../../Admin/Components/HostingCoupon/Faq";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import NavContent from "../../Admin/Components/HostingCoupon/NavContent";

export default function HostingCoupon() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "coupons-promo-hero" ? (
        <Hero />
      ) : route === "coupons-promo-content" ? (
        <CouponContent />
      ) : route === "add-coupons-promo" ? (
        <AddCoupon />
      ) : route === "coupons-promo-faq" ? (
        <CouponFaq />
      ) : route === "coupons-promo-pricing" ? (
        <Pricing />
      ) : route === "coupons-promo-testimonial" ? (
        <Testimonial />
      ) : route === "coupons-promo-nav-content" ? (
        <NavContent />
      ) : route === "coupons-promo-seo" ? (
        <Seo dbCollection={"coupons-promo"} />
      ) : (
        ""
      )}
    </>
  );
}
