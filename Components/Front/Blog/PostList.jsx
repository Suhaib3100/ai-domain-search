import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Ads from "../Ads";

export default function PostList({ posts }) {
  return (
    <>
      <div className="mx-auto  mb-10 lg:mb-14 card2-bg flex flex-col justify-center items-center py-20">
        <h2 className="text-2xl font-bold md:text-5xl md:leading-tight text-gray-200 dark:text-white">
          The Blog & How To Guide
        </h2>
        {/* <p className="mt-1 text-gray-200 ">
          {pageData?.pageTitle?.desc ||
            "Dive into our posts to discover the best hosting solutions tailored to your needs and unlock the full potential of your web endeavors."}
        </p> */}
      </div>
      {/* Card Blog */}
      <Ads />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}

        {/* End Title */}
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {posts
            ?.filter((a) => a?.published === "true")
            ?.map((x, i) => (
              <Link
                key={i}
                className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-white/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={`/blog/${x?.permalink}`}
              >
                <div className="aspect-w-16 aspect-h-11">
                  {x?.postImage ? (
                    <img
                      className="w-full object-cover rounded-xl"
                      src={x?.postImage?.split("public")[1]}
                      alt={x?.postHeadline}
                    />
                  ) : (
                    <div className="text-center">
                      <Chip
                        color="secondary"
                        radius="sm"
                        variant="flat"
                        className="py-2 px-2 text-2xl"
                      >
                        {x?.postHeadline?.split(" ")?.slice(0, 2).join(" ")}
                      </Chip>
                    </div>
                  )}
                </div>
                <div className="my-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                    {x?.postHeadline}
                  </h3>
                  <div
                    className="space-y-5 md:space-y-8"
                    dangerouslySetInnerHTML={{
                      __html: x?.content?.slice(0, 100),
                    }}
                  ></div>
                </div>
                <div className="mt-auto">
                  <Button className="w-full ">Read More</Button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
