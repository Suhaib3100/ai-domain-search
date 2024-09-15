import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";
export default function RandomLetterGenerator() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("random-letter")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Stats",
            bold: router.query.route === "random-letter-generator-stats",
            link: `/admin/random-letter-generator-stats`,
          },
          {
            text: "CTA",
            bold: router.query.route === "random-letter-generator-cta",
            link: `/admin/random-letter-generator-cta`,
          },
          {
            text: "Content",
            link: "/admin/random-letter-generator-content",
            bold: router.query.route === "random-letter-generator-content",
          },
          {
            text: "Features",
            bold: router.query.route === "random-letter-generator-features",
            link: `/admin/random-letter-generator-features`,
          },

          // {
          //   text: "Pricing",
          //   bold: router.query.route === "random-letter-generator-pricing",
          //   link: `/admin/random-letter-generator-pricing`,
          // },
          {
            text: "FAQ",
            bold: router.query.route === "random-letter-generator-faq",
            link: `/admin/random-letter-generator-faq`,
          },
          // {
          //   text: "Ads",
          //   bold: router.query.route === "random-letter-generator-ads",
          //   link: `/admin/random-letter-generator-ads`,
          // },
          {
            text: "SEO",
            bold: router.query.route === "random-letter-generator-seo",
            link: `/admin/random-letter-generator-seo`,
          },
        ]}
        title="Random Letter"
      />
    </>
  );
}
