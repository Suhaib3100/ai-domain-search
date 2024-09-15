import { useSelector } from "react-redux";
import Faq from "../../ReUsable/Faq";

import CouponList from "./CouponList";

import Hero from "./Hero";
import Blog from "../../ReUsable/Blog";

export default function () {
  const pageData = useSelector((state) => state.pageData);
  return (
    <>
      {/* Hosting section */}
      <Hero />

      {/* Coupon list */}
      <CouponList />

      {/* Blog Content */}
      <Blog data={pageData?.content?.content} />

      {/* Faq Section */}
      <Faq data={pageData} />
    </>
  );
}
