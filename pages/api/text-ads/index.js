import isLoggedIn from "../isLoggedIn";
import { MongoClient } from "mongodb";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "db.json");

export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  const collection = client.db(database.dbName).collection("text-ads");

  const {
    enableAds,
    textAds1,
    textAds2,
    textAds3,
    textAds4,
    textAds5,
    adLink1,
    adLink2,
    adLink3,
    adLink4,
    adLink5,
  } = req.body;

  const token = req.body?.token?.token;

  try {
    await client.connect(); // Connect to the MongoDB server

    switch (req.method) {
      case "POST":
        if (isLoggedIn(token)) {
          const result = await collection.updateOne(
            {},
            {
              $set: {
                enableAds: enableAds,
                textAds1: textAds1,
                textAds2: textAds2,
                textAds3: textAds3,
                textAds4: textAds4,
                textAds5: textAds5,
                adLink1: adLink1,
                adLink2: adLink2,
                adLink3: adLink3,
                adLink4: adLink4,
                adLink5: adLink5,
              },
            },
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
        const docs = await collection.findOne();
        res.json(docs);
        break;
      default:
        res.status(405).end("Method Not Allowed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("An error occurred. Please try again later.");
  } finally {
    // Close the connection when the processing is done or an error occurs
    await client.close();
  }
}

export const config = {
  api: { externalResolver: true },
};
