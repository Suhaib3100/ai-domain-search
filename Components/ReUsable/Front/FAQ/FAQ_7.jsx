import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ_7({ data = { enable: false } }) {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      {data?.enable && (
        <>
          {/* FAQ */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
              <h2 className="text-2xl text-center font-bold md:text-4xl md:leading-tight dark:text-white">
                You might be wondering...
              </h2>
            </div>
            {/* End Title */}
            <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
              <Accordion variant="splitted">
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title={data?.q1 || "Can I use this for 21 questions?"}
                >
                  {data?.a1 || defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title={data?.q2 || "Can I use this for 21 questions?"}
                >
                  {data?.a2 || defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title={data?.q3 || "Can I use this for 21 questions?"}
                >
                  {data?.a3 || defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 4"
                  title={data?.q4 || "Can I use this for 21 questions?"}
                >
                  {data?.a4 || defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Accordion 5"
                  title={data?.q5 || "Can I use this for 21 questions?"}
                >
                  {data?.a5 || defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="6"
                  aria-label="Accordion 6"
                  title={data?.q6 || "Can I use this for 21 questions?"}
                >
                  {data?.a6 || defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* End FAQ */}
        </>
      )}
    </>
  );
}
