export default function CTA_5({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100  dark:bg-gradient-to-l dark:from-gray-700 dark:via-gray-900 dark:to-black rounded-2xl m-16 border border-white dark:border-gray-700">
            <div className="px-16 py-8 sm:px-8 lg:px-16 lg:py-14">
              <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between md:items-center md:space-x-12 lg:space-x-24">
                <div className="flex justify-between grid grid-cols-1 gap-y-3 sm:grid-cols-2 gap-x-12 xl:gap-x-24 ">
                  <div>
                    <ul className="space-y-3 text-base font-medium text-white font-pj">
                      {data?.features
                        ?.split(/\r?\n/)
                        ?.slice(0, 3)
                        ?.map((x, i) => (
                          <li
                            className="flex items-center list-none text-gray-900 dark:text-white"
                            key={i}
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            {x}
                          </li>
                        )) || (
                        <>
                          <li className="flex items-center text-gray-900 dark:text-white">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            Custom domain
                          </li>
                          <li className="flex items-center text-gray-900 dark:text-white">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            Special API
                          </li>
                          <li className="flex items-center text-gray-900 dark:text-white">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            Bulk upload
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-base font-medium text-white font-pj">
                      {data?.features
                        ?.split(/\r?\n/)
                        ?.slice(3, 6)
                        ?.map((x, i) => (
                          <>
                            <li
                              className="flex items-center text-gray-900 dark:text-white"
                              key={i}
                            >
                              <svg
                                className="w-5 h-5 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>{" "}
                              {x}
                            </li>
                          </>
                        )) || (
                        <>
                          <li className="flex items-center text-gray-900 dark:text-white">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            Custom domain
                          </li>
                          <li className="flex items-center text-gray-900 dark:text-white">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            Special API
                          </li>
                          <li className="flex items-center text-gray-900 dark:text-white">
                            <svg
                              className="w-5 h-5 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>{" "}
                            Bulk upload
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="block md:hidden lg:block ">
                  <div className="hidden lg:block">
                    <svg
                      className="w-4 h-auto text-gray-600"
                      viewBox="0 0 16 123"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 11)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 46)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 81)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 116)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 18)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 53)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 88)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 123)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 25)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 60)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 95)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 32)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 67)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 102)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 39)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 74)"
                      />
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.83205 -0.5547 -0.5547 0.83205 15 109)"
                      />
                    </svg>
                  </div>
                  <div className="block mt-10 md:hidden">
                    <svg
                      className="w-auto h-4 text-gray-600"
                      viewBox="0 0 172 16"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                      ></line>
                      <line
                        y1="-0.5"
                        x2="18.0278"
                        y2="-0.5"
                        transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                      ></line>
                    </svg>
                  </div>
                </div>
                <div className="mt-10 md:mt-0">
                  <a
                    title="Get quote now"
                    className="inline-flex items-center justify-center px-9 py-3.5 mt-5 md:mt-0 text-base font-bold text-gray-900 transition-all duration-200 bg-gradient-to-r from-violet-200 to-pink-200 dark:bg-gradient-to-r from-white to-white  border-transparent hover:outline-none hover:ring-2 hover:ring-offset-2 ring-white hover:ring-white font-pj hover:bg-opacity-90 rounded-xl"
                    href={data?.buttonLink || "#support"}
                    target="_blank"
                  >
                    {" "}
                    {data?.buttonText || "Get quote now"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
