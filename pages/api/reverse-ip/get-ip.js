import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import axios from "axios";
const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, respond) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);

  try {
    await client.connect();

    const reverseIP = await axios
      .get(`http://ip-api.com/json/${req.body.value}?fields=45150207`)
      .then((res) => res.data);

    await client
      .db(database.dbName)
      .collection("reverse-ip")
      .updateOne(
        {},
        {
          $push: {
            recentChecks: {
              $each: [
                {
                  domain: req.body.value,
                  ...reverseIP,
                },
              ], // Insert req.body into the array
              $position: 0, // Specify the position to insert (0 for beginning, -1 for end)
            },
          },
        },
        { upsert: true }
      );

    respond.json({ status: true, data: reverseIP });
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
