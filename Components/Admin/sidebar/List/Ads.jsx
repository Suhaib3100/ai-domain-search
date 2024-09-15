import { useRouter } from "next/router";
import SettingsIcon from "../../icons/sidebar/settings-icon";
import CollapseItems from "../collapse-items";

export default function Ads() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("ads")}
        icon={<SettingsIcon />}
        items={[
          {
            text: "Google Adsense",
            link: "/admin/google-ads",
            bold: router.query.route === "google-ads",
          },
          {
            text: "Banner Ads",
            bold: router.query.route === "banner-ads",
            link: `/admin/banner-ads`,
          },
        ]}
        title="Ads"
      />
    </>
  );
}
