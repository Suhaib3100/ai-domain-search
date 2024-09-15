import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitFunction } from "./submitFunction";

export default function HeroForm_2({
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
        <section className="flex bg-gradient-to-t from-[#141521]  items-cente relative to-[#141521] h-screen ">
          <svg
            className="absolute"
            fill="none"
            height="100%"
            viewBox="0 0 400 400"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_17_17)">
              <g filter="url(#filter0_f_17_17)">
                <path d="M128.6 0H0V322.2L51.5 67.5L128.6 0Z" fill="#EB03FF" />
                <path
                  d="M0 322.2V400H240H320L51.5 67.5L0 322.2Z"
                  fill="#FF0F9F"
                />
                <path
                  d="M320 400H400V78.75L51.5 67.5L320 400Z"
                  fill="#3A0D84"
                />
                <path d="M400 0H128.6L51.5 67.5L400 78.75V0Z" fill="#FAD8F4" />
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="720.666"
                id="filter0_f_17_17"
                width="720.666"
                x="-160.333"
                y="-160.333"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_17_17"
                  stdDeviation="80.1666"
                />
              </filter>
            </defs>
          </svg>
          <div className="relative items-cente lg:py-40 2xl:py-60  px-2 mx-auto lg:inline-flex max-w-7xl rounded-3xl">
            <div className="max-w-6xl mx-auto text-center ">
              <div>
                {/* <span className="inline-flex items-center">
                  <span className="px-6 py-2 text-base font-bold text-white uppercase rounded-lg">
                    Windstatic
                  </span>
                </span> */}
                <p className="mx-auto text-4xl font-extrabold tracking-tight text-white md:text-6xl 2xl:text-8xl">
                  {data?.title || "Obsessed with optimizing their productivity"}
                </p>
                {/* <p className="max-w-3xl mx-auto mt-4 lg:text-lg text-slate-200">
                  NoRush is a time tracker with analytics, leaderboards,
                  calendars and more, to help you do more in less time.
                </p> */}
              </div>
              <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                <form
                  className="w-full bg-white/20  p-1.5 sm:p-3 rounded-2xl hover:shadow-lg"
                  onSubmit={handleSubmit}
                >
                  <div className="w-full lg:flex lg:items-center lg:justify-between ">
                    <div className="shrink w-full">
                      <input
                        aria-label="Email address"
                        // autoComplete="email"
                        className="block w-full p-3 text-gray-300 bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-300 sm:text-"
                        placeholder={placeholder}
                        type="text"
                        required
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>
                    <button
                      className="w-full lg:w-auto 0 active:bg-slate-600 active:text-white/80 before:transition-colors bg-white flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 sm:py-3 relative rounded-xl text-indigo-500"
                      type="submit"
                    >
                      <span>{data?.buttonText || "Search"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-3">
                <span className="text-white">
                  {data?.bottomDesc ||
                    "Get to known when we will launch. We won't share your email."}
                </span>
              </div>
              {/* <div className="flex-col mx-auto mt-12 sm:flex sm:max-w-lg">
            <p className="text-base text-white">by @twitter_handle</p>
          </div> */}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
