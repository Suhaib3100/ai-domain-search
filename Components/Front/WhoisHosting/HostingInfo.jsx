import { Card, CardBody, Progress } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function HostingInfo() {
  const whoisHostingInputValue = useSelector(
    (state) => state.whoisHostingInputValue
  );
  const whoisHostingInfo = useSelector((state) => state.whoisHostingInfo);
  const loading = useSelector((state) => state.loading);
  const whoisHostingPageData = useSelector(
    (state) => state.whoisHostingPageData
  );
  return (
    <section id="check">
      {loading && (
        <div className="max-w-screen-xl mx-auto px-4">
          <Progress size="md" isIndeterminate aria-label="Loading..." />
        </div>
      )}
      {whoisHostingInfo?.status ? (
        <Card
          isHoverable
          className="mx-3 sm:mx-10 dark:border border-gray-800 hover:scale-105"
        >
          <CardBody>
            <div className="space-y-5 max-w-4xl mx-auto text-center z-50">
              <h1 className="text-sm text-indigo-600 font-medium text-center">
                {whoisHostingPageData?.checkHosting?.topTitle ||
                  "Build products for everyone"}
              </h1>
              <h2 className="text-4xl text-gray-700 dark:text-gray-400 font-extrabold mx-auto md:text-5xl text-center">
                {`This website ${whoisHostingInputValue} hosted`} with{" "}
              </h2>
              <h2 className="text-4xl font-extrabold mx-auto md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] pb-3 text-center">
                {whoisHostingInfo?.data?.org}
              </h2>
              <p className="max-w-2xl mx-auto">
                {whoisHostingPageData?.checkHosting?.middleDescription ||
                  "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."}
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <a
                  target="_blank"
                  href={
                    whoisHostingPageData?.checkHosting?.leftButtonLink || "#"
                  }
                  className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                >
                  {whoisHostingPageData?.checkHosting?.leftButtonText ||
                    "Get a Hosting"}
                </a>
                <a
                  target="_blank"
                  href={
                    whoisHostingPageData?.checkHosting?.rightButtonLink || "#"
                  }
                  className="block py-2 px-4 text-gray-700 dark:text-gray-400 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border dark:border-gray-700 rounded-lg"
                >
                  {whoisHostingPageData?.checkHosting?.rightButtonText ||
                    "Get a Free Domain"}
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
    </section>
  );
}
