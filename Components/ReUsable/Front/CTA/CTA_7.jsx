export default function CTA_7({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <div className="card4-bg dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 py-20">
            <div className="container mx-auto">
              <div className="flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="mb-12 font-serif text-5xl font-bold">
                    {data?.title || "Supercharge Your Marketing"}
                  </h1>
                  <p className="mb-14 text-2xl font- tracking-wide">
                    {data?.desc ||
                      "Boost your brand awareness and reach new customers."}
                  </p>
                  <a
                    href={data?.buttonLink || "#"}
                    className="rounded-md bg-white px-6 py-4 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                  >
                    {data?.buttonText || "Get Started"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
