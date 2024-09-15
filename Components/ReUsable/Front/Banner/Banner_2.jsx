export default function Banner_2({ enable = true }) {
  return (
    <>
      {enable && (
        <>
          {/* Announcement Banner */}
          <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="bg-blue-600 bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center">
              <p className="me-2 inline-block text-white">
                Preline UI Figma is live.
              </p>
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="../figma.html"
              >
                Learn more
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
          {/* End Announcement Banner */}
        </>
      )}
    </>
  );
}
