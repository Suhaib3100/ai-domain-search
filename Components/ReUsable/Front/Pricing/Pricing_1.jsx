export default function Pricing_1({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <section className="bg-gray-100">
            <div className="flex items-center justify-center max-w-5xl px-8 py-12 mx-auto fles-col">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div className="flex flex-col p-8 bg-white border shadow-xl shadow-gray-500/10 lg:p-12 rounded-3xl">
                  <div>
                    <div className="flex justify-between">
                      <div className="flex gap-3">
                        <svg
                          className="w-8 h-8 text-white rounded-full"
                          viewBox="0 0 280 280"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width={280}
                            height={280}
                            rx={32}
                            fill="#eb542b"
                          />
                          <g clipPath="url(#clip0_501_1489)">
                            <path
                              d="M196.064 183.936L152.127 140L196.064 96.0636L240 140L196.064 183.936ZM83.9364 183.936L40 140L83.9364 96.0636L127.873 140L83.9364 183.936ZM140 240L96.0636 196.064L140 152.127L183.936 196.064L140 240ZM140 127.873L96.0636 83.9364L140 40L183.936 83.9364L140 127.873Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_501_1489">
                              <rect
                                width={200}
                                height={200}
                                fill="white"
                                transform="translate(40 40)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="text-lg font-medium text-black lg:text-3xl">
                          Starter pack
                        </p>
                      </div>
                      <p>
                        <span className="text-lg font-medium text-black lg:text-3xl">
                          $15
                        </span>
                        <span className="text-base font-medium text-gray-500">
                          {" "}
                          /mo
                        </span>
                      </p>
                    </div>
                    <p className="mt-8 text-sm text-gray-500">
                      This plan is ideal for individual users and hobbyists who
                      are looking for essential functionalities to support their
                      personal projects and interests.
                    </p>
                  </div>
                  <div className="order-last">
                    <p className="mt-4 text-lg font-medium text-black lg:text-2xl lg:mt-8">
                      Features
                    </p>
                    <ul
                      className="order-last gap-4 mt-4 space-y-3 text-gray-500 list-none"
                      role="list"
                    >
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> 10 deploys</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span>1 members</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> 5 TB cloud storage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> Growth oriented</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> Marketing campaigns</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-6">
                    <a
                      className="items-center justify-between inline-flex w-full font-medium px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-lg h-12 nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"
                      href="#"
                    >
                      Get starter <span>→</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col p-8 bg-black border shadow-xl shadow-gray-500/10 lg:p-12 rounded-3xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3 items-items">
                        <svg
                          className="w-8 h-8 text-white rounded-full"
                          viewBox="0 0 280 280"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width={280}
                            height={280}
                            rx={32}
                            fill="#eb542b"
                          />
                          <g clipPath="url(#clip0_501_1474)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M160 54.2857C160 46.3959 153.604 40 145.714 40H134.286C126.396 40 120 46.3959 120 54.2857V57.2269C120 69.9541 104.612 76.3279 95.6128 67.3284L93.533 65.2487C87.9541 59.6698 78.9089 59.6698 73.3299 65.2487L65.2487 73.3299C59.6698 78.9088 59.6698 87.954 65.2487 93.533L67.3285 95.6128C76.328 104.612 69.9542 120 57.227 120H54.2857C46.3959 120 40 126.396 40 134.286V145.714C40 153.604 46.3959 160 54.2857 160H57.2269C69.9542 160 76.328 175.388 67.3285 184.387L65.2487 186.467C59.6698 192.046 59.6698 201.091 65.2487 206.67L73.3299 214.751C78.9089 220.33 87.9541 220.33 93.533 214.751L95.6128 212.671C104.612 203.672 120 210.046 120 222.773V225.714C120 233.604 126.396 240 134.286 240H145.714C153.604 240 160 233.604 160 225.714V222.773C160 210.046 175.388 203.672 184.387 212.671L186.467 214.751C192.046 220.33 201.091 220.33 206.67 214.751L214.751 206.67C220.33 201.091 220.33 192.046 214.751 186.467L212.672 184.387C203.672 175.388 210.046 160 222.773 160H225.714C233.604 160 240 153.604 240 145.714V134.286C240 126.396 233.604 120 225.714 120H222.773C210.046 120 203.672 104.612 212.671 95.6128L214.751 93.5329C220.33 87.954 220.33 78.9088 214.751 73.3299L206.67 65.2487C201.091 59.6697 192.046 59.6697 186.467 65.2487L184.387 67.3284C175.388 76.3279 160 69.9541 160 57.2269V54.2857Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_501_1474">
                              <rect
                                width={200}
                                height={200}
                                fill="white"
                                transform="translate(40 40)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="text-lg font-medium text-white lg:text-3xl">
                          Silver Surfer
                        </p>
                      </div>
                      <p>
                        <span className="text-lg font-medium text-white lg:text-3xl">
                          $35
                        </span>
                        <span className="text-base font-medium text-gray-300">
                          {" "}
                          /mo
                        </span>
                      </p>
                    </div>
                    <p className="mt-8 text-sm text-gray-300">
                      If you're a small business or a startup, this plan is
                      designed to cater to your needs. It offers a balance of
                      essential features.
                    </p>
                  </div>
                  <div className="order-last">
                    <p className="mt-4 text-lg font-medium text-black lg:text-2xl lg:mt-8">
                      Features
                    </p>
                    <ul
                      className="gap-4 mt-4 space-y-3 text-gray-300 list-none"
                      role="list"
                    >
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> Unlimited deploys</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> Unlimited members</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> 20 TB cloud storage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> Growth oriented</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-circle-check w-5 h-5 text-[#eb542b]"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span> Marketing campaigns</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex mt-6">
                    <a
                      className="items-center justify-between inline-flex w-full font-medium px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-black rounded-lg h-12 nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"
                      href="#"
                    >
                      Get starter <span>→</span>
                    </a>
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
