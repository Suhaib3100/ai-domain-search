import Link from "next/link";
import BestHosting from "./BestHosting";
import HostingReviews from "./HostingReviews";
import WordPress from "./WordPress";
import Tools from "./Tools";
import HostingCoupon from "./HostingCoupon";

export default function DropDown4() {
  return (
    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:focus] py-3 md:py-6">
      <button
        type="button"
        className="flex justify-center items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500 "
      >
        Hosting
        <svg
          className="ml-2 w-2.5 h-2.5 text-gray-600"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="relative hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full right-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5 z-50">
        <div className="grid grid-cols-2 md:grid-cols-10 z-11">
          <div className="md:col-span-3">
            <div className="flex flex-col py-6 px-3 md:px-6 ">
              <BestHosting />
              {/* <HostingReviews /> */}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex flex-col py-6 px-3 md:px-6">
              <WordPress />
              {/* <Tools /> */}
            </div>
          </div>

          <div className="col-span-full md:col-span-4 z-12">
            <HostingCoupon />
          </div>
        </div>
      </div>
    </div>
  );
}
