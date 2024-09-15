import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import axios from "axios";
import { popularExt } from "./ext";
const filePath = path.join(process.cwd(), "db.json");

export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);

  try {
    switch (req.method) {
      case "POST":
        await client.connect(); // Connect to the MongoDB Server
        const inp = req.body.value?.split(" ").join("");
        const popTld = popularExt.map((x) => ".".concat(x.name));
        const domains = popTld?.map((x) => inp.concat(x));

        const api = await client
          .db(database.dbName)
          .collection("apis")
          .findOne({})
          .then((docs) => docs?.apis);

        const headers = {
          Authorization: `sso-key ${api?.api}:${api?.secret}`,
        };
        // console.log(popTld);
        axios
          .post(
            `https://api.ote-godaddy.com/v1/domains/available?checkType=FULL`,
            domains,
            { headers }
          )
          .then((respond) => {
            // console.log(respond.data);
            res.json(
              respond.data?.domains?.map((x) => ({
                domain: x?.domain,
                availability: x?.available ? "available" : "registered",
              }))
            );
          })
          .catch((err) => {
            console.log(err);
            res.json([
              {
                domain: "Too Many Request. please try again",
                availability: "registered",
              },
            ]);
          });

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
