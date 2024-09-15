import isLoggedIn from "../isLoggedIn";
import path from "path";
import fs from "fs";

export default async function handler(req, res) {
  const token = req.body?.token?.token;
  const { robotTxt } = req.body;
  const filePath = path.join(process.cwd(), "public", "robot.txt");
  try {
    switch (req.method) {
      case "POST":
        if (isLoggedIn(token)) {
          fs.writeFile(filePath, robotTxt, "utf8", (err) => {
            if (err) {
              res.json({
                status: false,
                message: "Update was not successful. Please try again.",
              });
              return;
            }
            res.json({
              status: true,
              message: "Updated successfully",
            });
          });
        } else {
          res.json({
            status: false,
            message: "Update was not successful. Please login again.",
          });
        }
        break;

      case "GET":
        if (!fs.existsSync(filePath)) {
          console.log("file not found");
          return;
        } else {
          fs.readFile(filePath, "utf-8", (err, data) => {
            err && console.log("some error occurd in file reading");
            res.json({ status: true, data });
          });
        }
    }
  } catch (error) {
    console.log("some error occurred", error);
  }
}
export const config = {
  api: {
    externalResolver: true,
  },
};
