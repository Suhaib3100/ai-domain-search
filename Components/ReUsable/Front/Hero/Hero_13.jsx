export default function Hero_13({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <section className="relative flex items-center w-full bg-white dark:bg-slate-900">
          <div className="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
            <div className="relative flex-col items-start m-auto align-middle">
              <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                <div className="relative items-center gap-12 m-auto lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div>
                      <p className="text-3xl font-medium md:text-6xl text-slate-900 dark:text-slate-400">
                        {data?.title || "Leading Linkeding Network Manager"}
                      </p>
                      <p className="mt-4 text-lg tracking-tight text-slate-500 lg:text-xl">
                        {data?.desc ||
                          "Organize your LinkedIn connections the way you want. No ads, no distractions."}
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
                      <a
                        target="_blank"
                        className="inline-flex items-center justify-center w-full px-6 py-4 text-center text-white duration-200 bg-indigo-500 border-2 border-indigo-500 focus:outline-none focus-visible:outline-black focus-visible:ring-black hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 lg:w-auto rounded-xl"
                        href={data?.leftButtonLink || "#"}
                      >
                        <svg
                          className="icon icon-tabler icon-tabler-brand-chrome"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          height={24}
                          width={24}
                        >
                          <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                          <circle cx={12} cy={12} r={9} />
                          <circle cx={12} cy={12} r={3} />
                          <line x1={12} x2="20.4" y1={9} y2={9} />
                          <line
                            x1={12}
                            x2="20.4"
                            y1={9}
                            y2={9}
                            transform="rotate(120 12 12)"
                          />
                          <line
                            x1={12}
                            x2="20.4"
                            y1={9}
                            y2={9}
                            transform="rotate(240 12 12)"
                          />
                        </svg>
                        <span className="ml-3">
                          {data?.leftButtonText || "Go to Hosting"}
                        </span>
                      </a>
                      <p className="text-slate-500">
                        <span className="block">
                          {data?.rightText || "10-day free trial"}
                        </span>
                        {/* <span className="block">
                          No credit card info required
                        </span> */}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 mt-12 lg:flex-row divide-slate-400 lg:divide-x-2">
                      <div>
                        <div className="flex items-center justify-center gap-3 lg:justify-start">
                          <div className="flex gap-1">
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              />
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                            </svg>
                          </div>
                          <span className="text-slate-500">
                            {data?.startText1 || "Chrome store rating"}
                          </span>
                        </div>
                      </div>
                      <div className="lg:pl-3">
                        <span>
                          <span className="ml-3 text-slate-500">
                            {data?.startText2 || "6000+ Satisfied users"}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full mt-12 lg:mt-0">
                  <img
                    alt="hero"
                    className="object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl"
                    src={
                      data?.heroImage?.split("public")[1] ||
                      "https://leaddelta.com/wp-content/uploads/2022/12/home-hero.svg"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
