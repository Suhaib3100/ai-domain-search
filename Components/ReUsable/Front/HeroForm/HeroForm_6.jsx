import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitFunction } from "./submitFunction";

export default function HeroForm_6({
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
        <div className="dark:bg-gradient-to-r dark:from-slate-900dark: to-slate-700 dark:bg-gray-900 h-screen relative">
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[50px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          <section className="relative">
            <div className="relative max-w-screen-xl mx-auto px-4 lg:py-28 2xl:py-52 md:px-8">
              <div className="space-y-5 max-w-4xl mx-auto text-center relative">
                <h2 className="text-4xl dark:text-white font-extrabold mx-auto md:text-6xl text-center relative">
                  {data?.title ||
                    "Build and scale up your startup with the best tools"}
                </h2>
                <p className="max-w-2xl mx-auto text-gray-400">
                  {data?.desc ||
                    "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."}
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="justify-between items-center gap-x-3 sm:flex relative"
                >
                  <input
                    required
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    className="w-full  block border border-gray-300 dark:border-gray-800 px-3 py-5 text-gray-600 dark:text-gray-400 text-lg focus:bg-gray-100 focus:shadow-md dark:bg-gray-700 dark:focus:bg-gray-900 dark:focus:border-gray-700 duration-150 outline-none rounded-lg shadow relative"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-x-2 py-6 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-72 relative"
                  >
                    {data?.buttonText || "Search"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
                <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                  <div className="flex">
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-orange-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                  </div>
                  <p>{data?.ratingText || "5.0 by over 200 users"}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
