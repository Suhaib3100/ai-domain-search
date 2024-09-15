import axios from "axios";
import { MongoClient } from "mongodb";
import path from "path";
import fs from "fs";
import OpenAI from "openai";
const filePath = path.join(process.cwd(), "db.json");

export default async function handler(req, res) {
  const data = fs.readFileSync(filePath, "utf-8");
  const database = JSON.parse(data);
  const client = new MongoClient(database.db);

  const {
    nameGroupValue,
    randomGroupValue,
    minLength,
    maxLength,
    includeWords,
    excludeWords,
    value,
  } = req.body;
  const prompt = (domainCount) =>
    `You are a domain name generator. Please generate domain names about ${value}. Naming style should be ${
      nameGroupValue === "auto"
        ? `any like you can generate any names about ${value}.`
        : nameGroupValue === "brandable"
        ? "brandable like Google, Rolex, Apple,Amazon, Intel, etc."
        : nameGroupValue === "evocative"
        ? "evocative like RedBull, Forever21, Dove, Nike, Patagonia, Starbucks, Twitter, Virgin, etc."
        : nameGroupValue === "compoundWords"
        ? "compound words like FedEx, Microsoft, Facebook, Youtube, LinkedIn, Hubspot, Fitbit, etc. "
        : nameGroupValue === "alternate"
        ? `alternating naming type like Lyft and Fiverr Quikr, Zomato,Airbnb, Shyp, Shipt, Reddit, Tumbler, Digg, etc. Use ${value}'s syntactical meaning, related words, closed meaning words.`
        : "Non English words name like Toyoto, Audi, Lakme, Samsung, Nokia, etc "
    } \n Naming randomness should be - ${
      randomGroupValue === "low"
        ? "Less randoom. The most direct name ideas and closed meaning names."
        : randomGroupValue === "medium"
        ? "Balanced. More creative results."
        : "Random ideas. More varied results"
    } \n Minimum length of the domain name is ${
      minLength || 4
    } and max length is ${maxLength || 20} ${
      includeWords &&
      `And please try to include these words or the semantice meaning of these words. [${includeWords}]`
    }${
      excludeWords &&
      `And please try to exclude these words but not semantic meaning of these words. [${excludeWords}]`
    } \n Generate at least ${
      domainCount || 20
    } domains. All names should be capitalize words with comma separated names. \n and Strictly output the result like 'name1,name2,name3`;
  try {
    await client.connect();
    const referer = req.headers["referer"] || "";
    const origin = req.headers["origin"] || "";

    const isAllowedDomain =
      referer.startsWith(database?.siteUrl) ||
      origin.startsWith(database?.siteUrl);

    if (isAllowedDomain) {
      const openAiApi = await client
        .db(database?.dbName)
        .collection("open-ai-api")
        .findOne({});

      const openai = new OpenAI({
        apiKey: openAiApi?.apiKey,
      });

      console.log(req.headers["referer"], req.headers["origin"]);

      const chatCompletion = await openai.chat.completions
        .create({
          messages: [{ role: "user", content: prompt(openAiApi?.domainCount) }],
          model: openAiApi?.model || "gpt-4o-mini",
        })
        .catch((err) => console.log(err));

      res.json(chatCompletion);
    } else {
      res.json({ status: false, message: "sorry, please try again" });
    }
  } catch (error) {
    console.error(error);
    res.json("An error occurred, please try again later");
  } finally {
    await client.close();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
