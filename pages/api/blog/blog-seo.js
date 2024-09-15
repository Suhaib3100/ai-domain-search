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
      case "GET":
        await client
          .db(database.dbName)
          .collection("blog-seo")
          .findOne()
          .then((docs) => res.json(docs));

        break;

      default:
        res.status(405).send("Method Not Allowed");
        break;
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
