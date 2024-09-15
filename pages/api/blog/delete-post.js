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
            .collection("blog")
            .deleteOne({ id: req.body?.id });

          if (result.deletedCount > 0) {
            res.json({
              status: true,
              message: "Deleted Successfully",
            });
          } else {
            res.json({
              status: false,
              message: "Deletion was not successful. Post does not exist.",
            });
          }
        } else {
          res.json({
            status: false,
            message: "Deletion was not successful. Please login again.",
          });
        }

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
