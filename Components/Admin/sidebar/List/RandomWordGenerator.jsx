import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";
import { v4 as uuidv4 } from "uuid";
export default function RandomWordGenerator() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("random-word")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Stats",
            bold: router.query.route === "random-word-generator-stats",
            link: `/admin/random-word-generator-stats`,
          },
          {
            text: "CTA",
            bold: router.query.route === "random-word-generator-cta",
            link: `/admin/random-word-generator-cta`,
          },
          {
            text: "Content",
            link: "/admin/random-word-generator-content",
            bold: router.query.route === "random-word-generator-content",
          },
          {
            text: "Features",
            bold: router.query.route === "random-word-generator-features",
            link: `/admin/random-word-generator-features`,
          },
          // {
          //   text: "Pricing",
          //   bold: router.query.route === "random-word-generator-pricing",
          //   link: `/admin/random-word-generator-pricing`,
          // },
          {
            text: "FAQ",
            bold: router.query.route === "random-word-generator-faq",
            link: `/admin/random-word-generator-faq`,
          },
          // {
          //   text: "Ads",
          //   bold: router.query.route === "random-word-generator-ads",
          //   link: `/admin/random-word-generator-ads`,
          // },
          {
            text: "SEO",
            bold: router.query.route === "random-word-generator-seo",
            link: `/admin/random-word-generator-seo`,
          },
        ]}
        title="Random Word"
      />
    </>
  );
}
