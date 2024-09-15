export default function Hero_5({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <div className="relative h-screen">
          <div
            className="absolute inset-0 blur-xl h-[580px]"
            style={{
              background:
                "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
            }}
          ></div>
          <div className="relative">
            <section>
              <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                <div className="flex-none space-y-5 max-w-xl">
                  <a
                    // href="javascript:void(0)"
                    href={data?.newsButtonLink || "#"}
                    className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
                  >
                    <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
                      News
                    </span>
                    <span className="flex items-center dark:text-gray-400">
                      {data?.newsButtonText || "Read the launch post from here"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                  <h1 className="text-4xl text-gray-800 dark:text-gray-300 font-extrabold sm:text-6xl">
                    {data?.title || "Build your SaaS exactly how you want"}
                  </h1>
                  <p className="dark:text-gray-500">
                    {data?.desc ||
                      "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."}
                  </p>
                  <div className="flex items-center gap-x-3 sm:text-sm">
                    <a
                      href={data?.leftButtonLink || "javascript:void(0)"}
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                    >
                      {data?.leftButtonText || "Get started"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={data?.rightButtonLink || "javascript:void(0)"}
                      className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 dark:text-gray-400 font-medium duration-150 md:inline-flex"
                    >
                      {data?.rightButtonText || "Contact sales"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex-1 hidden md:block">
                  {/* Replace with your image */}
                  <img
                    src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                    className="max-w-xl"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
