import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function Contactus() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("contact-us")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Hero Section",
            link: "/admin/contact-us-hero",
            bold: router.query.route === "contact-us-hero",
          },
          {
            text: "Messages",
            bold: router.query.route === "contact-us-messages",
            link: `/admin/contact-us-messages`,
          },

          {
            text: "SEO",
            bold: router.query.route === "contact-us-seo",
            link: `/admin/contact-us-seo`,
          },
        ]}
        title="Contact Us"
      />
    </>
  );
}
