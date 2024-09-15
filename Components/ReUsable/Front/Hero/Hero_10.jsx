import { Button, Link } from "@nextui-org/react";

export default function Hero_10({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <div className="mb-16">
          <div className="bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-teal-600 uppercase rounded-full bg-teal-accent-400">
                    {data?.topTitle || "Brand new"}
                  </p>
                </div>
                <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-400 sm:text-6xl md:mx-auto text-center">
                  {/* <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </span> */}
                  {data?.title || "The quick, brown fox jumps over a lazy dog"}
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-500 md:text-lg">
                  {data?.desc ||
                    " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  as={Link}
                  href={data?.leftButtonLink || "#"}
                  target="_blank"
                  radius="sm"
                  className="mx-2"
                  variant="shadow"
                  color="primary"
                  size="lg"
                >
                  {data?.leftButtonText || "Get started"}
                </Button>
                <Button
                  as={Link}
                  href={data?.rightButtonLink || "#"}
                  target="_blank"
                  radius="sm"
                  className="mx-2"
                  variant="shadow"
                  color="default"
                  size="lg"
                >
                  {data?.rightButtonText || "Learn more"}
                </Button>
              </div>
            </div>
          </div>
          <div className="relative px-4 sm:px-0">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black h-1/2" />
            <div className="relative grid mx-auto overflow-hidden bg-white dark:bg-gray-800 divide-y rounded shadow-2xl sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
              <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 dark:bg-indigo-500">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800 dark:text-gray-400">
                  {data?.feature1 || "Make it better"}
                </p>
              </div>
              <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 dark:bg-indigo-500">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800 dark:text-gray-400">
                  {data?.feature2 || "Do it faster"}
                </p>
              </div>
              <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 dark:bg-indigo-500">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800 dark:text-gray-400">
                  {data?.feature3 || "Working harder"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
