import { useRouter } from "next/router";

import AdminStats from "../../Admin/Components/AdminStats";

export default function AdminStat() {
  const router = useRouter();

  return <>{router.asPath === "/admin" ? <AdminStats /> : ""}</>;
}
