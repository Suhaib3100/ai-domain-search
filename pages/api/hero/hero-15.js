import multer from "multer";
import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";
import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "db.json");
export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);

  const dynamicDestination = (req, _file, cb) => {
    const destinationPath = `./public/${req.body.storagePath}`;
    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath, { recursive: true });
    }
    cb(null, destinationPath);
  };
  const upload = multer({
    storage: multer.diskStorage({
      destination: dynamicDestination,
      filename: (_req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  });
  try {
    switch (req.method) {
      case "POST":
        upload.single("heroImage")(req, res, async (err) => {
          const token = JSON.parse(req.body?.token)?.token;
          await client.connect(); // Connect to the MongoDB Server
          if (isLoggedIn(token)) {
            const {
              title,
              desc,
              enable,
              leftButtonText,
              leftButtonLink,
              topTitle,
              topDesc,
            } = req.body;

            const files = req?.file?.path;

            const currentImage = await client
              .db(database.dbName)
              .collection(req.body?.dbCollection)
              .findOne({}, { projection: { _id: 0, hero_15: 1 } });
            //   console.log(uniqueId);
            const updateData = {
              title: title,
              desc: desc,
              leftButtonText: leftButtonText,
              leftButtonLink: leftButtonLink,
              topTitle: topTitle,
              topDesc: topDesc,
              enable: JSON.parse(enable),

              heroImage: currentImage?.hero_15?.heroImage,
            };
            if (files) {
              updateData.heroImage = files;
            }
            //   console.log(currentImage.addHosting[0]?.hostingImage);

            const result = await client
              .db(database.dbName)
              .collection(req.body?.dbCollection)
              .updateOne(
                {},
                { $set: { hero_15: updateData } },
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
        await client
          .db(database.dbName)
          .collection(req.query.dbCollection)
          .findOne({}, { projection: { _id: 0, hero_15: 1 } })
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
