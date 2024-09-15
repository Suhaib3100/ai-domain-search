import { Button, Link } from "@nextui-org/react";
import { useState } from "react";

export default function Hero_16({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <section className="relative flex items-center justify-center">
          <div className="relative items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-32 md:px-12">
            <div>
              <div className="text-center">
                <p className="mt-8 text-3xl max-w-xl mx-auto font-extrabold tracking-tight text-black dark:text-gray-300 lg:text-6xl">
                  {data?.title || "Do your personalized emails take too long?"}
                </p>
                <p className="max-w-xl mx-auto mt-4 text-base lg:text-xl text-slate-500">
                  {data?.desc ||
                    "We help sales teams increase their outbound with scalable and high quality customized emails for every prospect."}
                </p>
              </div>
              <div className="flex items-center justify-center mt-4">
                <Button
                  size="lg"
                  color="primary"
                  className="mx-2"
                  radius="sm"
                  as={Link}
                  href={data?.leftButtonLink || "#"}
                  target="_blank"
                >
                  {data?.leftButtonText || "Left Button"}
                </Button>
                <Button
                  size="lg"
                  color="default"
                  className="mx-2"
                  radius="sm"
                  as={Link}
                  href={data?.rightButtonLink || "#"}
                  target="_blank"
                >
                  {data?.rightButtonText || "Right Button"}
                </Button>
              </div>
            </div>
            <div className="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
              <svg
                className="absolute -mt-24 blur-3xl"
                fill="none"
                viewBox="0 0 400 400"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10_20)">
                  <g filter="url(#filter0_f_10_20)">
                    <path
                      d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                      fill="#03FFE0"
                    />
                    <path
                      d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                      fill="#7C87F8"
                    />
                    <path
                      d="M320 400H400V78.75L106.2 134.75L320 400Z"
                      fill="#4C65E4"
                    />
                    <path
                      d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                      fill="#043AFF"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="720.666"
                    id="filter0_f_10_20"
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
                      result="effect1_foregroundBlur_10_20"
                      stdDeviation="80.1666"
                    />
                  </filter>
                </defs>
              </svg>

              <img
                alt=""
                className="relative object-cover w-full border rounded shadow-2xl lg:rounded-2xl"
                src={
                  data?.heroImage?.split("public")[1] ||
                  "https://brightlight.lexingtonthemes.com/assets/dashboard.svg"
                }
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
