import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Blog_4({ enable = true }) {
  return (
    <>
      {enable && (
        <div className="px-2 py-20 w-full flex justify-center">
          <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
            <div className="lg:w-1/2">
              <div
                className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97")',
                }}
              ></div>
            </div>
            <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
              <h2 className="text-3xl text-gray-800 font-bold">
                Promoting Sustainable Lifestyle Choices
                <span className="text-indigo-600">Choices</span>
              </h2>
              <p className="mt-4 text-gray-600">
                The "Eco-Tracker" project aims to create a web-based platform
                that encourages individuals to adopt sustainable lifestyle
                choices and actively contribute to environmental conservation.
                The platform will provide users with personalized tracking,
                education, and engagement features to empower them to make
                eco-friendly decisions in various aspects of their lives.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
