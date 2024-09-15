import { useRouter } from "next/router";
import ExitModal from "../../Admin/Components/ExitModal";

export default function ExitModals() {
  const router = useRouter();
  const route = router.query.route;
  return <>{route === "mouse-exit-modal" ? <ExitModal /> : ""}</>;
}
