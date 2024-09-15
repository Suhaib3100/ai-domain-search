import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function CTA2({ data }) {
  return (
    <section
      className="py-20 shadow"
      style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="space-y-3 mx-auto">
          <h3 className="text-slate-600 text-center dark:text-gray-200 font-semibold">
            {data?.cta?.topTitle || "Professional services"}
          </h3>
          <p className="text-gray-800 dark:text-gray-300 text-center text-3xl font-semibold sm:text-5xl">
            {data?.cta?.mainTitle || "Build the future with us"}
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-center mx-auto">
            {data?.cta?.desc ||
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident."}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Button
            as={Link}
            size="lg"
            color="warning"
            target="_blank"
            href={data?.cta?.buttonLink || "#!"}
            className="px-20 py-7 hover:bg-orange-500 hover:text-gray-100"
          >
            {data?.cta?.buttonText || "Get started"}
          </Button>
        </div>
      </div>
    </section>
  );
}
