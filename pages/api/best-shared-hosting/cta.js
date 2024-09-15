import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  const token = req.body?.token?.token;
  try {
    await client.connect(); // Connect to the MongoDB Server
    switch (req.method) {
      case "POST":
        if (isLoggedIn(token)) {
          const result = await client
            .db(database.dbName)
            .collection("best-shared-hosting")
            .updateOne({}, { $set: { cta: req.body } }, { upsert: true });
          if (result.modifiedCount > 0 || result.upsertedCount > 0) {
            res.json({
              status: true,
              message: "Updated successfully",
            });
          } else {
            res.json({
              status: false,
              message: "Update was not successful. Please change some input.",
            });
          }
        } else {
          res.json({
            status: false,
            message: "Update was not successful. Please login again.",
          });
        }
        break;

      case "GET":
        await client
          .db(database.dbName)
          .collection("best-shared-hosting")
          .findOne({}, { projection: { _id: 0, cta: 1 } })
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
