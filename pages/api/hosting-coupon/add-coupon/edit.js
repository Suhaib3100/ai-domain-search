import multer from "multer";
import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import isLoggedIn from "../../isLoggedIn";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/images/hosting-coupon/hosting-coupon-logo",
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
              hostingName,
              couponTitle,
              exclusive,
              expiry,
              discount,
              couponUsed,
              affiliateLink,
              couponCode,
              modalTitle,
              modalText,
              modalFooterText,
              uniqueId,
              token,
            } = req.body;

            const files = req?.file?.path;

            const currentImage = await client
              .db(database.dbName)
              .collection("hosting-coupon")
              .findOne(
                { "couponList.uniqueId": uniqueId },
                {
                  projection: {
                    couponList: {
                      $elemMatch: { uniqueId: uniqueId },
                    },
                  },
                }
              );
            //   console.log(uniqueId);
            const updateData = {
              id: id,
              hostingName: hostingName,
              couponTitle: couponTitle,
              exclusive: exclusive,
              expiry: expiry,
              discount: discount,
              couponUsed: couponUsed,
              affiliateLink: affiliateLink,
              couponCode: couponCode,
              modalTitle: modalTitle,
              modalText: modalText,
              modalFooterText: modalFooterText,
              uniqueId: uniqueId,
              token: token,
              hostingImage: currentImage.couponList[0]?.hostingImage,
            };
            if (files) {
              updateData.hostingImage = files;
            }
            //   console.log(currentImage.addHosting[0]?.hostingImage);

            const result = await client
              .db(database.dbName)
              .collection("hosting-coupon")
              .updateOne(
                {
                  "couponList.uniqueId": uniqueId,
                },
                {
                  $set: {
                    "couponList.$": updateData,
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
