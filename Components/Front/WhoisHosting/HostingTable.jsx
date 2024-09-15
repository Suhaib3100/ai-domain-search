import { Card, Link, Button } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function HostingTable({ data }) {
  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <Card className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700 pb-1">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      All Hosting List
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Compare hosting provider by their features
                    </p>
                  </div>
                </div>
                {/* End Header */}
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left">
                        <a
                          className="group inline-flex items-center gap-x-2"
                          href="#"
                        >
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            #
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <a
                          className="group inline-flex items-center gap-x-2"
                          href="#"
                        >
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Hosting
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <a
                          className="group inline-flex items-center gap-x-2"
                          href="#"
                        >
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Pricing
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <a
                          className="group inline-flex items-center gap-x-2"
                          href="#"
                        >
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Traffic
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <a
                          className="group inline-flex items-center gap-x-2"
                          href="#"
                        >
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Storage
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <a
                          className="group inline-flex items-center gap-x-2"
                          href="#"
                        >
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Free Domain
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-6 py-3 text-right" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data?.hostingTable &&
                      [...data?.hostingTable]
                        ?.sort((a, b) => a?.id - b?.id)
                        ?.map((x, i) => (
                          <tr
                            className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                            key={i}
                          >
                            <td className="h-px w-px whitespace-nowrap">
                              <a
                                className="block relative z-10"
                                href={x?.affiliateLink}
                                target="_blank"
                              >
                                <div className="px-6 py-2">
                                  <p className="block text-xl text-black-600 decoration-2 hover:underline dark:text-blue-500">
                                    #{x?.id}
                                  </p>
                                </div>
                              </a>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <Link
                                isBlock
                                showAnchorIcon
                                className=" relative z-10"
                                href={x?.link}
                                target="_blank"
                              >
                                <div className="px-2 py-">
                                  <div className="block text-sm font-semibold text-blue-600 decoration-2 hover:underline dark:text-blue-500">
                                    {x?.hosting}
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <a
                                className="block relative z-10"
                                href={x?.affiliateLink}
                                target="_blank"
                              >
                                <div className="px-6 py-2">
                                  <p className="text-sm text-black-500">
                                    {x?.pricing}
                                  </p>
                                </div>
                              </a>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <a
                                className="block relative z-10"
                                href={x?.affiliateLink}
                                target="_blank"
                              >
                                <div className="px-6 py-2">
                                  <span className="text-sm text-black-700">
                                    {x?.traffic}
                                  </span>
                                </div>
                              </a>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <a
                                className="block relative z-10"
                                href={x?.affiliateLink}
                                target="_blank"
                              >
                                <div className="px-6 py-2">
                                  <span className="text-sm text-black-500">
                                    {x?.storage}
                                  </span>
                                </div>
                              </a>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <a
                                className="block relative z-10"
                                href={x?.affiliateLink}
                                target="_blank"
                              >
                                <div className="px-6 py-2">
                                  <span className="text-sm text-black-500">
                                    {x?.freeDomain}
                                  </span>
                                </div>
                              </a>
                            </td>

                            <td className="h-px w-px whitespace-nowrap">
                              <Button
                                href={x?.link || "#!"}
                                as={Link}
                                isExternal
                                color="primary"
                                showAnchorIcon
                                variant="solid"
                              >
                                Get Hosting
                              </Button>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
                {/* End Table */}
              </div>
            </div>
          </div>
        </Card>
        {/* End Card */}
      </div>
      {/* End Table Section */}
      {/* Modal */}

      {/* End Modal */}
    </>
  );
}
