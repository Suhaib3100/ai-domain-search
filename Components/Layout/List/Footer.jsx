import { useRouter } from "next/router";
import Footer from "../../Admin/Components/Footer";

export default function Footers() {
  const router = useRouter();
  const route = router.query.route;
  return <>{route === "footer" ? <Footer /> : ""}</>;
}
