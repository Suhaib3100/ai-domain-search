import { Image } from "@nextui-org/react";
import Content from "./Content";
import { useSelector } from "react-redux";

export default function Plugins({}) {
  const pageData = useSelector((state) => state.pageData);
  return (
    <>
      {pageData
        ? pageData?.plugins?.map((x, i) => (
            <section className="bg-white dark:bg-gray-900" key={i}>
              <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                  <h1 className="text- text-indigo-600 font-medium">
                    {x?.topTitle || " Build products for everyone"}
                  </h1>

                  <h2 className="text-transparent text-center text-4xl font-extrabold mx-auto md:text-6xl bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]  py-1">
                    {x?.title || "The largest figma UI kit"}
                  </h2>

                  <p className="max-w-2xl mx-auto">
                    {x?.desc ||
                      "Sed ut perspiciatis unde omnis iste natus voluptatem         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."}
                  </p>
                  <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                    <a
                      target="_blank"
                      href={x?.leftButtonLink || "#!"}
                      className="block py-2 px-4 text-white font-medium bg-gradient-to-r from-[#4F46E5] to-[#e86aeb] duration-150 hover:bg-gradient-to-r hover:from-[#2b24af] hover:to-[#c325d1] rounded-lg shadow-lg hover:shadow-none"
                    >
                      {x?.leftButtonText || "Download Theme"}
                    </a>
                    <a
                      target="_blank"
                      href={x?.rightButtonLink || "#!"}
                      className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
                    >
                      {x?.rightButtonText || "Get Hosting"}
                    </a>
                  </div>
                </div>
                <a
                  className="mt-14 flex justify-center"
                  href={x?.leftButtonLink || "#!"}
                  target="_blank"
                >
                  <Image
                    shadow="lg"
                    src={
                      x?.pluginImage?.split("public")[1] ||
                      "/images/custom/desktop_dte2ar.png"
                    }
                    className="w-full shadow-2xl rounded-lg"
                    alt="Wordpress plugin image"
                  />
                </a>
              </div>
              {/* Content Section */}
              <Content content={x?.content} />
            </section>
          ))
        : ""}
    </>
  );
}
