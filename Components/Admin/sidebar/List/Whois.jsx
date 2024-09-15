import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";
import { v4 as uuidv4 } from "uuid";
export default function Whois() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("whois")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero",
            link: "/admin/whois-hero",
            bold: router.query.route === "whois-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "whois-stats",
            link: `/admin/whois-stats`,
          },
          {
            text: "CTA",
            bold: router.query.route === "whois-cta",
            link: `/admin/whois-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "whois-content",
            link: `/admin/whois-content`,
          },
          {
            text: "Features",
            bold: router.query.route === "whois-features",
            link: `/admin/whois-features`,
          },

          {
            text: "FAQ",
            bold: router.query.route === "whois-faq",
            link: `/admin/whois-faq`,
          },
          // {
          //   text: "Ads",
          //   bold: router.query.route === "whois-ads",
          //   link: `/admin/whois-ads`,
          // },
          {
            text: "SEO",
            bold: router.query.route === "whois-seo",
            link: `/admin/whois-seo`,
          },
        ]}
        title="Whois Info"
      />
    </>
  );
}
