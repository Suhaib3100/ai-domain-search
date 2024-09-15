import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function ReverseIP() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("reverse-ip")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/reverse-ip-hero",
            bold: router.query.route === "reverse-ip-hero",
          },
          {
            text: "Stats",
            bold: router.query.route === "reverse-ip-stats",
            link: `/admin/reverse-ip-stats`,
          },

          {
            text: "Call to Action",
            bold: router.query.route === "reverse-ip-cta",
            link: `/admin/reverse-ip-cta`,
          },
          {
            text: "Content",
            bold: router.query.route === "reverse-ip-content",
            link: `/admin/reverse-ip-content`,
          },

          {
            text: "Features",
            bold: router.query.route === "reverse-ip-features",
            link: `/admin/reverse-ip-features`,
          },

          {
            text: "FAQ",
            bold: router.query.route === "reverse-ip-faq",
            link: `/admin/reverse-ip-faq`,
          },
          {
            text: "SEO",
            bold: router.query.route === "reverse-ip-seo",
            link: `/admin/reverse-ip-seo`,
          },
        ]}
        title="Reverse IP"
      />
    </>
  );
}
