import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
const sedoUrl = "https://api.sedo.com/api/v1/?wsdl";
const soap = require("soap");

const filePath = path.join(process.cwd(), "db.json");

export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  try {
    await client.connect(); // Connect to the MongoDB Server
    switch (req.method) {
      case "POST":
        const doc = await client
          .db(database.dbName)
          .collection("sedo-api")
          .findOne({});
        const args = {
          partnerid: doc?.partnerId, // "327338", // doc.sedoPartnerId,
          signkey: doc?.signKey, // "f1200c40a7d8c36941d7e262fb6c07", //doc.sedoSignKey,
          keyword: req.body?.value,
          tld: "com, net, org",
          kwtype: "C",
          no_hyphen: true,
          no_numeral: true,
          no_idn: true,
          resultsize: 100,
          language: "en",
        };
        soap.createClient(sedoUrl, function (err, clients) {
          clients.DomainSearch({ args }, function (err, result) {
            err && console.log("err");
            // console.log(result.return.item);
            res.json(result?.return?.item);
          });
        });

        break;
    }
  } catch (error) {
    console.log("some error occurred");
  } finally {
    await client.close();
  }
}
export const config = {
  api: {
    externalResolver: true,
  },
};
