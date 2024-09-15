export default function CTA_3({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <>
            {/* Hero */}
            <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                {/* Announcement Banner */}
                <div className="flex justify-center">
                  <a
                    className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href={data?.topButtonLink || "#"}
                  >
                    {data?.topButtonText || "PRO release - Join to waitlist"}
                    <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                      <svg
                        className="flex-shrink-0 w-4 h-4"
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </a>
                </div>
                {/* End Announcement Banner */}
                {/* Title */}
                <div className="mt-5 max-w-2xl text-center mx-auto">
                  <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl  bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                    {data?.title || "Let's Build Together"}
                  </h1>
                </div>
                {/* End Title */}
                <div className="mt-5 max-w-3xl text-center mx-auto">
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {data?.desc ||
                      "Preline UI is an open-source set of prebuilt UI components,  ready-to-use examples and Figma design system based on the  utility-first ailwind CSS framework."}
                  </p>
                </div>
                {/* Buttons */}
                <div className="mt-8 gap-3 flex justify-center">
                  <a
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
                    href={data?.leftButtonLink || "#"}
                  >
                    {data?.leftButtonText || "Get started"}
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                  <a
                    href={data?.rightButtonLink || "#"}
                    // type="button"
                    className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    {data?.rightButtonText || "$ npm i preline"}
                    <span className="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 dark:bg-gray-700 dark:text-gray-400">
                      <svg
                        className="flex-shrink-0 w-4 h-4 group-hover:rotate-6 transition"
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
                        <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      </svg>
                    </span>
                  </a>
                </div>
                {/* End Buttons */}
              </div>
            </div>
            {/* End Hero */}
          </>
        </>
      )}
    </>
  );
}
