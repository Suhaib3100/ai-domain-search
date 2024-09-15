import { useRouter } from "next/router";
import SidebarItem from "../sidebar-item";
import SettingsIcon from "../../icons/sidebar/settings-icon";
export default function Logo() {
  const router = useRouter();
  return (
    <>
      <SidebarItem
        isActive={router.asPath === "/admin/logo"}
        title="Logo"
        href="/admin/logo"
        icon={<SettingsIcon />}
      />
    </>
  );
}
