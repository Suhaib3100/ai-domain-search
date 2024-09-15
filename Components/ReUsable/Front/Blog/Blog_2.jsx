import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Blog_2({ enable = true }) {
  return (
    <>
      {enable && (
        <>
          {/* Card Blog */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Card */}
              <a
                className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover"
                    src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="absolute top-0 inset-x-0 z-10">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    {/* Avatar */}
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                          src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="ms-2.5 sm:ms-4">
                        <h4 className="font-semibold text-white">Gloria</h4>
                        <p className="text-xs text-white/[.8]">Jan 09, 2021</p>
                      </div>
                    </div>
                    {/* End Avatar */}
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 z-10">
                  <div className="flex flex-col h-full p-4 sm:p-6">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                      Facebook is creating a news section in Watch to feature
                      breaking news
                    </h3>
                    <p className="mt-2 text-white/[.8]">
                      Facebook launched the Watch platform in August
                    </p>
                  </div>
                </div>
              </a>
              {/* End Card */}
              {/* Card */}
              <a
                className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover"
                    src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="absolute top-0 inset-x-0 z-10">
                  <div className="p-4 flex flex-col h-full sm:p-6">
                    {/* Avatar */}
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-[2.875rem] w-[2.875rem] border-2 border-white rounded-full"
                          src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="ms-2.5 sm:ms-4">
                        <h4 className="font-semibold text-white">Gloria</h4>
                        <p className="text-xs text-white/[.8]">May 30, 2021</p>
                      </div>
                    </div>
                    {/* End Avatar */}
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 z-10">
                  <div className="flex flex-col h-full p-4 sm:p-6">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
                      What CFR (Conversations, Feedback, Recognition) really is
                      about
                    </h3>
                    <p className="mt-2 text-white/[.8]">
                      For a lot of people these days, Measure What Matters.
                    </p>
                  </div>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Card Blog */}
        </>
      )}
    </>
  );
}
