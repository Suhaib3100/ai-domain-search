export default function Banner_3({ enable = true }) {
  return (
    <>
      {enable && (
        <>
          {/* Announcement Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-400">
            <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
              {/* Grid */}
              <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
                <div className="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
                  <p className="me-5 inline-block text-sm font-semibold text-white">
                    Ready to get started?
                  </p>
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-white text-white hover:border-white/70 hover:text-white/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Sign up
                  </a>
                </div>
                {/* End Col */}
                <div className="flex items-center">
                  <a
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
                    href="#"
                  >
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
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Watch demo
                  </a>
                  <span className="inline-block border-e border-white/[.3] w-px h-5 mx-2" />
                  <a
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
                    href="#"
                  >
                    Explore what's new
                  </a>
                </div>
                {/* End Col */}
              </div>
              {/* End Grid */}
            </div>
          </div>
          {/* End Announcement Banner */}
        </>
      )}
    </>
  );
}
