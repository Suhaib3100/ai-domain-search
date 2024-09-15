export default function Stats_4({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <div className="bg-gray-50 dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-400 sm:text-4xl 2xl:text-6xl text-center">
                {data?.title || "The Blockchain-only hiring platform"}
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                {data?.desc ||
                  "Organic, genuine conversations with higher response rates than    LinkedIn or cold email."}
              </p>
            </div>
          </div>
          <div className="mt-10 pb-1">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 " />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg card3-bg dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 shadow-xl sm:grid sm:grid-cols-3 dark:border-gray-700">
                    <div className="flex flex-col border-b border-gray-200 dark:border-gray-500 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white dark:text-gray-400">
                        {data?.stat1Desc || "Blockchain developers"}
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-white dark:text-gray-400">
                        {data?.stat1Number || "500+"}
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-200 dark:border-gray-500 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white dark:text-gray-400">
                        {data?.stat2Desc || "Response rate"}
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-white dark:text-gray-400">
                        {data?.stat2Number || "58%"}
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-200 dark:border-gray-500 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white dark:text-gray-400">
                        {data?.stat3Desc || "New devs a month"}
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-white dark:text-gray-400">
                        {data?.stat3Number || "30+"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
