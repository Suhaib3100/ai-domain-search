import Link from "next/link";

export default function BestHosting() {
  return (
    <div className="space-y-4 z-11">
      <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
        Best Hosting
      </span>
      <Link
        // isBlock
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href={"/best-shared-hosting"}
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
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>

        <div className="grow">
          <p>Shared Hosting</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/best-vps-hosting"
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
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
          />
        </svg>
        <div className="grow">
          <p>VPS Hosting</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="best-dedicated-hosting"
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
            d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
          />
        </svg>
        <div className="grow">
          <p>Dadicated Hosting</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/best-woocommerce-hosting"
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>

        <div className="grow">
          <p>Woo Commerce</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/best-reseller-hosting"
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
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>

        <div className="grow">
          <p>Reseller Hosting</p>
        </div>
      </Link>
      <Link
        color="danger"
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/top-ten-hosting"
      >
        <svg
          className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
          />
        </svg>
        <div className="grow">
          <p>Top Ten Webhosting</p>
        </div>
      </Link>
    </div>
  );
}
