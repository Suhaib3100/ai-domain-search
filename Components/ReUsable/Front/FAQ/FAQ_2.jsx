export default function FAQ_2({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          {/* FAQ */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200 text-center">
                {data?.title || "Frequently Asked Questions"}
              </h2>
            </div>
            {/* End Title */}
            <div className="max-w-5xl mx-auto">
              {/* Grid */}
              <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {data?.q1 || "Can I cancel at anytime?"}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {data?.a1 ||
                      "Yes, you can cancel anytime no questions are asked while you   cancel but we would highly appreciate if you will give us some feedback."}
                  </p>
                </div>
                {/* End Col */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {data?.q2 || "Can I cancel at anytime?"}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {data?.a2 ||
                      "Yes, you can cancel anytime no questions are asked while you   cancel but we would highly appreciate if you will give us some feedback."}
                  </p>
                </div>
                {/* End Col */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {data?.q3 || "Can I cancel at anytime?"}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {data?.a3 ||
                      "Yes, you can cancel anytime no questions are asked while you   cancel but we would highly appreciate if you will give us some feedback."}
                  </p>
                </div>
                {/* End Col */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {data?.q4 || "Can I cancel at anytime?"}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {data?.a4 ||
                      "Yes, you can cancel anytime no questions are asked while you   cancel but we would highly appreciate if you will give us some feedback."}
                  </p>
                </div>
                {/* End Col */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {data?.q5 || "Can I cancel at anytime?"}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {data?.a5 ||
                      "Yes, you can cancel anytime no questions are asked while you   cancel but we would highly appreciate if you will give us some feedback."}
                  </p>
                </div>
                {/* End Col */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {data?.q6 || "Can I cancel at anytime?"}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {data?.a6 ||
                      "Yes, you can cancel anytime no questions are asked while you   cancel but we would highly appreciate if you will give us some feedback."}
                  </p>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
          </div>
          {/* End FAQ */}
        </>
      )}
    </>
  );
}
