import { Card, CardBody } from "@nextui-org/react";

export default function Stats_2({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <div className=" py-6 sm:py-8 lg:py-20 ">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            {/* text - start */}
            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gray-400 md:mb-6 lg:text-5xl">
                {data?.title || "Our Team by the numbers"}
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                {data?.desc ||
                  "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."}
              </p>
            </div>
            {/* text - end */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
              {/* stat - start */}
              <Card
                isPressable
                className="anim-bg3 rounded-3xl"
                shadow="lg"
                isHoverable
                // isBlurred
              >
                <CardBody className="flex flex-col items-center justify-center rounded-lg  p-4 lg:p-8">
                  <div className="text-xl font-bold text-blue-500 sm:text-2xl md:text-3xl">
                    {data?.stat1Number || "200"}
                  </div>
                  <div className="text-sm font-semibold sm:text-base text-gray-700 dark:text-gray-400">
                    {data?.stat1Desc || "People"}
                  </div>
                </CardBody>
              </Card>
              {/* stat - end */}
              {/* stat - start */}
              <Card
                isPressable
                className="anim-bg3 rounded-3xl"
                shadow="lg"
                isHoverable
              >
                <CardBody className="flex flex-col items-center justify-center rounded-lg  p-4 md:p-8">
                  <div className="text-xl font-bold text-blue-500 sm:text-2xl md:text-3xl">
                    {data?.stat2Number || "200"}
                  </div>
                  <div className="text-sm font-semibold sm:text-base text-gray-700 dark:text-gray-400">
                    {data?.stat2Desc || "People"}
                  </div>
                </CardBody>
                {/* stat - start */}
              </Card>
              <Card
                isPressable
                className="anim-bg3 rounded-3xl"
                shadow="lg"
                isHoverable
              >
                <CardBody className="flex flex-col items-center justify-center rounded-lg  p-4 md:p-8">
                  <div className="text-xl font-bold text-blue-500 sm:text-2xl md:text-3xl">
                    {data?.stat3Number || "200"}
                  </div>
                  <div className="text-sm font-semibold sm:text-base text-gray-700 dark:text-gray-400">
                    {data?.stat3Desc || "People"}
                  </div>
                </CardBody>
              </Card>
              {/* stat - end */}
              {/* stat - start */}
              <Card
                isPressable
                className="anim-bg3 rounded-3xl"
                shadow="lg"
                isHoverable
              >
                <CardBody className="flex flex-col items-center justify-center rounded-lg  p-4 md:p-8">
                  <div className="text-xl font-bold text-blue-500 sm:text-2xl md:text-3xl">
                    {data?.stat4Number || "200"}
                  </div>
                  <div className="text-sm font-semibold sm:text-base text-gray-700 dark:text-gray-400">
                    {data?.stat4Desc || "People"}
                  </div>
                </CardBody>
                {/* stat - start */}
              </Card>
              {/* stat - end */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
