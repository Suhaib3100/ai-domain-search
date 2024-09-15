export default function FAQ_1({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          {/* FAQ */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                {data?.title || "You might be wondering..."}
              </h2>
            </div>
            {/* End Title */}
            <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {data?.q1 || "Can I cancel at anytime?"}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {data?.a1 ||
                        " Yes, you can cancel anytime no questions are asked while     you cancel but we would highly appreciate if you will give us some feedback."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {data?.q2 || "Can I cancel at anytime?"}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {data?.a2 ||
                        " Yes, you can cancel anytime no questions are asked while     you cancel but we would highly appreciate if you will give us some feedback."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {data?.q3 || "Can I cancel at anytime?"}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {data?.a3 ||
                        " Yes, you can cancel anytime no questions are asked while     you cancel but we would highly appreciate if you will give us some feedback."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {data?.q4 || "Can I cancel at anytime?"}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {data?.a4 ||
                        " Yes, you can cancel anytime no questions are asked while     you cancel but we would highly appreciate if you will give us some feedback."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {data?.q5 || "Can I cancel at anytime?"}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {data?.a5 ||
                        " Yes, you can cancel anytime no questions are asked while     you cancel but we would highly appreciate if you will give us some feedback."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <svg
                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {data?.q6 || "Can I cancel at anytime?"}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {data?.a6 ||
                        " Yes, you can cancel anytime no questions are asked while     you cancel but we would highly appreciate if you will give us some feedback."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End FAQ */}
        </>
      )}
    </>
  );
}
