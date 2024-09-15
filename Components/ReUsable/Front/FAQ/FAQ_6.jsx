export default function FAQ_6({ data = { enable: false } }) {
  const faqsList = [
    {
      q: data?.q1 || "What are some random questions to ask?",
      a:
        data?.a1 ||
        "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: data?.q2 || "Do you include common questions?",
      a:
        data?.a2 ||
        "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: data?.q3 || "Can I use this for 21 questions?",
      a:
        data?.a3 ||
        "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: data?.q4 || "Are these questions for girls or for boys?",
      a:
        data?.a4 ||
        "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: data?.q5 || "What do you wish you had more talent doing?",
      a:
        data?.a5 ||
        "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
    {
      q: data?.q6 || "What are some random questions to ask?",
      a:
        data?.a6 ||
        "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question to ask friends.",
    },
  ];
  return (
    <>
      {data?.enable && (
        <>
          {/* FAQ */}
          <div className="leading-relaxed mt-12 mx-4 md:mx-8">
            <div className="text-center space-y-3">
              <h1 className="block text-gray-800 dark:text-gray-400 text-3xl font-semibold">
                {data?.title || "Frequently Asked Questions"}
              </h1>
              <p className="text-gray-500 max-w-lg mx-auto">
                {data?.desc ||
                  " Answered all frequently asked questions. Can’t find the answer you’re looking or? feel free to contact us."}
              </p>
            </div>
            <div
              className="relative bg-white dark:bg-gray-800 rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto shadow-2xl"
              // style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}
            >
              <div className="grid gap-4 py-8 md:grid-cols-2">
                {faqsList.map((item, idx) => (
                  <div className="space-y-3 mt-6 px-8" key={idx}>
                    <h4 className="text-gray-800 dark:text-gray-400 text-xl font-semibold ">
                      {item.q}
                    </h4>
                    <p className="text-gray-500">{item.a}</p>
                  </div>
                ))}
              </div>
              <span className="w-0.5 h-full bg-gray-200 dark:bg-gray-600 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
            </div>
          </div>
          {/* End FAQ */}
        </>
      )}
    </>
  );
}
