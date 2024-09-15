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
          .collection("blog")
          .findOne({ id: req.body.id });

        res.json(result);
        break;

      case "GET":
        const results = await client
          .db(database.dbName)
          .collection("blog")
          .findOne({ permalink: req.query.post });

        res.json(results);
        break;
      default:
        res.status(405).send("Method Not Allowed");
        break;
    }
  } catch (error) {
    // console.error("Error occurred:", error);
    res.json({ message: "Internal Server Error" });
    return error;
  } finally {
    await client.close();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
