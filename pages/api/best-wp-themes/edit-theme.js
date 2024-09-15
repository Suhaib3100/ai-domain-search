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
        upload.single("image")(req, res, async (err) => {
          const token = JSON.parse(req.body?.token)?.token;
          await client.connect(); // Connect to the MongoDB Server
          if (isLoggedIn(token)) {
            const {
              topTitle,
              title,
              desc,
              leftButtonText,
              leftButtonLink,
              rightButtonText,
              rightButtonLink,
              content,
              uniqueId,
            } = req.body;

            const files = req?.file?.path;

            const currentImage = await client
              .db(database.dbName)
              .collection("best-wp-themes")
              .findOne(
                { "themes.uniqueId": uniqueId },
                {
                  projection: {
                    themes: {
                      $elemMatch: { uniqueId: uniqueId },
                    },
                  },
                }
              );
            //   console.log(uniqueId);
            const updateData = {
              topTitle: topTitle,
              title: title,
              desc: desc,
              leftButtonText: leftButtonText,
              leftButtonLink: leftButtonLink,
              rightButtonText: rightButtonText,
              rightButtonLink: rightButtonLink,
              content: content,
              uniqueId: uniqueId,
              themeImage: currentImage.themes[0]?.themeImage,
            };
            if (files) {
              updateData.themeImage = files;
            }
            //   console.log(currentImage.addHosting[0]?.hostingImage);

            const result = await client
              .db(database.dbName)
              .collection("best-wp-themes")
              .updateOne(
                {
                  "themes.uniqueId": uniqueId,
                },
                {
                  $set: {
                    "themes.$": updateData,
                  },
                }
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
              message: "Update was not successful. Please change some input.",
            });
          }
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
    bodyParser: false,
  },
};
