import { useRouter } from "next/router";
import SettingsIcon from "../../icons/sidebar/settings-icon";
import CollapseItems from "../collapse-items";

export default function AffiliateLink() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("affiliate-links")}
        icon={<SettingsIcon />}
        items={[
          {
            text: "Affiliate Links",
            link: "/admin/affiliate-links",
            bold: router.query.route === "affiliate-links",
          },
        ]}
        title="Affiliate Links"
      />
    </>
  );
}
