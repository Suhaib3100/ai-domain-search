export default function RecentTable({ data }) {
  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Recent DNS Checks
                    </h2>
                    {/* <div className="text-sm text-gray-600 dark:text-gray-400">
                      Compare Web Hosting company's features and prices.
                    </div> */}
                  </div>
                </div>
                {/* End Header */}

                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-slate-900">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Domain
                          </span>
                          <div className="hs-tooltip">
                            <div className="hs-tooltip-toggle">
                              <svg
                                className="w-3.5 h-3.5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                              </svg>
                              <span
                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                                role="tooltip"
                              >
                                List of last recent checks.
                              </span>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Registrar
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Register On
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Expires On
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Updated
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Whois Server
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data?.recentChecks?.slice(0, 20).map((x, i) => (
                      <tr
                        className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                        key={i}
                      >
                        <td className="h-px w-px whitespace-nowrap">
                          <div
                            className="block"
                            href={x?.link || "#"}
                            target="_blank"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                                {x?.domain || "...."}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div
                            className="block"
                            target="_blank"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {x?.whois[0][1]?.Registrar || "...."}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div
                            className="block"
                            target="_blank"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                <svg
                                  className="w-2.5 h-2.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                {x?.whois[0][1]?.["Created Date"] || "...."}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div
                            className="block"
                            target="_blank"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {x?.whois[0][1]?.["Expiry Date"] || "...."}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div
                            className="block"
                            target="_blank"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {x?.whois[0][1]?.["Updated Date"] || "...."}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div
                            className="block"
                            target="_blank"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="px-6 py-2">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {x?.whois[0][1]?.["Registrar WHOIS Server"] ||
                                  "...."}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* End Table */}
                {/* Footer */}

                {/* End Footer */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
      {/* Modal */}

      {/* End Modal */}
    </>
  );
}
