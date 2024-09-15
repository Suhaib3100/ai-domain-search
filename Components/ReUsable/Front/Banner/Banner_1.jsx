export default function Banner_1({ data = { enable: true } }) {
  return (
    <>
      {data?.enable && (
        <>
          {/* Announcement Banner */}
          <div className="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
            <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
              {/* Grid */}
              <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2 ">
                <div className="text-center md:text-start">
                  <p className="text-xs text-white/[.8] uppercase tracking-wider">
                    Preview of Preline
                  </p>
                  <p className="mt-1 text-white font-medium">
                    Sign up to get unlimited updates. No credit card required.
                  </p>
                </div>
                {/* End Col */}
                <div className="mt-3 text-center md:text-start md:flex md:justify-end md:items-center">
                  <a
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Sign up free
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
