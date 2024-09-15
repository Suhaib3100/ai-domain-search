import CollapseItems from "../collapse-items";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import { useRouter } from "next/router";
export default function ExitModal() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("mouse-exit")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Mouse Exit Modal",
            link: "/admin/mouse-exit-modal",
            bold: router.query.route === "mouse-exit-modal",
          },
        ]}
        title="Mouse Exit Modal"
      />
    </>
  );
}
