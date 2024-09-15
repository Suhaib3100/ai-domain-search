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
          .collection("email-subscriber")
          .insertOne({ subscriber: req.body?.email });

        if (result.modifiedCount > 0 || result.upsertedCount > 0) {
          res.json({
            status: true,
            message: "Updated successfully",
          });
        } else {
          res.json({
            status: false,
            message: "Update was not successful. Please change data.",
          });
        }

        break;
      case "GET":
        await client
          .db(database.dbName)
          .collection("email-subscriber")
          .findOne({})
          .then((docs) => res.json(docs));
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
