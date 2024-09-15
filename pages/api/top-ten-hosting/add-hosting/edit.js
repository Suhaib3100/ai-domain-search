import multer from "multer";
import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import isLoggedIn from "../../isLoggedIn";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/top-ten-hosting/hosting-logo",
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
        upload.single("hostingImage")(req, res, async (err) => {
          const token = JSON.parse(req.body?.token)?.token;
          await client.connect(); // Connect to the MongoDB Server
          if (isLoggedIn(token)) {
            const {
              id,
              hostingTag,
              hostingRating,
              hostingName,
              hostingFeatures,
              buttonText,
              affiliateLink,
              hostingImage,
              whyPicked,
              prosCons,
              uniqueId,
            } = req.body;

            const files = req?.file?.path;

            const currentImage = await client
              .db(database.dbName)
              .collection("top-ten-hosting")
              .findOne(
                { "addHosting.uniqueId": uniqueId },
                {
                  projection: {
                    addHosting: {
                      $elemMatch: { uniqueId: uniqueId },
                    },
                  },
                }
              );
            //   console.log(uniqueId);
            const updateData = {
              id: id,
              hostingTag: hostingTag,
              hostingName: hostingName,
              hostingRating: hostingRating,
              hostingFeatures: hostingFeatures,
              buttonText: buttonText,
              affiliateLink: affiliateLink,

              whyPicked: whyPicked,
              prosCons: prosCons,
              uniqueId: uniqueId,
              hostingImage: currentImage.addHosting[0]?.hostingImage,
            };
            if (files) {
              updateData.hostingImage = files;
            }
            //   console.log(currentImage.addHosting[0]?.hostingImage);

            const result = await client
              .db(database.dbName)
              .collection("top-ten-hosting")
              .updateOne(
                {
                  "addHosting.uniqueId": uniqueId,
                },
                {
                  $set: {
                    "addHosting.$": updateData,
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

      //   case "GET":
      //     await client
      //       .db(database.dbName)
      //       .collection("all-reviews")
      //       .findOne({}, { projection: { _id: 0, addHosting: 1 } })
      //       .then((docs) => res.json(docs));
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
