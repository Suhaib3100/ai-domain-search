import { MongoClient } from "mongodb";
import isLoggedIn from "../../isLoggedIn";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  const token = JSON.parse(req.body?.token)?.token;

  try {
    await client.connect(); // Connect to the MongoDB Server
    switch (req.method) {
      case "POST":
        if (isLoggedIn(token)) {
          const result = await client
            .db(database.dbName)
            .collection("top-ten-hosting")
            .updateOne(
              {},
              {
                $pull: {
                  addHosting: {
                    uniqueId: req.body.uniqueId,
                  },
                },
              }
            );

          if (result.modifiedCount > 0 || result.upsertedCount > 0) {
            res.json({
              status: true,
              message: "Deleted successfully. Please reload.",
            });
          } else {
            res.json({
              status: false,
              message: "Deletion was not successful. Please change some input.",
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
