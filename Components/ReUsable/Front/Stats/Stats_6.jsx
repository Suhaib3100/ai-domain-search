import { Card } from "@nextui-org/react";

export default function Stats_6({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          {/* Card Section */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Card */}
              <Card
                isPressable
                className="flex flex-col justify-center items-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-md hover:shadow-lg cursor-pointer rounded-xl dark:bg-slate-900 dark:border-gray-800"
              >
                <div className="inline-flex justify-center items-center">
                  <span className="w-2 h-2 inline-block bg-gray-500 rounded-full me-2" />
                  <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                    {data?.stat1Title || "Projects"}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {data?.stat1Number || "150"}
                  </h3>
                </div>
                <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                  <dt className="pe-3">
                    <span className="text-green-600">
                      <svg
                        className="inline-block w-4 h-4 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                        />
                      </svg>
                      <span className="inline-block text-sm">
                        {data?.stat1LeftPercent || "1.7%"}
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      {data?.stat1LeftDesc || "change"}
                    </span>
                  </dt>
                  <dd className="text-start ps-3">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {data?.stat1RightNumber || "5"}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {data?.stat1RightDesc || "last week"}
                    </span>
                  </dd>
                </dl>
              </Card>
              {/* End Card */}
              {/* Card */}
              <Card
                isPressable
                className="flex flex-col justify-center items-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-md hover:shadow-lg cursor-pointer rounded-xl dark:bg-slate-900 dark:border-gray-800"
              >
                <div className="inline-flex justify-center items-center">
                  <span className="w-2 h-2 inline-block bg-green-500 rounded-full me-2" />
                  <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                    {data?.stat2Title || "Successful conversions"}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {data?.stat2Number || "25"}
                  </h3>
                </div>
                <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                  <dt className="pe-3">
                    <span className="text-green-600">
                      <svg
                        className="inline-block w-4 h-4 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                        />
                      </svg>
                      <span className="inline-block text-sm">
                        {data?.stat2LeftPercent || "5.6%"}
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      {data?.stat2LeftDesc || "change"}
                    </span>
                  </dt>
                  <dd className="text-start ps-3">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {data?.stat2RightNumber || "7"}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {data?.stat1RightDesc || "last week"}
                    </span>
                  </dd>
                </dl>
              </Card>
              {/* End Card */}
              {/* Card */}
              <Card
                isPressable
                className="flex flex-col justify-center items-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-md hover:shadow-lg cursor-pointer rounded-xl dark:bg-slate-900 dark:border-gray-800"
              >
                <div className="inline-flex justify-center items-center">
                  <span className="w-2 h-2 inline-block bg-red-500 rounded-full me-2" />
                  <span className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                    {data?.stat3Title || "Failed conversions"}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                    {data?.stat3Number || "4"}
                  </h3>
                </div>
                <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
                  <dt className="pe-3">
                    <span className="text-red-600">
                      <svg
                        className="inline-block w-4 h-4 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                      </svg>
                      <span className="inline-block text-sm">
                        {data?.stat3LeftPercent || "5.6%"}
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      {data?.stat3LeftDesc || "change"}
                    </span>
                  </dt>
                  <dd className="text-start ps-3">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {data?.stat3RightNumber || "7"}
                    </span>
                    <span className="block text-sm text-gray-500">
                      {data?.stat3RightDesc || "last week"}
                    </span>
                  </dd>
                </dl>
              </Card>
              {/* End Card */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Card Section */}
        </>
      )}
    </>
  );
}
