import axios from "axios";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footerContent, setFooterContent] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    axios
      .post("/api/footer/email-subscriber", { email })
      .then((res) => setResponse(true))
      .catch((err) => setResponse(true));
  };

  useEffect(() => {
    axios
      .get("/api/footer/footer-content")
      .then((res) => setFooterContent(res.data?.footerContent))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Web Hosting
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/best-shared-hosting"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Shared Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="/best-dedicated-hosting"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Dedicated Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="/best-vps-hosting"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    VPS Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="/best-woocommerce-hosting"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    WooCommerce Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="/reseller-hosting"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Reseller Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                WordPress
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/best-wordpress-hosting"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Best WP Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="/best-wordpress-themes"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Best WP Themes
                  </a>
                </li>
                <li>
                  <a
                    href="/best-wordpress-plugins"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Best WP Plugins
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/wordpress-theme-detector"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    WP Theme Detector
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Hosting Tools
              </p>
              <ul className="mt-2 space-y-2">
                {/* <li>
                  <a
                    href="/who-is-hosting"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Who is Hosting
                  </a>
                </li> */}
                <li>
                  <a
                    href="/hosting-server-location"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Hosting Location
                  </a>
                </li>
                <li>
                  <a
                    href="/dns-checker"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    DNS Lookup
                  </a>
                </li>
                <li>
                  <a
                    href="/reverse-ip-checker"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Reverse IP
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">Site</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/coupons-and-promo"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Coupons & Promo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </span>
            <form
              className="flex flex-col mt-4 md:flex-row"
              onSubmit={handleSubscribe}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Please!"
                required
                type="email"
                className="flex-grow w-full text-gray-700 h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            {response ? (
              <p className="mt-1 text-sm text-green-500">
                Thank you for joining us.
              </p>
            ) : (
              <p className="mt-4 text-sm text-gray-500">
                We do not sell your email. We do not spam.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            {footerContent?.copyRight ||
              "© Copyright 2020 Lorem Inc. All rights reserved."}
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href={
                footerContent?.twitterHandle ||
                "https://twitter.com/@yourhandle"
              }
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href={
                footerContent?.instagramHandle ||
                "https://instagram.com/@yourhandle"
              }
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href={
                footerContent?.facebookHandle ||
                "https://facebook.com/@yourhandle"
              }
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
