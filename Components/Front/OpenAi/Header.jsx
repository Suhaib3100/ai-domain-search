import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import AiModal from "./AiModal";

export default function Header({
  data = { enable: false },
  placeholder = "Enter your topic.",
}) {
  const [value, setValue] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleSubmit = (e) => {
    e.preventDefault();
    onOpen();
    // isOpen();
  };

  return (
    <>
      <AiModal
        value={value}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
      <div className="relative overflow-hidden h-screen anim-bg">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-24 2xl:py-60">
          <div className="text-center">
            <h1 className="max-w-4xl text-4xl sm:text-6xl font-bold text-gray-100 dark:text-gray-200 mx-auto">
              {data?.title ||
                "Stay in the know with insights from industry experts."}
            </h1>
            <p className="mt-3 text-gray-100 dark:text-gray-400">
              {data?.desc ||
                "Stay in the know with insights from industry experts."}
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2] shadow-lg hover:shadow-gray-100 transition-shadow duration-300 box-shado">
                  <div className="flex-[1_0_0%]">
                    {/* <label
                          htmlFor="hs-search-article-1"
                          className="block text-sm text-gray-700 font-medium dark:text-white"
                        >
                          <span className="sr-only">Search article</span>
                        </label> */}
                    <input
                      required
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      name="hs-search-article-1"
                      id="hs-search-article-1"
                      className="block w-full p-2.5 text-gray-600 dark:text-gray-200 bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-500 focus:outline-none focus:ring-slate-500 dark:placeholder:text-slate-300 sm:text-lg"
                      placeholder={placeholder}
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <button
                      type="submit"
                      className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              {/* End Form */}
              {/* SVG Element */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
              {/* SVG Element */}
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
