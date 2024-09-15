export default function Pricing_6({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <section className="bg-gray-100">
            <div className="relative max-w-screen-xl px-8 py-24 mx-auto md:px-12 lg:px-32">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:mx-auto xl:grid-cols-2">
                <section>
                  <div>
                    <span className="font-mono text-xs font-medium tracking-tight text-pink-600 uppercase">
                      pricing
                    </span>
                    <p className="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-gray-950">
                      Level up your
                      <span className="py-2 md:block md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-pink-500 to-pink-600">
                        dev experience
                      </span>
                    </p>
                    <p className="max-w-sm mt-4 text-base text-gray-600">
                      Available for Chrome and Chromium-based browsers (like
                      Edge, Brave and Arc). superscan requires an active
                      license.
                    </p>
                    <ul className="mt-4 space-y-1 text-sm text-gray-500 list-none">
                      <li className="flex gap-3">
                        <span>⏤</span> 14-day refund policy
                      </li>
                      <li className="flex gap-3">
                        <span>⏤</span> Used by hundreds of other developers
                      </li>
                      <li className="flex gap-3">
                        <span>⏤</span> Dedicated and fast support
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="flex flex-col justify-between h-full p-8 shadow-xl just shadow-pink-500/30 rounded-3xl bg-gradient-to-b from-pink-500 to-pink-600">
                  <div>
                    <div className="flex flex-col gap-2">
                      <div>
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-pink-800 rounded-md ring-1 ring-inset ring-gray-500/10">
                          Limited time only ⏤ 59 of 100 left expires in 8 days
                          and 14 hours
                        </span>
                      </div>
                      <div className="flex flex-col justify-between gap-2 mt-4 lg:flex-row">
                        <div>
                          <p className="font-mono text-base font-medium tracking-tighter text-white uppercase">
                            Lifetime license
                          </p>
                          <p className="mt-2 text-xs font-medium text-white">
                            Used by 1000+ developers
                          </p>
                        </div>
                        <p className="font-mono text-2xl font-semibold tracking-tighter text-white lg:text-4xl">
                          <del className="opacity-50">$249</del>
                          <span>$199</span>
                          <span className="text-sm font-normal">/once</span>
                        </p>
                      </div>
                    </div>
                    <ul
                      className="flex flex-col mt-10 text-sm text-white gap-y-3"
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
                        <span>Pay once, use forever</span>
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
                        <span>License for 3 devices</span>
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
                        <span>Includes all updates, forever</span>
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
                        <span>Permanent access to the community</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full mt-8">
                    <a
                      className="flex items-center justify-between h-10 px-4 py-2 text-sm font-semibold text-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-full hover:text-pink-700 focus:ring-2 shadow-button shadow-gray-500/5 focus:ring-pink-950 focus:ring-offset-2 ring-offset-gray-200 hover:shadow-none"
                      href="#_"
                    >
                      Own superscan now <span>→</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
