import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
const filePath = path.join(process.cwd(), "db.json");
const whoiser = require("whoiser");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  // using whoiser package to get whois data

  try {
    await client.connect();

    const whois = await whoiser(req.body?.value).then((respond) => respond);

    await client
      .db(database.dbName)
      .collection("whois")
      .updateOne(
        {},
        {
          $push: {
            recentChecks: {
              $each: [
                {
                  domain: req.body.value,
                  whois: Object.entries(whois),
                },
              ], // Insert req.body into the array
              $position: 0, // Specify the position to insert (0 for beginning, -1 for end)
            },
          },
        },
        { upsert: true }
      );
    res.json(whois);
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
