import { MongoClient } from "mongodb";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  try {
    await client.connect(); // Connect to the MongoDB Server
    switch (req.method) {
      case "POST":
        const result = await client
          .db(database.dbName)
          .collection(req.body?.dbCollection)
          .findOne({}, { projection: { _id: 0, seo: 1 } })
          .then((docs) => res.json(docs));

        break;
    }
  } catch (error) {
    console.log("some error occurred", error);
  } finally {
    await client.close();
  }
}
export const config = {
  api: {
    externalResolver: true,
  },
};
