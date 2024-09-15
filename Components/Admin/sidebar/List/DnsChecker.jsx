import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function DnsChecker() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("dns-checker")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/dns-checker-hero",
            bold: router.query.route === "dns-checker-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "dns-checker-stats",
            link: `/admin/dns-checker-stats`,
          },
          {
            text: "Call to Action",
            bold: router.query.route === "dns-checker-cta",
            link: `/admin/dns-checker-cta`,
          },

          {
            text: "Content",
            bold: router.query.route === "dns-checker-content",
            link: `/admin/dns-checker-content`,
          },

          {
            text: "Features",
            bold: router.query.route === "dns-checker-features",
            link: `/admin/dns-checker-features`,
          },
          {
            text: "FAQ",
            bold: router.query.route === "dns-checker-faq",
            link: `/admin/dns-checker-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "dns-checker-seo",
            link: `/admin/dns-checker-seo`,
          },
        ]}
        title="DNS Checker"
      />
    </>
  );
}
