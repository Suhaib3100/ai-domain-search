export default function FAQ_4({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          {/* FAQ */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-2">
                <div className="max-w-xs">
                  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    {data?.title || "Frequently asked questions"}
                  </h2>
                  <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
                    {data?.desc ||
                      "Answers to the most frequently asked questions."}
                  </p>
                </div>
              </div>
              {/* End Col */}
              <div className="md:col-span-3">
                {/* Accordion */}
                <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                  <div
                    className="hs-accordion pb-3 active"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    >
                      {data?.q1 || " Can I cancel at anytime?"}
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p className="text-gray-600 dark:text-gray-400">
                        {data?.a1 ||
                          "Yes, you can cancel anytime no questions are asked while  you cancel but we would highly appreciate if you will give us some feedback."}
                      </p>
                    </div>
                  </div>
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    >
                      {data?.q2 || "My team has credits. How do we use them?"}
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                    >
                      <p className="text-gray-600 dark:text-gray-400">
                        {data?.a2 ||
                          "Yes, you can cancel anytime no questions are asked while  you cancel but we would highly appreciate if you will give us some feedback."}
                      </p>
                    </div>
                  </div>
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    >
                      {data?.q3 || " Can I cancel at anytime?"}
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                    >
                      <p className="text-gray-600 dark:text-gray-400">
                        {data?.a3 ||
                          "Yes, you can cancel anytime no questions are asked while  you cancel but we would highly appreciate if you will give us some feedback."}
                      </p>
                    </div>
                  </div>
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                    >
                      {data?.q4 || " Can I cancel at anytime?"}
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                    >
                      <p className="text-gray-600 dark:text-gray-400">
                        {data?.a4 ||
                          "Yes, you can cancel anytime no questions are asked while  you cancel but we would highly appreciate if you will give us some feedback."}
                      </p>
                    </div>
                  </div>
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                    >
                      {data?.q5 || " Can I cancel at anytime?"}
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                    >
                      <p className="text-gray-600 dark:text-gray-400">
                        {data?.a5 ||
                          "Yes, you can cancel anytime no questions are asked while  you cancel but we would highly appreciate if you will give us some feedback."}
                      </p>
                    </div>
                  </div>
                  <div
                    className="hs-accordion pt-6 pb-3"
                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <button
                      className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                    >
                      {data?.q6 || " Can I cancel at anytime?"}
                      <svg
                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                    >
                      <p className="text-gray-600 dark:text-gray-400">
                        {data?.a6 ||
                          "Yes, you can cancel anytime no questions are asked while  you cancel but we would highly appreciate if you will give us some feedback."}
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Accordion */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End FAQ */}
        </>
      )}
    </>
  );
}
