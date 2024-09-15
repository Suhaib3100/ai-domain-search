import axios from "axios";
import { useEffect, useState } from "react";
import EditModal from "./EditModal";
import { useDisclosure } from "@nextui-org/react";

export default function HostingList() {
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState("");
  useEffect(() => {
    axios
      .get("/api/bulk-domain/add-hosting")
      .then((res) => setData(res.data?.addHosting));
  }, []);
  const handleModal = (x) => {
    onOpen();
    setModalData(x);
  };
  return (
    <>
      <EditModal isOpen={isOpen} onOpenChange={onOpenChange} data={modalData} />
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
                      List of Hosting Companies added by you.
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Compare Web Hosting company's features and prices.
                    </p>
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
                            ID
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Web Hosting
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Pricing
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Traffic
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Storage
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Free Domain
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-right" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data
                      ?.sort((a, b) => a?.id - b?.id)
                      ?.map((x, i) => (
                        <tr
                          className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                          key={i}
                        >
                          <td className="h-px w-px whitespace-nowrap">
                            <a
                              className="block"
                              href={x?.link || "#"}
                              target="_blank"
                              data-hs-overlay="#hs-ai-invoice-modal"
                            >
                              <div className="px-6 py-2">
                                <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                                  {x?.id || "...."}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a
                              className="block"
                              href={x?.link || "#"}
                              target="_blank"
                              data-hs-overlay="#hs-ai-invoice-modal"
                            >
                              <div className="px-6 py-2">
                                <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                                  {x?.hosting || "...."}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a
                              className="block"
                              href={x?.link || "#"}
                              target="_blank"
                              data-hs-overlay="#hs-ai-invoice-modal"
                            >
                              <div className="px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {x?.pricing || "...."}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a
                              className="block"
                              href={x?.link || "#"}
                              target="_blank"
                              data-hs-overlay="#hs-ai-invoice-modal"
                            >
                              <div className="px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {x?.traffic || "10 Jan 2023"}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a
                              className="block"
                              href={x?.link || "#"}
                              target="_blank"
                              data-hs-overlay="#hs-ai-invoice-modal"
                            >
                              <div className="px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {x?.storage || "10 Jan 2023"}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a
                              className="block"
                              href={x?.link || "#"}
                              target="_blank"
                              data-hs-overlay="#hs-ai-invoice-modal"
                            >
                              <div className="px-6 py-2">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {x?.freeDomain || "28 Dec, 12:12"}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <button
                              onClick={() => handleModal(x)}
                              className="block"
                              target="_blank"
                              href={x?.link || "#"}
                              data-hs-overlay="#hs-ai-invoice-modal"
                            >
                              <div className="px-6 py-1.5">
                                <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                                  <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                  </svg>
                                  Edit
                                </div>
                              </div>
                            </button>
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
