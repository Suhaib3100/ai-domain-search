import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";
import { v4 as uuidv4 } from "uuid";
export default function AiDomainGenerator() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("ai-domain")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero",
            link: "/admin/ai-domain-generator-hero",
            bold: router.query.route === "ai-domain-generator-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "ai-domain-generator-stats",
            link: `/admin/ai-domain-generator-stats`,
          },
          {
            text: "CTA",
            bold: router.query.route === "ai-domain-generator-cta",
            link: `/admin/ai-domain-generator-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "ai-domain-generator-content",
            link: `/admin/ai-domain-generator-content`,
          },
          {
            text: "Features",
            bold: router.query.route === "ai-domain-generator-features",
            link: `/admin/ai-domain-generator-features`,
          },
          // {
          //   text: "Pricing",
          //   bold: router.query.route === "ai-domain-generator-pricing",
          //   link: `/admin/ai-domain-generator-pricing`,
          // },
          {
            text: "Faq",
            bold: router.query.route === "ai-domain-generator-faq",
            link: `/admin/ai-domain-generator-faq`,
          },
          // {
          //   text: "Ads",
          //   bold: router.query.route === "ai-domain-generator-ads",
          //   link: `/admin/ai-domain-generator-ads`,
          // },
          {
            text: "SEO",
            bold: router.query.route === "ai-domain-generator-seo",
            link: `/admin/ai-domain-generator-seo`,
          },
        ]}
        title="Ai Generator"
      />
    </>
  );
}
