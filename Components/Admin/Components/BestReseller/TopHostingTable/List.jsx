import { Button, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditModal from "./EditModal";

export default function Table() {
  const [data, setData] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState("");

  const handleModal = (x) => {
    onOpen();
    setModalData(x);
  };

  useEffect(() => {
    axios.get("/api/best-reseller-hosting/top-hosting-table").then((res) => {
      setData(res.data);
    });
  }, []);

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
                      Teams
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Create teams, edit, download and more.
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
                            ID
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
                          <div className="flex justify-center items-center w-5 h-5 border border-gray-200 group-hover:bg-gray-200 text-gray-400 rounded dark:border-gray-700 dark:group-hover:bg-gray-700 dark:text-gray-400">
                            <svg
                              className="w-2.5 h-2.5"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.55921 0.287451C7.86808 -0.0958171 8.40096 -0.0958167 8.70982 0.287451L12.9295 5.52367C13.3857 6.08979 13.031 7 12.3542 7H3.91488C3.23806 7 2.88336 6.08979 3.33957 5.52367L7.55921 0.287451Z"
                                fill="currentColor"
                              />
                              <path
                                d="M8.70983 15.7125C8.40096 16.0958 7.86808 16.0958 7.55921 15.7125L3.33957 10.4763C2.88336 9.9102 3.23806 9 3.91488 9H12.3542C13.031 9 13.3857 9.9102 12.9295 10.4763L8.70983 15.7125Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
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
                          <div className="flex justify-center items-center w-5 h-5 border border-gray-200 group-hover:bg-gray-200 text-gray-400 rounded dark:border-gray-700 dark:group-hover:bg-gray-700 dark:text-gray-400">
                            <svg
                              className="w-2.5 h-2.5"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.55921 0.287451C7.86808 -0.0958171 8.40096 -0.0958167 8.70982 0.287451L12.9295 5.52367C13.3857 6.08979 13.031 7 12.3542 7H3.91488C3.23806 7 2.88336 6.08979 3.33957 5.52367L7.55921 0.287451Z"
                                fill="currentColor"
                              />
                              <path
                                d="M8.70983 15.7125C8.40096 16.0958 7.86808 16.0958 7.55921 15.7125L3.33957 10.4763C2.88336 9.9102 3.23806 9 3.91488 9H12.3542C13.031 9 13.3857 9.9102 12.9295 10.4763L8.70983 15.7125Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
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
                          <div className="flex justify-center items-center w-5 h-5 border border-gray-200 group-hover:bg-gray-200 text-gray-400 rounded dark:border-gray-700 dark:group-hover:bg-gray-700 dark:text-gray-400">
                            <svg
                              className="w-2.5 h-2.5"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.55921 0.287451C7.86808 -0.0958171 8.40096 -0.0958167 8.70982 0.287451L12.9295 5.52367C13.3857 6.08979 13.031 7 12.3542 7H3.91488C3.23806 7 2.88336 6.08979 3.33957 5.52367L7.55921 0.287451Z"
                                fill="currentColor"
                              />
                              <path
                                d="M8.70983 15.7125C8.40096 16.0958 7.86808 16.0958 7.55921 15.7125L3.33957 10.4763C2.88336 9.9102 3.23806 9 3.91488 9H12.3542C13.031 9 13.3857 9.9102 12.9295 10.4763L8.70983 15.7125Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
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
                          <div className="flex justify-center items-center w-5 h-5 border border-gray-200 group-hover:bg-gray-200 text-gray-400 rounded dark:border-gray-700 dark:group-hover:bg-gray-700 dark:text-gray-400">
                            <svg
                              className="w-2.5 h-2.5"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.55921 0.287451C7.86808 -0.0958171 8.40096 -0.0958167 8.70982 0.287451L12.9295 5.52367C13.3857 6.08979 13.031 7 12.3542 7H3.91488C3.23806 7 2.88336 6.08979 3.33957 5.52367L7.55921 0.287451Z"
                                fill="currentColor"
                              />
                              <path
                                d="M8.70983 15.7125C8.40096 16.0958 7.86808 16.0958 7.55921 15.7125L3.33957 10.4763C2.88336 9.9102 3.23806 9 3.91488 9H12.3542C13.031 9 13.3857 9.9102 12.9295 10.4763L8.70983 15.7125Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                      </th>
                      <th scope="col" className="px-6 py-3 text-right" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data?.hostingTable
                      ?.sort((a, b) => a?.id - b?.id)
                      ?.map((x, i) => (
                        <tr
                          className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                          key={i}
                        >
                          <td className="h-px w-px whitespace-nowrap">
                            <a className="block relative z-10" href="#">
                              <div className="px-6 py-2">
                                <div className="block text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">
                                  {x?.id}
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a
                              className="block relative z-10"
                              href={x?.affiliateLink}
                            >
                              <div className="px-6 py-2">
                                <div className="block text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">
                                  {x?.hostingName}
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-72 min-w-[18rem]">
                            <a className="block relative z-10" href="#">
                              <div className="px-6 py-2">
                                <p className="text-sm text-gray-800">
                                  {x?.pricing}
                                </p>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a className="block relative z-10" href="#">
                              <div className="px-6 py-2">
                                <span className="text-sm text-gray-800">
                                  {x?.traffic}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a className="block relative z-10" href="#">
                              <div className="px-6 py-2">
                                <span className="text-sm text-gray-800">
                                  {x?.storage}
                                </span>
                              </div>
                            </a>
                          </td>
                          <td className="h-px w-px whitespace-nowrap">
                            <a className="block relative z-10" href="#">
                              <div className="text-sm text-gray-800">
                                {x?.freeDomain}
                              </div>
                            </a>
                          </td>
                          <td className="text-sm text-gray-800">
                            <Button onClick={() => handleModal(x)} size="sm">
                              Edit
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
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
    </>
  );
}
