import { Card } from "@nextui-org/react";

export default function Stats_1({ data = { enable: false } }) {
  const stats = [
    {
      data: data?.stat1Number || "35K",
      title: data?.stat1Desc || "Customers",
    },
    {
      data: data?.stat2Number || "40+",
      title: data?.stat2Desc || "Countries",
    },
    {
      data: data?.stat3Number || "30M+",
      title: data?.stat3Desc || "Total revenue",
    },
  ];
  return (
    <>
      {data?.enable && (
        <section className="py-28 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="dark:text-white text-3xl font-semibold sm:text-4xl 2xl:text-5xl text-center">
                {data?.title || "Our customers are always happy"}
              </h3>
              <p className="mt-3 dark:text-gray-300 text-center">
                {data?.desc ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi   venenatis sollicitudin quam ut tincidunt. venenatis sollicitudin quam ut tincidunt."}
              </p>
            </div>
            <div className="mt-12">
              <div className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                {stats?.map((item, idx) => (
                  <Card
                    isPressable
                    key={idx}
                    className="w-full h-[150px] text-center bg-gray-700 px-12 py-4 rounded-2xl  list-none flex flex-col justify-center items-center"
                  >
                    <h4 className="text-4xl text-white font-semibold text-center">
                      {item?.data}
                    </h4>
                    <p className="mt-3 text-gray-400 font-medium text-center">
                      {item?.title}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
