import { useSelector } from "react-redux";

export default function CouponFaq() {
  const couponPageData = useSelector((state) => state.couponPageData);
  return (
    // <!-- FAQ -->
    // <!-- FAQ -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
          Frequently Asked Questions
        </h2>
      </div>
      {/* <!-- End Title --> */}

      <div className="max-w-5xl mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {couponPageData?.faq[0]?.title || "Can I cancel at anytime?"}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {couponPageData?.faq[0]?.description ||
                "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."}
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {couponPageData?.faq[1]?.title || "Can I cancel at anytime?"}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {couponPageData?.faq[1]?.description ||
                "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."}
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {couponPageData?.faq[2]?.title || "Can I cancel at anytime?"}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {couponPageData?.faq[2]?.description ||
                "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."}
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {couponPageData?.faq[3]?.title || "Can I cancel at anytime?"}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {couponPageData?.faq[3]?.description ||
                "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."}
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {couponPageData?.faq[4]?.title || "Can I cancel at anytime?"}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {couponPageData?.faq[4]?.description ||
                "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."}
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {couponPageData?.faq[5]?.title || "Can I cancel at anytime?"}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {couponPageData?.faq[5]?.description ||
                "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."}
            </p>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </div>
  );
}
