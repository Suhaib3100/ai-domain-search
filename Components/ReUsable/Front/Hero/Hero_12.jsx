export default function Hero_12({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <section className="items-center justify-center bg-gradient-to-r from-indigo-300 to-purple-400 dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex h-screen">
          <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div>
                <span className="w-auto px-6 py-3 rounded-full bg-violet-400">
                  <span className="tewxt-sm font-medium text-gray-100">
                    {data?.topButtonText || "Acquire your first customer"}
                  </span>
                </span>
                <p className="max-w-3xl mx-auto mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl">
                  {data?.title ||
                    "Create landing pages your audience will love"}
                </p>
                <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
                  {data?.desc ||
                    "Effortlessly create, pitch, and validate your early-stage business with our no-code landing page builder."}
                </p>
              </div>
              <div className="flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row">
                <a
                  target="_blank"
                  href={data?.buttonLink || "#"}
                  className="text-white focus:outline-none inline-flex items-center justify-center rounded-xl bg-violet-500 hover:bg-violet-600 duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 text-center w-full"
                >
                  {data?.buttonText || "Sign up for free"}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
