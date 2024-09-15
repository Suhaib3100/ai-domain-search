import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function Post({ post, allPost }) {
  return (
    <>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-2">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-8">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/blog"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog
                </Link>
                <h2 className="text-3xl font-bold lg:text-5xl dark:text-white">
                  {post?.postHeadline}
                </h2>
                <div className="flex items-center gap-x-5">
                  <p
                    className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    {post?.category || "Blog"}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    {post?.date || "July-23"}
                  </p>
                </div>

                <div shadow="lg" className="max-w-3xl px-4  mx-auto ">
                  <div className="max-w-3xl">
                    {/* Content */}
                    {/* <div>
                    <h1 className="text-start text-5xl mb-10 font-semibold">
                      {post?.title}
                    </h1>
                  </div> */}
                    <div
                      className="space-y-5 md:space-y-8 text-center blog text-xl"
                      dangerouslySetInnerHTML={{
                        __html: post?.content,
                      }}
                    ></div>
                    {/* End Content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Content */}
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800 flex flex-col items-center text-center ">
            {/*  */}
            <div className="sticky top-0 start-0 py-8 lg:ps-">
              <div className="space-y-4">
                {allPost &&
                  allPost
                    ?.filter((a) => a?.published === "true")
                    ?.slice(0, 20)
                    ?.map((x, i) => (
                      <a
                        key={i}
                        className="group flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-x-6"
                        href={`/blog/${x?.permalink}`}
                      >
                        <Image
                          className="max-w-xs top-0 start-0 object-cover rounded-lg"
                          src={x?.postImage?.split("public")[1]}
                          alt="Image Description"
                        />
                        <div className="grow max-w-xs">
                          <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                            {x?.title}
                          </span>
                        </div>
                      </a>
                    ))}
              </div>
            </div>
          </div>
          {/* End Sidebar */}
        </div>
      </div>
    </>
  );
}
