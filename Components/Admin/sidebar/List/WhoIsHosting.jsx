import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function WhoIsHosting() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("who-is-hosting")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/who-is-hosting-hero",
            bold: router.query.route === "who-is-hosting-hero",
          },
          {
            text: "Hosting Checker",
            bold: router.query.route === "who-is-hosting-checker",
            link: `/admin/who-is-hosting-checker`,
          },
          {
            text: "Stats",
            bold: router.query.route === "who-is-hosting-stats",
            link: `/admin/who-is-hosting-stats`,
          },
          {
            text: "Best Hosting List",
            bold: router.query.route === "who-is-hosting-best-host",
            link: `/admin/who-is-hosting-best-host`,
          },
          {
            text: "CTA",
            bold: router.query.route === "who-is-hosting-cta",
            link: `/admin/who-is-hosting-cta`,
          },
          {
            text: "Hosting Table",
            bold: router.query.route === "who-is-hosting-list",
            link: `/admin/who-is-hosting-list`,
          },
          {
            text: "Content",
            bold: router.query.route === "who-is-hosting-content",
            link: `/admin/who-is-hosting-content`,
          },
          {
            text: "Features List",
            bold: router.query.route === "who-is-hosting-features",
            link: `/admin/who-is-hosting-features`,
          },

          {
            text: "FAQ",
            bold: router.query.route === "who-is-hosting-faq",
            link: `/admin/who-is-hosting-faq`,
          },

          {
            text: "SEO",
            bold: router.query.route === "who-is-hosting-seo",
            link: `/admin/who-is-hosting-seo`,
          },
        ]}
        title="Who is Hosting"
      />
    </>
  );
}
