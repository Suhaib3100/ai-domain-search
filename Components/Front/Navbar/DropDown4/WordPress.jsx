import Link from "next/link";

export default function WordPress() {
  return (
    <div className="space-y-4">
      <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
        WordPress
      </span>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/best-wordpress-hosting"
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
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
        <div className="grow">
          <p>Best WP Hosting</p>
        </div>
      </Link>
      {/* <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/"
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
            d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
          />
        </svg>

        <div className="grow">
          <p>WP Theme Checker</p>
        </div>
      </Link> */}
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/best-wordpress-themes"
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
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>

        <div className="grow">
          <p>Best WP Themes</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/best-wordpress-plugins"
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
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
        <div className="grow">
          <p>Best WP Plugins</p>
        </div>
      </Link>
    </div>
  );
}
