import { useRouter } from "next/router";
import SettingsIcon from "../../icons/sidebar/settings-icon";
import CollapseItems from "../collapse-items";

export default function RobotTxt() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("robot")}
        icon={<SettingsIcon />}
        items={[
          {
            text: "Sitemap & Robot.txt",
            link: "/admin/robot-txt-file",
            bold: router.query.route === "robot-txt-file",
          },
        ]}
        title="Sitemap"
      />
    </>
  );
}
