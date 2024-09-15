import { useSelector } from "react-redux";
export default function Blog({ data = { enable: false } }) {
  return (
    <>
      {/* Blog Article */}

      <div className="max-w-5xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl ">
          {/* Content */}

          <div
            className="space-y-5 md:space-y-8 blog text-xl"
            dangerouslySetInnerHTML={{
              __html: data,
            }}
          ></div>
          {/* End Content */}
        </div>
      </div>
    </>
  );
}
