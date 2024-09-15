import { Image, Link } from "@nextui-org/react";

import NextLink from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Card_2() {
  const allReviewsPageData = useSelector((state) => state.allReviewsPageData);
  useEffect(() => {
    // Cards spotlight
    class Spotlight {
      constructor(containerElement) {
        this.container = containerElement;
        this.cards = Array.from(this.container.children);
        this.mouse = {
          x: 0,
          y: 0,
        };
        this.containerSize = {
          w: 0,
          h: 0,
        };
        this.initContainer = this.initContainer.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.init();
      }

      initContainer() {
        this.containerSize.w = this.container.offsetWidth;
        this.containerSize.h = this.container.offsetHeight;
      }

      onMouseMove(event) {
        const { clientX, clientY } = event;
        const rect = this.container.getBoundingClientRect();
        const { w, h } = this.containerSize;
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const inside = x < w && x > 0 && y < h && y > 0;
        if (inside) {
          this.mouse.x = x;
          this.mouse.y = y;
          this.cards.forEach((card) => {
            const cardX =
              -(card.getBoundingClientRect().left - rect.left) + this.mouse.x;
            const cardY =
              -(card.getBoundingClientRect().top - rect.top) + this.mouse.y;
            card.style.setProperty("--mouse-x", `${cardX}px`);
            card.style.setProperty("--mouse-y", `${cardY}px`);
          });
        }
      }

      init() {
        this.initContainer();
        window.addEventListener("resize", this.initContainer);
        window.addEventListener("mousemove", this.onMouseMove);
      }
    }

    // Init Spotlight
    const spotlights = document.querySelectorAll("[data-spotlight]");
    spotlights.forEach((spotlight) => {
      new Spotlight(spotlight);
    });
  }, []);

  return (
    <div className="relative font-inter antialiased" id="all-reviews">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="px-8 sm:px-28 pt-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">
            {allReviewsPageData?.hostingListTitle?.title ||
              "We invest in the world’s potential"}
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl">
            {allReviewsPageData?.hostingListTitle?.desc ||
              "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."}
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          {/* Cards container */}
          <div
            className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group"
            data-spotlight=""
          >
            {/* Card 1 */}
            {allReviewsPageData?.addHosting?.map((x, i) => (
              <div
                key={i}
                className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden"
              >
                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                  </div>
                  <div className="flex flex-col h-full items-center text-center">
                    {/* Image */}
                    <div className="relative inline-flex">
                      <div
                        className="w-[40%] min-h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                        aria-hidden="true"
                      />
                      <div className="min-h-[200px] flex flex-col justify-center items-center">
                        <Image
                          isZoomed
                          className="inline-flex rounded-xl w-56 h-40 object-fill shadow-slate-400"
                          src={x?.hostingImage.split("public")[1] || "/"}
                          // width={200}
                          // height={100}
                          alt="Hosting Image"
                        />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="grow mb-5">
                      <h2 className="text-xl text-slate-200 font-bold mb-1">
                        {x?.hostingName}
                      </h2>
                      <p className="text-sm  text-slate-500">
                        {x?.hostingDesc}
                      </p>
                    </div>
                    <div className="w-full flex justify-around">
                      <NextLink
                        className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                        href={`/hosting-reviews/${x?.reviewLink}` || "#!"}
                      >
                        <svg
                          className="fill-slate-500 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={14}
                        >
                          <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                        </svg>
                        <span>See Review</span>
                      </NextLink>
                      <Link
                        showAnchorIcon
                        target="_blank"
                        className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                        href={x?.affiliateLink || "#!"}
                      >
                        {/* <svg
                          className="fill-slate-500 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={14}
                        >
                          <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                        </svg> */}
                        <span>Get Hosting</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Card 2 */}
          </div>
          {/* End: Cards container */}
        </div>
      </main>
    </div>
  );
}
