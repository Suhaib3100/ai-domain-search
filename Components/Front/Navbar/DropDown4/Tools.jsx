import Link from "next/link";

export default function Tools() {
  return (
    <div className="mt-7 space-y-4">
      <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
        Tools
      </span>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/who-is-hosting"
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
            d="M2 21L17 21"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 21L22 21"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
        </svg>

        <div className="grow">
          <p>Web Hosting Checker</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/hosting-server-location"
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
            d="M16 9.2C16 13.1765 9 20 9 20C9 20 2 13.1765 2 9.2C2 5.22355 5.13401 2 9 2C12.866 2 16 5.22355 16 9.2Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M16 19L22 19"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
            fill="#000000"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

        <div className="grow">
          <p>Hosting Location</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/dns-checker"
      >
        <svg
          className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-800 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
        </svg>
        <div className="grow">
          <p>DNS Checker</p>
        </div>
      </Link>
      <Link
        className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-gray-200"
        href="/reverse-ip-checker"
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
            d="M3 19H12M21 19H12M12 19V13M12 13H18V5H6V13H12Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9 9.01L9.01 8.99889"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 9.01L12.01 8.99889"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

        <div className="grow">
          <p>Reverse IP Lookup</p>
        </div>
      </Link>
    </div>
  );
}
