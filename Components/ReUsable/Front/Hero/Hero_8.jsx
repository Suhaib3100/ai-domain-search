import { Button, Link } from "@nextui-org/react";
import { useState } from "react";

export default function Hero_8({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-white dark:text-gray-900 transform -translate-x-1/2 lg:block z-0"
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src={
                data?.heroImage?.split("public")[1] ||
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              }
              alt=""
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-teal-600 uppercase rounded-full bg-teal-accent-400">
                {data?.topTitle || "Brand new"}
              </p>
              <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-400 sm:text-6xl sm:leading-none">
                {data?.title || "Everything you can imagine is real"}
              </h2>
              <p className="pr-5 mb-5 text-base text-gray-700 dark:text-gray-600 md:text-lg">
                {data?.desc ||
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo."}
              </p>
              <div className="flex items-center">
                <Button
                  as={Link}
                  href={data?.leftButtonLink || "#"}
                  target="_blank"
                  radius="sm"
                  className="mx-2"
                  variant="shadow"
                  color="primary"
                  size="lg"
                >
                  {data?.leftButtonText || "Get started"}
                </Button>
                <Button
                  as={Link}
                  href={data?.rightButtonLink || "#"}
                  target="_blank"
                  radius="sm"
                  className="mx-2"
                  variant="shadow"
                  color="default"
                  size="lg"
                >
                  {data?.rightButtonText || "Learn more"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
