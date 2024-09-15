import { Button, Input, Spacer, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Contactus() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const pageData = useSelector((state) => state.pageData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse("");
    axios
      .post("/api/contact-us/messages", {
        firstName,
        lastName,
        email,
        company,
        message,
      })
      .then((res) => {
        setResponse(res.data?.message);
      })
      .catch((err) => setResponse("Some Error occurred."));
  };

  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                {pageData?.data?.topTitle || "Preline A vison for 2222"}
              </p>
              {/* Title */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                  {pageData?.data?.title ||
                    "Fully customizable rules to match your unique needs"}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {pageData?.data?.desc ||
                    " We provide you with a test account that can be set up in seconds. Our main focus is getting responses to you as soon as we can."}
                </p>
              </div>
              {/* End Title */}
              {/* Blockquote */}
              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-200 dark:text-gray-800"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-xl italic text-gray-800 dark:text-white">
                    {pageData?.data?.quoteMessage ||
                      "Amazing people to work with. Very fast and professional partner."}
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center">
                    {/* <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div> */}
                    <div className="grow ms-4">
                      <div className="font-semibold text-gray-800 dark:text-gray-200">
                        {pageData?.data?.userName || "Josh Ties"}
                      </div>
                      <div className="text-xs text-gray-500">
                        {pageData?.data?.designation ||
                          "Director Payments &amp; Risk | Airbnb"}
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
            <div>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  {/* Card */}
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                    <div className="text-center">
                      <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                        Get in touch.
                      </h1>
                    </div>
                    <div className="mt-5">
                      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">
                        OO
                      </div>
                      {/* Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* Input Group */}
                        <Input
                          isRequired
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          label="First Name"
                        />
                        {/* End Input Group */}
                        {/* Input Group */}
                        <Input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          label="Last Name"
                        />
                        {/* End Input Group */}
                        {/* Input Group */}
                        <Input
                          isRequired
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          label="Email"
                        />
                        {/* End Input Group */}
                        {/* Input Group */}
                        <Input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          label="Company Name"
                        />
                        {/* End Input Group */}
                        {/* Input Group */}

                        {/* End Input Group */}
                      </div>
                      <Spacer y={3} />
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        minRows={8}
                        // labelPlacement="outside"
                        label="Enter your message"
                        placeholder="Type your message here."
                      />

                      {/* End Grid */}
                      {/* Checkbox */}

                      {/* End Checkbox */}
                      <div className="mt-5">
                        <Button
                          className="w-full font-semibold text mb-4"
                          size="md"
                          color="primary"
                          radius="sm"
                          type="submit"
                        >
                          Send Message
                        </Button>
                        <button
                          className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600  ${
                            response && "!block"
                          } hidden`}
                        >
                          {response}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
              </form>
              {/* End Form */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Clients Section */}

          {/* Clients */}

          {/* End Clients */}
        </div>
        {/* End Clients Section */}
      </div>
      {/* End Hero */}
    </>
  );
}
