import axios from "axios";
import { MongoClient } from "mongodb";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "db.json");

export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  //   const collection = client.db(database.dbName).collection("domain-generated");

  const params = {
    name: req.body.value,
    "max-results": 100,
    tlds: "org",
    "sensitive-content-filter": true,
    "include-registered": true,
  };

  try {
    await client.connect(); // Connect to the MongoDB server
    // const godaddySuggested = await axios.get(
    //   `https://api.godaddy.com/v1/domains/suggest?query=${req.body?.value}&waitMs=1000`,
    //   { headers }
    // );
    const data = await axios
      .get("https://sugapi.verisign-grs.com/ns-api/2.0/suggest?", { params })
      .then((response) => response.data);

    const results = data?.results;
    const num = results?.length;

    // collection.updateOne(
    //   {},
    //   { $inc: { domainGenerated: num } },
    //   { upsert: true }
    // );
    res.json(
      results.map((x) => ({
        domain: x.name,
        availability: x.availability,
      }))
    );
  } catch (error) {
    console.error(error);
    res.json("An error occurred, please try again later");
  } finally {
    // Close the connection when the processing is done or an error occurs
    await client.close();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
