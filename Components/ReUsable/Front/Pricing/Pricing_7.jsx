export default function Pricing_7({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <section className="bg-gray-100">
            <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24">
              <div className="mx-auto text-center max-w-3l">
                <span className="text-xs font-bold tracking-wide text-purple-500 uppercase">
                  Pricing
                </span>
                <p className="mt-8 text-4xl font-semibold tracking-tight text-purple-500 lg:text-5xl">
                  Empower your
                  <span className="md:block md:text-gray-500">
                    {" "}
                    document understanding
                  </span>
                </p>
                <p className="max-w-xl mx-auto mt-4 text-base text-gray-500">
                  Every plan includes every feature, and can scale as your team
                  does.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 p-8 mt-12 bg-white shadow-sm md:grid-cols-2 lkg:mt-24 lg:p-12 rounded-3xl">
                <div className="flex flex-col justify-between h-full">
                  <div className="grid items-center justify-center w-full grid-cols-1 p-8 pt-0 rounded-t-3xl">
                    <div className="flex-shrink-0 block">
                      <div className="flex items-center">
                        <div>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_234_854)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M44 0H0V150C0 177.614 22.3858 200 50 200H94V50C94 22.3858 71.6142 0 44 0ZM156 0C128.386 0 106 22.3858 106 50V200H150C177.614 200 200 177.614 200 150V0H156Z"
                                fill="url(#paint0_linear_234_854)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_234_854"
                                x1={100}
                                y1={0}
                                x2={100}
                                y2={200}
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#f3f4f6" />
                                <stop offset={1} stopColor="#333" />
                              </linearGradient>
                              <clipPath id="clip0_234_854">
                                <rect width={200} height={200} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-semibold text-purple-900 lg:text-2xl">
                            Starter
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500 lg:text-base">
                        Embark on the exploration and translation of documents,
                        delving into a comprehensive journey to uncover valuable
                        insights and meanings.
                      </p>
                      <p className="mt-8 text-4xl font-bold tracking-tight text-purple-900 jetbrains lg:text-5xl">
                        <span>Free</span>
                      </p>
                    </div>
                  </div>
                  <div className="p-8 overflow-hidden bg-gray-100 shadow-sm rounded-3xl">
                    <ul
                      className="flex flex-col order-last text-base text-gray-500 gap-y-3"
                      role="list"
                    >
                      <li className="flex flex-row items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            strokeWidth={0}
                            fill="currentColor"
                          />
                        </svg>
                        <span>Capture any document</span>
                      </li>
                      <li className="flex flex-row items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            strokeWidth={0}
                            fill="currentColor"
                          />
                        </svg>
                        <span>Capture up to 3 documents per month</span>
                      </li>
                      <li className="flex flex-row items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            strokeWidth={0}
                            fill="currentColor"
                          />
                        </svg>
                        <span>Access to 5 Most Popular Languages</span>
                      </li>
                      <li className="flex flex-row items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            strokeWidth={0}
                            fill="currentColor"
                          />
                        </svg>
                        <span>3 chats a month</span>
                      </li>
                    </ul>
                    <div className="w-full mt-8">
                      <a
                        className="flex items-center justify-center h-10 px-4 py-2 text-sm font-semibold text-purple-600 transition-all bg-white border border-gray-300 rounded-lg hover:text-purple-500"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="order-first lg:order-none">
                  <div className="grid items-center justify-center w-full grid-cols-1 p-8 pt-0 rounded-t-3xl">
                    <div className="flex-shrink-0 block">
                      <div className="flex items-center">
                        <div>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_104_171)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M50 100C77.6142 100 100 77.6142 100 50C100 77.6142 122.386 100 150 100C122.386 100 100 122.386 100 150C100 122.386 77.6142 100 50 100ZM50 100C22.3858 100 0 122.386 0 150C0 177.614 22.3858 200 50 200C77.6142 200 100 177.614 100 150C100 177.614 122.386 200 150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C177.614 100 200 77.6142 200 50C200 22.3858 177.614 0 150 0C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
                                fill="url(#paint0_linear_104_171)"
                              />
                            </g>
                            <defs>
                              <linearGradient
                                id="paint0_linear_104_171"
                                x1={14}
                                y1={26}
                                x2={179}
                                y2="179.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#9095fb" />
                                <stop offset={1} stopColor="#260d69" />
                              </linearGradient>
                              <clipPath id="clip0_104_171">
                                <rect width={200} height={200} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-semibold text-purple-900 lg:text-2xl">
                            WhatLetter Plus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500 lg:text-base">
                        Catering to the diverse language needs of regular users,
                        our solution offers an extensive range of language
                        options for seamless and communication.
                      </p>
                      <p className="mt-8 text-4xl font-bold tracking-tight text-purple-900 jetbrains lg:text-5xl">
                        <span>$10.00</span>
                        <span className="text-xs font-normal tracking-normal text-gray-500">
                          /month
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="p-8 shadow-sm bg-gradient-to-t from-purple-800 via-purple-700 to-purple-500 rounded-3xl">
                    <ul
                      className="flex flex-col order-last text-base text-white gap-y-3"
                      role="list"
                    >
                      <li className="flex flex-row items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            strokeWidth={0}
                            fill="currentColor"
                          />
                        </svg>
                        <span>All in starter</span>
                      </li>
                      <li className="flex flex-row items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            strokeWidth={0}
                            fill="currentColor"
                          />
                        </svg>
                        <span>30 Documents per month</span>
                      </li>
                      <li className="flex flex-row items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            strokeWidth={0}
                            fill="currentColor"
                          />
                        </svg>
                        <span>Access to All supported languages</span>
                      </li>
                      <li className="flex flex-row items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                            strokeWidth={0}
                            fill="currentColor"
                          />
                        </svg>
                        <span>Early access to the newest additions</span>
                      </li>
                    </ul>
                    <div className="w-full mt-8">
                      <a
                        className="text-sm flex font-semibold items-center justify-center px-4 py-2 rounded-lg transition-all h-10 text-white bg-gradient-to-b from-white/[.105] hover:to-white/[.25] ring-1 ring-inset ring-white/20 to-white/[.15]"
                        href="#"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
