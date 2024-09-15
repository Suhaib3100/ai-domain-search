import multer from "multer";
import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";
const filePath = path.join(process.cwd(), "db.json");
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/about-us/tab-images",
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
        upload.array("tabImage")(req, res, async (err) => {
          const {
            tabTitle,
            tab1Title,
            tab1Desc,
            tab2Title,
            tab2Desc,
            tab3Title,
            tab3Desc,
          } = req.body;
          const token = JSON.parse(req.body?.token)?.token;
          await client.connect(); // Connect to the MongoDB Server
          if (isLoggedIn(token)) {
            const files = req?.files;

            const currentImages = await client
              .db(database.dbName)
              .collection("about-us")
              .findOne({}, { projection: { _id: 0, featureTab: 1 } });

            const updateData = {
              tabTitle: tabTitle,
              tab1Title: tab1Title,
              tab1Desc: tab1Desc,
              tab2Title: tab2Title,
              tab2Desc: tab2Desc,
              tab3Title: tab3Title,
              tab3Desc: tab3Desc,
              tab1Image: currentImages?.featureTab?.tab1Image,
              tab2Image: currentImages?.featureTab?.tab2Image,
              tab3Image: currentImages?.featureTab?.tab3Image,
            };
            if (files.length) {
              updateData.tab1Image =
                files[0]?.path || currentImages?.featureTab?.tab1Image;
              updateData.tab2Image =
                files[1]?.path || currentImages?.featureTab?.tab2Image;
              updateData.tab3Image =
                files[2]?.path || currentImages?.featureTab?.tab3Image;
            }
            const result = await client
              .db(database.dbName)
              .collection("about-us")
              .updateOne(
                {},
                { $set: { featureTab: updateData } },
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
                message: "Update was not successful. Please change input data.",
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
          .collection("about-us")
          .findOne({}, { projection: { _id: 0, featureTab: 1 } })
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
