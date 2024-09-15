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
    await client.connect(); // Connect to the MongoDB Server
    switch (req.method) {
      case "POST":
        await client
          .db(database.dbName)
          .collection("contact-messages")
          .insertOne(req.body)
          .then((docs) =>
            res.json({
              status: true,
              message:
                "We received your message. We will contact you soon. Thank you.",
            })
          )
          .catch((err) =>
            res.json({
              status: false,
              message: "Some error occurred. Pleaes try again",
            })
          );

        break;
      case "GET":
        await client
          .db(database.dbName)
          .collection("contact-messages")
          .find()
          .toArray()
          .then((docs) =>
            res.json({
              status: true,
              data: docs,
            })
          )
          .catch((err) =>
            res.json({
              status: false,
              message: "Some error occurred. Pleaes try again",
            })
          );
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
