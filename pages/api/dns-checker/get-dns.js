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
    await client.connect();

    const A = await dns.resolve(req.body.value, "A").then((x) => x?.answers);
    const AAAA = await dns
      .resolve(req.body.value, "AAAA")
      .then((x) => x?.answers);
    const NS = await dns.resolve(req.body.value, "NS").then((x) => x?.answers);
    const SOA = await dns
      .resolve(req.body.value, "SOA")
      .then((x) => x?.answers);
    const MX = await dns.resolve(req.body.value, "MX").then((x) => x?.answers);
    const TXT = dns
      .resolve(req.body.value, "TXT")
      .then((x) => x?.answers)
      .catch((err) => console.log(err));
    if (
      A.length ||
      AAAA.length ||
      NS.length ||
      SOA.length ||
      MX.length ||
      TXT.length
    ) {
      await client
        .db(database.dbName)
        .collection("dns-checker")
        .updateOne(
          {},
          {
            $push: {
              recentChecks: {
                $each: [
                  {
                    domain: req.body.value,
                    ...{ A, AAAA, NS, SOA, MX, TXT },
                  },
                ], // Insert req.body into the array
                $position: 0, // Specify the position to insert (0 for beginning, -1 for end)
              },
            },
          },
          { upsert: true }
        );

      respond.json({ status: true, data: { A, AAAA, NS, SOA, MX, TXT } });
    } else {
      respond.json({ status: false, data: "Invalid Domain" });
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
