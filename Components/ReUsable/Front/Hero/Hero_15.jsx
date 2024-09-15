export default function Hero_15({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <section className="relative flex items-center w-full bg-white dark:bg-gray-900 md:h-screen">
          <div className="relative items-center w-full px-5 py-24 mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
            <div className="relative flex-col items-start m-auto align-middle">
              <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                <div className="relative items-center gap-12 m-auto lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div>
                      <div>
                        <span className="inline-flex items-center text-3xl font-semibold tracking-tighter text-black dark:text-gray-400">
                          <span className="ml-2">
                            {data?.topTitle || "Windstatic"}
                          </span>
                        </span>
                      </div>
                      <div className="py-6" />
                      <span className="w-auto px-4 py-2 mt-10 rounded-full bg-teal-500/10">
                        <span className="text-xs text-teal-500">
                          {data?.topDesc ||
                            "Instantly transform your home - Coming soon"}
                        </span>
                      </span>
                      <p className="mt-8 text-4xl font-semibold tracking-tighter lg:text-6xl text-slate-900 dark:text-gray-400">
                        {data?.title || "Interior design. In your pocket"}
                      </p>
                      <p className="max-w-xl mt-4 text-lg tracking-tight lg:text-xl text-slate-500">
                        {data?.desc ||
                          "Forget trying to imagine what a style would look like in your home - see what could be, instantly."}
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-full pt-8 mx-auto lg:justify-start md:pt-6">
                      <a
                        target="_blank"
                        href={data?.leftButtonLink || "#"}
                        className="relative inline-flex justify-center flex-none w-full px-6 py-3 ml-1 overflow-hidden text-sm font-medium text-white transition-colors bg-teal-500 rounded-xl md:rounded-full active:before:bg-transparent active:bg-blue-600 active:text-white/80 before:absolute before:inset-0 before:transition-colors hover:before:bg-white/10 md:w-auto outline-2 outline-offset-2"
                        type="submit"
                      >
                        <span className="inline">
                          {data?.leftButtonText || "Join the waitlist"}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
                  <img
                    alt="hero"
                    className="object-cover object-center w-full h-full mx-auto lg:ml-auto rounded-2xl"
                    src={
                      data?.heroImage?.split("public")[1] ||
                      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
