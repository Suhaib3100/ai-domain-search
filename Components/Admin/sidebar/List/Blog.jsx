import { useRouter } from "next/router";
import BalanceIcon from "../../icons/sidebar/balance-icon";
import CollapseItems from "../collapse-items";
import { v4 as uuidv4 } from "uuid";
export default function Blog() {
  const router = useRouter();
  return (
    <>
      <CollapseItems
        isActive={router.asPath.includes("post")}
        icon={<BalanceIcon />}
        items={[
          {
            text: "All Posts",
            link: "/admin/all-posts",
            bold: router.query.route === "all-posts",
          },
          {
            text: "Add New Post",
            bold: router.query.route === "add-new-post",
            link: `/admin/add-new-post?post_id=${uuidv4()}`,
          },
        ]}
        title="Blog"
      />
    </>
  );
}
