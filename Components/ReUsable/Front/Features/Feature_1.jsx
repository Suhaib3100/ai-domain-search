import { Button } from "@nextui-org/react";

export default function Feature_1({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-xl pr-16 mx-auto mb-10">
              <h5 className="mb-6 text-4xl font-extrabold leading-none">
                {data?.title || "The quick, brown fox jumps over a lazy dog"}
              </h5>
              <p className="mb-6 text-gray-700 dark:text-gray-400">
                {data?.desc ||
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde omnis iste natus."}
              </p>
              <div className="flex items-center">
                <a href={data?.leftButtonLink || "#"} target="_blank">
                  <Button type="submit" color="warning" className="">
                    {data?.leftButtonText || "Get started"}
                  </Button>
                </a>
                <a
                  href={data?.rightButtonLink || "#"}
                  aria-label=""
                  target="_blank"
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  <Button className="ml-4" color="default">
                    {data?.rightButtonText || "Learn more"}
                  </Button>
                </a>
              </div>
            </div>
            <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
              <div className="max-w-md p-1 rounded-md shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full  bg-indigo-50 dark:bg-indigo-400">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
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
                <h6 className="mb-2 font-semibold leading-5">
                  {data?.title1 || "The deep ocean"}
                </h6>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {data?.desc1 ||
                    "A flower in my garden, a mystery in my panties. Heart attack   never stopped old Big Bear. I didn't even know we were calling him Big Bear."}
                </p>
              </div>
              <div className="max-w-md p-1 rounded-md shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-400">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
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
                <h6 className="mb-2 font-semibold leading-5">
                  {data?.title2 || "The deep ocean"}
                </h6>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {data?.desc2 ||
                    "A flower in my garden, a mystery in my panties. Heart attack   never stopped old Big Bear. I didn't even know we were calling him Big Bear."}
                </p>
              </div>
              <div className="max-w-md p-1 rounded-md shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-400">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
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
                <h6 className="mb-2 font-semibold leading-5">
                  {data?.title3 || "The deep ocean"}
                </h6>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {data?.desc3 ||
                    "A flower in my garden, a mystery in my panties. Heart attack   never stopped old Big Bear. I didn't even know we were calling him Big Bear."}
                </p>
              </div>
              <div className="max-w-md p-1 rounded-md shadow-md hover:shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-400">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400"
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
                <h6 className="mb-2 font-semibold leading-5">
                  {data?.title4 || "The deep ocean"}
                </h6>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {data?.desc4 ||
                    "A flower in my garden, a mystery in my panties. Heart attack   never stopped old Big Bear. I didn't even know we were calling him Big Bear."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
