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
    const destinationPath = `./public/images/features-8`;
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
        upload.array("tabImage")(req, res, async (_err) => {
          await client.connect(); // Connect to the MongoDB Server
          const token = JSON.parse(req.body?.token)?.token;

          const {
            tabTitle,
            tab1Title,
            tab1Desc,
            tab2Title,
            tab2Desc,
            tab3Title,
            tab3Desc,
            enable,
          } = req.body;

          if (isLoggedIn(token)) {
            const files = req?.files;

            const currentImages = await client
              .db(database.dbName)
              .collection(req.body?.dbCollection)
              .findOne({}, { projection: { _id: 0, features_8: 1 } });

            const updateData = {
              tabTitle: tabTitle,
              tab1Title: tab1Title,
              tab1Desc: tab1Desc,
              tab2Title: tab2Title,
              tab2Desc: tab2Desc,
              tab3Title: tab3Title,
              tab3Desc: tab3Desc,
              tab1Image: currentImages?.features_8?.tab1Image,
              tab2Image: currentImages?.features_8?.tab2Image,
              tab3Image: currentImages?.features_8?.tab3Image,
              enable: JSON.parse(enable),
            };
            if (files?.length) {
              updateData.tab1Image =
                files[0]?.path || currentImages?.features_8?.tab1Image;
              updateData.tab2Image =
                files[1]?.path || currentImages?.features_8?.tab2Image;
              updateData.tab3Image =
                files[2]?.path || currentImages?.features_8?.tab3Image;
            }

            const result = await client
              .db(database.dbName)
              .collection(req.body?.dbCollection)
              .updateOne(
                {},
                { $set: { features_8: updateData } },
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
        await client.connect();
        await client
          .db(database.dbName)
          .collection(req.query.dbCollection)
          .findOne({}, { projection: { _id: 0, features_8: 1 } })
          .then((docs) => res.json(docs));
    }
  } catch (error) {
    console.log("Some error occurred", error);
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
