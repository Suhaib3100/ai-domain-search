import axios from "axios";
import dns2 from "dns2";
const dns = new dns2();

export default async function handler(req, respond) {
  // post method to check domain IP first

  const ip = await dns
    .resolveA(req.body?.domain)
    .then((res) =>
      res?.answers?.length > 0 ? res?.answers[0]?.address : false
    );
  // 45150207
  // if IP found then check location using ip-api.com
  if (ip) {
    axios.get(`http://ip-api.com/json/${ip}?fields=66846719`).then((res) =>
      respond.json({
        status: "success",
        data: Object.assign(res.data, { domain: req.body?.domain }),
      })
    );
  } else {
    respond.json({ status: "failed or Domain not Available" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
