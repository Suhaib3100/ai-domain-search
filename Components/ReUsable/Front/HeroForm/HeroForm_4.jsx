import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitFunction } from "./submitFunction";

export default function HeroForm_4({
  data = { enable: false },
  homePage,
  aiGenerator,
  whois,
  dnsChecker,
  hostingLocation,
  reverseIP,
  whoisHosting,
  placeholder = "Type any words",
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const showSedoDomain = useSelector((state) => state?.showSedoDomain);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunction({
      dispatch,
      homePage,
      aiGenerator,
      whois,
      dnsChecker,
      hostingLocation,
      reverseIP,
      whoisHosting,
      value,
      showSedoDomain,
    });
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  useEffect(() => {
    // Particle animation
    class ParticleAnimation {
      constructor(el, { quantity = 30, staticity = 50, ease = 50 } = {}) {
        this.canvas = el;
        if (!this.canvas) return;
        this.canvasContainer = this.canvas.parentElement;
        this.context = this.canvas.getContext("2d");
        this.dpr = window.devicePixelRatio || 1;
        this.settings = {
          quantity: quantity,
          staticity: staticity,
          ease: ease,
        };
        this.circles = [];
        this.mouse = {
          x: 0,
          y: 0,
        };
        this.canvasSize = {
          w: 0,
          h: 0,
        };
        this.onMouseMove = this.onMouseMove.bind(this);
        this.initCanvas = this.initCanvas.bind(this);
        this.resizeCanvas = this.resizeCanvas.bind(this);
        this.drawCircle = this.drawCircle.bind(this);
        this.drawParticles = this.drawParticles.bind(this);
        this.remapValue = this.remapValue.bind(this);
        this.animate = this.animate.bind(this);
        this.init();
      }

      init() {
        this.initCanvas();
        this.animate();
        window.addEventListener("resize", this.initCanvas);
        window.addEventListener("mousemove", this.onMouseMove);
      }

      initCanvas() {
        this.resizeCanvas();
        this.drawParticles();
      }

      onMouseMove(event) {
        const { clientX, clientY } = event;
        const rect = this.canvas.getBoundingClientRect();
        const { w, h } = this.canvasSize;
        const x = clientX - rect.left - w / 2;
        const y = clientY - rect.top - h / 2;
        const inside = x < w / 2 && x > -(w / 2) && y < h / 2 && y > -(h / 2);
        if (inside) {
          this.mouse.x = x;
          this.mouse.y = y;
        }
      }

      resizeCanvas() {
        this.circles.length = 0;
        this.canvasSize.w = this.canvasContainer.offsetWidth;
        this.canvasSize.h = this.canvasContainer.offsetHeight;
        this.canvas.width = this.canvasSize.w * this.dpr;
        this.canvas.height = this.canvasSize.h * this.dpr;
        this.canvas.style.width = this.canvasSize.w + "px";
        this.canvas.style.height = this.canvasSize.h + "px";
        this.context.scale(this.dpr, this.dpr);
      }

      circleParams() {
        const x = Math.floor(Math.random() * this.canvasSize.w);
        const y = Math.floor(Math.random() * this.canvasSize.h);
        const translateX = 0;
        const translateY = 0;
        const size = Math.floor(Math.random() * 2) + 1;
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        const dx = (Math.random() - 0.5) * 0.2;
        const dy = (Math.random() - 0.5) * 0.2;
        const magnetism = 0.1 + Math.random() * 4;
        return {
          x,
          y,
          translateX,
          translateY,
          size,
          alpha,
          targetAlpha,
          dx,
          dy,
          magnetism,
        };
      }

      drawCircle(circle, update = false) {
        const { x, y, translateX, translateY, size, alpha } = circle;
        this.context.translate(translateX, translateY);
        this.context.beginPath();
        this.context.arc(x, y, size, 0, 2 * Math.PI);
        this.context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        this.context.fill();
        this.context.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
        if (!update) {
          this.circles.push(circle);
        }
      }

      clearContext() {
        this.context.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
      }

      drawParticles() {
        this.clearContext();
        const particleCount = this.settings.quantity;
        for (let i = 0; i < particleCount; i++) {
          const circle = this.circleParams();
          this.drawCircle(circle);
        }
      }

      // This function remaps a value from one range to another range
      remapValue(value, start1, end1, start2, end2) {
        const remapped =
          ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
      }

      animate() {
        this.clearContext();
        this.circles.forEach((circle, i) => {
          // Handle the alpha value
          const edge = [
            circle.x + circle.translateX - circle.size, // distance from left edge
            this.canvasSize.w - circle.x - circle.translateX - circle.size, // distance from right edge
            circle.y + circle.translateY - circle.size, // distance from top edge
            this.canvasSize.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
          ];
          const closestEdge = edge.reduce((a, b) => Math.min(a, b));
          const remapClosestEdge = this.remapValue(
            closestEdge,
            0,
            20,
            0,
            1
          ).toFixed(2);
          if (remapClosestEdge > 1) {
            circle.alpha += 0.02;
            if (circle.alpha > circle.targetAlpha)
              circle.alpha = circle.targetAlpha;
          } else {
            circle.alpha = circle.targetAlpha * remapClosestEdge;
          }
          circle.x += circle.dx;
          circle.y += circle.dy;
          circle.translateX +=
            (this.mouse.x / (this.settings.staticity / circle.magnetism) -
              circle.translateX) /
            this.settings.ease;
          circle.translateY +=
            (this.mouse.y / (this.settings.staticity / circle.magnetism) -
              circle.translateY) /
            this.settings.ease;
          // circle gets out of the canvas
          if (
            circle.x < -circle.size ||
            circle.x > this.canvasSize.w + circle.size ||
            circle.y < -circle.size ||
            circle.y > this.canvasSize.h + circle.size
          ) {
            // remove the circle from the array
            this.circles.splice(i, 1);
            // create a new circle
            const circle = this.circleParams();
            this.drawCircle(circle);
            // update the circle position
          } else {
            this.drawCircle(
              {
                ...circle,
                x: circle.x,
                y: circle.y,
                translateX: circle.translateX,
                translateY: circle.translateY,
                alpha: circle.alpha,
              },
              true
            );
          }
        });
        window.requestAnimationFrame(this.animate);
      }
    }

    // Init ParticleAnimation
    const canvasElements = document.querySelectorAll(
      "[data-particle-animation]"
    );
    canvasElements.forEach((canvas) => {
      const options = {
        quantity: canvas.dataset.particleQuantity,
        staticity: canvas.dataset.particleStaticity,
        ease: canvas.dataset.particleEase,
      };
      new ParticleAnimation(canvas, options);
    });
  }, []);

  return (
    <>
      {data?.enable && (
        <div className="relative font-inter antialiased">
          <main className="relative min-h-screen flex flex-col justify-start 2xl:justify-center bg-slate-900 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
              <div className="text-center">
                {/* Illustration #1 */}
                <div
                  className="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none"
                  aria-hidden="true"
                >
                  <img
                    src="/images/svg/shape.svg"
                    className="max-w-none"
                    width={852}
                    height={582}
                    alt="Illustration"
                  />
                </div>
                {/* Illustration #2 */}
                <div
                  className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none"
                  aria-hidden="true"
                >
                  <img
                    src="/images/svg/shape.svg"
                    className="max-w-none"
                    width={852}
                    height={582}
                    alt="Illustration"
                  />
                </div>
                {/* Particles animation */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <canvas data-particle-animation="" />
                </div>
                <div className="relative">
                  <a
                    target="_blank"
                    href={data?.topButtonLink || "#!"}
                    className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-400 hover:text-gray-200 rounded-full dark:text-white bg-gray-700 hover:bg-gray-600"
                    role="alert"
                  >
                    <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                      New
                    </span>{" "}
                    <span className="text-sm font-medium">
                      {data?.topButtonText || "Flowbite is out! See what's new"}
                    </span>
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <h1 className="max-w-4xl inline-flex font-extrabold text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                    {data?.title || "Interactive Particle Animation"}
                  </h1>
                  <p className=" mt-4 text-md lg:text-md text-slate-200 text-center">
                    {data?.desc ||
                      "Skim the quotes and bullet point summaries within minutes of each episode release"}
                  </p>
                  <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                    <form
                      className="w-full bg-white/20  p-1.5 rounded-2xl"
                      onSubmit={handleSubmit}
                    >
                      <div className="w-full lg:flex lg:items-center lg:justify-between ">
                        <div className="shrink w-full">
                          <input
                            aria-label="Search Bar"
                            // autoComplete="email"
                            className="block w-full p-3 text-gray-200 bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-300 sm:text-lg"
                            placeholder={placeholder}
                            required
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                        <button
                          className="w-full lg:w-auto 0 active:bg-slate-600 active:text-white/80 before:transition-colors bg-white flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-indigo-500"
                          type="submit"
                        >
                          <span>{data?.buttonText || "Search"}</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
