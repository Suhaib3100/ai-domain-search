import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitFunction } from "./submitFunction";

export default function HeroForm_7({
  data = { enable: false },
  homePage,
  aiGenerator,
  whois,
  dnsChecker,
  hostingLocation,
  reverseIP,
  whoisHosting,
  placeholder = "Type any words",
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const showSedoDomain = useSelector((state) => state?.showSedoDomain);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunction({
      dispatch,
      homePage,
      aiGenerator,
      whois,
      dnsChecker,
      hostingLocation,
      reverseIP,
      whoisHosting,
      value,
      showSedoDomain,
    });
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  return (
    <>
      {data?.enable && (
        <div className="relative">
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[50px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          <div className="flex flex-1 w-full flex-col items-cente justify-cente text-center px-4 lg:py-20 2xl:py-52 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 h-screen">
            <p
              // href={data?.topButtonLink || "#"}
              // target="_blank"
              className="relative mx-auto border border-white-700 dark:border-gray-300 rounded-lg py-2 px-4 text-white-400 dark:text-gray-300 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-400"
            >
              {data?.topButtonText || "Forget about spending hundreds $"}
            </p>
            <h1 className="relative mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white-300 dark:text-gray-300 sm:text-7xl">
              {data?.title || "Revolutionize Your Insurance Operations"}
              {/* <span className="relative whitespace-nowrap text-white-600 dark:text-gray-300">
                
              </span> */}
              <span className="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">{data?.svgText || "with AI"}</span>
              </span>
            </h1>
            <div className="relativ w-full mx-auto text-center px-2 md:px-40 2xl:px-52">
              <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                <form
                  onSubmit={handleSubmit}
                  className=" w-full bg-slate-300 dark:bg-white/20  p-1.5 rounded-2xl"
                >
                  <div className="w-full lg:flex lg:items-center lg:justify-between ">
                    <div className="shrink w-full">
                      <input
                        aria-label="Email address"
                        // autoComplete="email"
                        className="relative block w-full p-3 text-gray-600 dark:text-gray-300 bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-600 dark:placeholder:text-slate-300 sm:text-lg"
                        placeholder={placeholder}
                        required
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>
                    <button
                      className="w-full lg:w-auto 0 active:bg-slate-600 active:text-white/80 before:transition-colors bg-white flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-indigo-500"
                      type="submit"
                    >
                      <span>{data?.buttonText || "Search"}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
