import multer from "multer";
import isLoggedIn from "../isLoggedIn";
import { MongoClient } from "mongodb";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "db.json");

// save banner ads data to the file using multer
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/banner-ads",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  limits: {
    fileSize: 10000000000,
  },
});

export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);

  try {
    switch (req.method) {
      case "POST":
        upload.single("bannerImage")(req, res, async (err) => {
          if (err) return res.status(500).json({ error: err.message });

          const { affiliateLink, bannerCdnLink, enableAds } = req.body;
          const token = JSON.parse(req.body?.token)?.token;
          await client.connect(); // Connect to the MongoDB server

          if (isLoggedIn(token)) {
            // read the json file
            const eA = JSON.parse(enableAds);
            const files = req?.file?.path;

            // Save banner ads data to the file
            const updateData = {
              enableAds: eA,
              affiliateLink: affiliateLink,
              bannerCdnLink: bannerCdnLink,
            };

            if (files) {
              updateData.bannerImage = files;
            }

            const result = await client
              .db(database.dbName)
              .collection("banner-ads")
              .updateOne(
                {},
                { $set: { bannerAds: updateData } },
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
                message:
                  "Update was not successful. Data remains same. Please change some input.",
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
        await client.connect(); // Connect to the MongoDB server

        // send banner ads data to the client
        const doc = await client
          .db(database.dbName)
          .collection("banner-ads")
          .findOne();

        res.json(doc);
    }
  } catch (err) {
    console.error(err);
    res.json("Error, Please try again.");
  } finally {
    // Close the connection when the processing is done or an error occurs
    await client.close();
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
