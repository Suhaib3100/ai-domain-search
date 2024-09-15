import axios from "axios";
import dns2 from "dns2";
const dns = new dns2();

export default async function handler(req, respond) {
  // post method to check domain IP first
  const ip = await dns
    .resolveA(req.body.value)
    .then((res) => (res.answers.length > 0 ? res.answers[0].address : false));
  // if IP found then check location using ip-api.com
  if (ip) {
    axios
      .get(`http://ip-api.com/json/${ip}?fields=45150207`)
      .then((res) => respond.json({ status: true, data: res.data }));
  } else {
    respond.json({
      status: false,
      message: "failed or Domain not Available",
    });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
