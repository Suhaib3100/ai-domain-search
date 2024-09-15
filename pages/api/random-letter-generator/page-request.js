const axios = require("axios");
const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function generateRandomWord(arr, length) {
  return Array.from(
    { length },
    () => arr[Math.floor(Math.random() * arr.length)]
  ).join("");
}

export default function handler(req, res) {
  const ext = "com";
  let i = 0;
  const words = [];
  while (i < 30) {
    words.push(generateRandomWord(alpha, 5));
    i++;
  }

  const params = {
    names: words.toString(),
    tlds: "com",
    "include-registered": true,
  };
  axios
    .get("https://sugapi.verisign-grs.com/ns-api/2.0/bulk-check?", {
      params,
    })
    .then((respond) =>
      // console.log(respond.data)
      res.json(
        respond.data.results.map((x) => ({
          domain: x.name,
          availability: x.availability,
        }))
      )
    )
    .catch((err) => console.log("error"));
}
export const config = {
  api: {
    externalResolver: true,
  },
};
