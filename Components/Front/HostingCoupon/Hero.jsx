import { useSelector } from "react-redux";

export default function Hero() {
  const pageData = useSelector((state) => state.pageData);
  return (
    <section className="bg-gray-900 shadow-lg">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          {pageData?.hero?.title || "We invest in the world’s potential"}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {pageData?.hero?.desc ||
            "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."}
        </p>
      </div>
    </section>
  );
}
