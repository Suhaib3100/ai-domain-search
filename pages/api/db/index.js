import path from "path";
import fs from "fs";
import isLoggedIn from "../isLoggedIn";

const filePath = path.join(process.cwd(), "db.json");

export default function handler(req, res) {
  const { database, selfHostedURI, atlasURI, siteUrl, dbName } = req.body;
  const token = req.body?.token?.token;
  switch (req.method) {
    case "POST":
      if (isLoggedIn(token)) {
        const dbValue = database === "selfHosted" ? selfHostedURI : atlasURI;
        const data = {
          db: dbValue,
          database,
          selfHostedURI,
          atlasURI,
          siteUrl,
          dbName,
        };

        try {
          fs.writeFileSync(filePath, JSON.stringify(data));
          return res.json({
            status: true,
            message: "Updated successfully",
          });
        } catch (err) {
          console.error(err);
          return res.json({
            status: false,
            message: "Update was not successful. Please try again.",
          });
        }
      } else {
        return res.json({
          status: false,
          message: "Update was not successful. Please login again.",
        });
      }
      break;

    case "GET":
      try {
        const docs = fs.readFileSync(filePath, "utf-8");
        return res.json(JSON.parse(docs));
      } catch (err) {
        console.error(err);
        return res.json("Some database read error");
      }
      break;

    default:
      return res.status(405).end(); // Method Not Allowed
  }
}
