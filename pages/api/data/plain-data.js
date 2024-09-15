import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";
import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "db.json");
const data = fs.readFileSync(filePath, "utf-8");
const database = JSON.parse(data);
const client = new MongoClient(database.db);

export default async function handler(req, res) {
  const token = req.body?.token?.token;

  try {
    await client.connect(); // Connect to the MongoDB Server
    switch (req.method) {
      case "POST":
        if (isLoggedIn(token)) {
          const result = await client
            .db(database.dbName)
            .collection(req.body?.dbCollection)
            .updateOne(
              {},
              { $set: { [req.body?.item]: req.body } },
              { upsert: true }
            );

          if (result.modifiedCount > 0 || result.upsertedCount > 0) {
            res.json({
              status: true,
              message: "Updated successfully",
            });
          } else {
            res.json({
              status: false,
              message:
                "Update was not successful. Data remains same. Please change some input.",
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
          .collection(req.query?.dbCollection)
          .findOne({}, { projection: { _id: 0, [req.query?.item]: 1 } })
          .then((docs) => res.json(docs));
    }
  } catch (error) {
    res.json({
      status: false,
      message: error,
    });
    console.log("Some error occurred", error);
  } finally {
    await client.close();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
