import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("footer")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "Social Links",
            link: "/admin/footer",
            bold: router.query.route === "footer",
          },
        ]}
        title="Footer"
      />
    </>
  );
}
