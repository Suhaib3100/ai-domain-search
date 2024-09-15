import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";
export default function AdvanceAi() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("advance-ai")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero",
            link: "/admin/advance-ai-generator-hero",
            bold: router.query.route === "advance-ai-generator-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "advance-ai-generator-stats",
            link: `/admin/advance-ai-generator-stats`,
          },
          {
            text: "CTA",
            bold: router.query.route === "advance-ai-generator-cta",
            link: `/admin/advance-ai-generator-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "advance-ai-generator-content",
            link: `/admin/advance-ai-generator-content`,
          },
          {
            text: "Features",
            bold: router.query.route === "advance-ai-generator-features",
            link: `/admin/advance-ai-generator-features`,
          },
          ,
          {
            text: "Faq",
            bold: router.query.route === "advance-ai-generator-faq",
            link: `/admin/advance-ai-generator-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "advance-ai-generator-seo",
            link: `/admin/advance-ai-generator-seo`,
          },
        ]}
        title="Advance Ai"
      />
    </>
  );
}
