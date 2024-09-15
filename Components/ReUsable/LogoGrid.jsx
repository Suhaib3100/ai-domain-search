export default function LogoGrid({ data }) {
  return (
    <div className="py-10 shadow-sm dark:bg-slate-950">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-xl text-gray-600 text-center">
          {data?.logoGridTitle?.title || ""}
        </h3>
        <div className="mt-6 sm:mt-0">
          <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x ">
            {data?.addHostingLogo?.map((x, i) => (
              <div className="flex-non w-60 " key={i}>
                <img
                  src={x?.hostingLogo.split("public")[1] || "/hostig"}
                  className="rounded-md"
                  alt="companies logos"
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
