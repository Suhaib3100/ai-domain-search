import { useRouter } from "next/router";
import SettingsIcon from "../../icons/sidebar/settings-icon";
import CollapseItems from "../collapse-items";

export default function APIs() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("api-setting")}
        icon={<SettingsIcon />}
        items={[
          {
            text: "Godaddy API",
            link: "/admin/godaddy-api-setting",
            bold: router.query.route === "godaddy-api-setting",
          },
          {
            text: "Sedo API",
            link: "/admin/sedo-api-setting",
            bold: router.query.route === "sedo-api-setting",
          },
          {
            text: "Open Ai API",
            link: "/admin/open-ai-api-setting",
            bold: router.query.route === "open-ai-api-setting",
          },
        ]}
        title="API"
      />
    </>
  );
}
