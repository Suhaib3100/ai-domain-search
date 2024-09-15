import axios from "axios";
import dns2 from "dns2";
const dns = new dns2();
import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, respond) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  // post method to check domain IP first

  try {
    // Connect to the MongoDB Server
    const ip = await dns
      .resolveA(req.body.value)
      .then((res) => (res.answers.length > 0 ? res.answers[0].address : false));

    // if IP found then check location using ip-api.com
    if (ip) {
      axios
        .get(`http://ip-api.com/json/${ip}?fields=45150207`)
        .then(async (res) => {
          await client.connect();
          await client
            .db(database.dbName)
            .collection("hosting-location")
            .updateOne(
              {},
              {
                $push: {
                  recentChecks: {
                    $each: [{ domain: req.body.value, ...res.data }], // Insert req.body into the array
                    $position: 0, // Specify the position to insert (0 for beginning, -1 for end)
                  },
                },
              },
              { upsert: true }
            );

          respond.json({ status: true, data: res.data });
        });
    } else {
      respond.json({
        status: false,
        message: "failed or Domain not Available",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
