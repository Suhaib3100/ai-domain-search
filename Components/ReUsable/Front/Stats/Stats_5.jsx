export default function Stats_5({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <div className="card3-bg dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-700 py-24 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl text-center">
                  {data?.title || "Trusted by creators worldwide"}
                </h2>
                <p className="text-lg leading-8 text-gray-300">
                  {data?.desc ||
                    "We can help you grow your audience and your business, no matter the size."}
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 ">
                <div className="flex flex-col bg-white/30  dark:bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-100">
                    {data?.stat1Desc || "words written in 2023"}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {data?.stat1Number || "12 million"}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/30  dark:bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-100">
                    {data?.stat2Desc || "episodes uploaded"}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {data?.stat2Number || "10k"}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/30  dark:bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-100">
                    {data?.stat3Desc || "hours of media"}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {data?.stat3Number || "6.6k"}
                  </dd>
                </div>
                <div className="flex flex-col bg-white/30  dark:bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-100">
                    {data?.stat4Desc || "answers"}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {data?.stat4Number || "2.1k"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
