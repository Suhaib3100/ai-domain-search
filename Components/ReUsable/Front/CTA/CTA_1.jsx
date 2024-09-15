export default function CTA_1({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <section className="relative overflow-hidden py-20 px-4 dark:bg-gray-900 md:px-8 ">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
            <div className="max-w-xl mx-auto text-center relative">
              <div className="py-4">
                <h3 className="text-3xl dark:text-gray-200 font-semibold md:text-5xl text-center">
                  {data?.title || "Get Unlimited Access To All Templates"}
                </h3>
                <p className="dark:text-gray-300 leading-relaxed mt-3">
                  {data?.desc ||
                    "Nam erat risus, sodales sit amet lobortis ut, finibus eget      metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia."}
                </p>
              </div>
              <div className="mt-5 items-center justify-center gap-3 sm:flex">
                <a
                  target="_blank"
                  href={data?.leftButtonLink || "javascript:void()"}
                  className="block w-full mt-2 py-2.5 px-8 text-gray-700 hover:text-gray-200 bg-gray-400 rounded-md duration-150 hover:bg-gray-600 sm:w-auto"
                >
                  {data?.leftButtonText || "Try It Out"}
                </a>
                <a
                  target="_blank"
                  href={data?.rightButtonLink || "javascript:void()"}
                  className="block w-full mt-2 py-2.5 px-8 text-gray-100 bg-orange-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
                >
                  {data?.rightButtonText || "Get Started"}
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
