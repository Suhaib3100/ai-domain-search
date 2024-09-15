import { useRouter } from "next/router";
import RobotTxt from "../../Admin/Components/RobotTxt";

export default function RobotTxtT() {
  const router = useRouter();
  const route = router.query.route;
  return <>{route === "robot-txt-file" ? <RobotTxt /> : ""}</>;
}
