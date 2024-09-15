import multer from "multer";
import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/best-wp-hosting/hosting-logo",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  limits: {
    fileSize: 10000000000,
  },
});
const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);
  try {
    switch (req.method) {
      case "POST":
        upload.single("logo")(req, res, async (err) => {
          await client.connect(); // Connect to the MongoDB Server
          const token = JSON.parse(req.body?.token)?.token;
          if (isLoggedIn(token)) {
            const { uniqueId } = req.body;
            const files = req?.file?.path;

            const updateData = {
              uniqueId: uniqueId,
            };
            if (files) {
              updateData.hostingLogo = files;
            }

            const result = await client
              .db(database.dbName)
              .collection("best-wp-hosting")
              .updateOne(
                {},
                {
                  $push: {
                    addHostingLogo: {
                      $each: [updateData], // Insert req.body into the array
                      $position: 0, // Specify the position to insert (0 for beginning, -1 for end)
                    },
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
        });
        break;

      case "GET":
        await client
          .db(database.dbName)
          .collection("best-wp-hosting")
          .findOne({}, { projection: { _id: 0, addHostingLogo: 1 } })
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
    bodyParser: false,
  },
};
