import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HostingCoupon() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("/api/hosting-coupon/nav")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-900 p-6">
      <span className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
        Coupons & Promo
      </span>
      <Link className="mt-4 group" href="/coupons-and-promo">
        <div className="aspect-w-16 aspect-h-9 ">
          <img
            className="w-full max-h-40 object-cover rounded-lg shadow-md"
            src={
              data?.nav?.couponImage?.split("public")[1] ||
              "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            }
            alt="Image Description"
          />
        </div>
        <div className="mt-2">
          <p className="text-gray-800 dark:text-gray-200">
            {data?.nav?.desc ||
              "HostingHub Projects has proved to be most efficient cloud based project tracking and bug tracking tool."}
          </p>
          <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
            Get Coupons
            <svg
              className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                fill="currentColor"
              />
            </svg>
          </p>
        </div>
      </Link>
    </div>
  );
}
