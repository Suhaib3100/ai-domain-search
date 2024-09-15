import multer from "multer";
import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import isLoggedIn from "../isLoggedIn";

const filePath = path.join(process.cwd(), "db.json");
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/post/post-image",
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
        upload.single("postImage")(req, res, async (err) => {
          const token = JSON.parse(req.body?.token)?.token;
          await client.connect(); // Connect to the MongoDB Server
          if (isLoggedIn(token)) {
            const {
              id,
              title,
              permalink,
              meta,
              content,
              published,
              date,
              postHeadline,
              category,
            } = req.body;

            const currentImage = await client
              .db(database.dbName)
              .collection("blog")
              .findOne({ id: id });

            const updateData = {
              id,
              title,
              permalink,
              meta,
              content,
              published,
              date,
              postHeadline,
              category,
              postImage: currentImage?.postImage,
            };
            const files = req?.file?.path;
            if (files) {
              updateData.postImage = files;
            }

            let result = await client
              .db(database.dbName)
              .collection("blog")
              .updateOne(
                { id: req.body.id },
                {
                  $set: updateData,
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
          .collection("blog")
          .find({})
          .toArray()
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
