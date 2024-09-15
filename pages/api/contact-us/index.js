import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";
const filePath = path.join(process.cwd(), "db.json");

export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  const token = req.body?.token?.token;
  try {
    switch (req.method) {
      case "POST":
        await client.connect(); // Connect to the MongoDB Server
        if (isLoggedIn(token)) {
          const result = await client
            .db(database.dbName)
            .collection("contact-us")
            .updateOne({}, { $set: { data: req.body } }, { upsert: true });

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
          .collection("contact-us")
          .findOne()
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
