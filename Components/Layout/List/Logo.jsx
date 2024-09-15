import { useRouter } from "next/router";

import Logo from "../../Admin/Components/Logo";

export default function Logos() {
  const router = useRouter();
  const route = router.query.route;
  return <>{route === "logo" ? <Logo /> : ""}</>;
}
