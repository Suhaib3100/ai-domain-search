import Link from "next/link";

export default function HostingReviews() {
  return (
    <div className="mt-7 space-y-4">
      <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
        Hosting Reviews
      </span>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/hosting-reviews"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 dark:text-gray-200"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>

        <div className="grow">
          <p>All Hosting Reviews</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/submit-a-hosting-review"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 dark:text-gray-200"
        >
          <path
            d="M21 13V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V14C3 15.1046 3.89543 16 5 16H12"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8789 16.9174C21.3727 17.2211 21.3423 17.9604 20.8337 18.0181L18.2671 18.309L17.1159 20.6213C16.8878 21.0795 16.1827 20.8552 16.0661 20.2873L14.8108 14.1713C14.7123 13.6913 15.1437 13.3892 15.561 13.646L20.8789 16.9174Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M12 11.01L12.01 10.9989"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16 11.01L16.01 10.9989"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M8 11.01L8.01 10.9989"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div className="grow">
          <p>Submit a Review</p>
        </div>
      </Link>
    </div>
  );
}
