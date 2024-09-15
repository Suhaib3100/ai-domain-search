export default function Hero_2({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          {/* Hero */}
          <div className="bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 h-screen">
            <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
              <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                {/* Announcement Banner */}
                <div className="flex justify-center">
                  <a
                    target="_blank"
                    className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
                    href={data?.topTitleLink || "#"}
                  >
                    <p className="me-2 inline-block text-white text-sm">
                      {data?.topTitleText || "Preline UI Figma is live."}
                    </p>
                    <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
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
                    </span>
                  </a>
                </div>
                {/* End Announcement Banner */}
                {/* Title */}
                <div className="max-w-3xl text-center mx-auto">
                  <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    {data?.title ||
                      "Now it's easier than ever to build products"}
                  </h1>
                </div>
                {/* End Title */}
                <div className="max-w-3xl text-center mx-auto">
                  <p className="text-lg text-gray-300">
                    {data?.desc ||
                      " Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream."}
                  </p>
                </div>
                {/* Buttons */}
                <div className="text-center">
                  <a
                    target="_blank"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                    href={data?.buttonLink || "#"}
                  >
                    {data?.buttonText || "Get started"}
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
                  </a>
                </div>
                {/* End Buttons */}
              </div>
            </div>
          </div>
          {/* End Hero */}
        </>
      )}
    </>
  );
}
