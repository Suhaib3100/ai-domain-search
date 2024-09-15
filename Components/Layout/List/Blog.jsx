import { useRouter } from "next/router";
import AddNewPost from "../../Admin/Components/Blog/AddNewPost";
import EditPost from "../../Admin/Components/Blog/EditPost";
import Blog from "../../Admin/Components/Blog";

export default function Blogs() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "all-posts" ? (
        <Blog />
      ) : route === "add-new-post" ? (
        <AddNewPost />
      ) : route === "edit-post" ? (
        <EditPost />
      ) : (
        ""
      )}
    </>
  );
}
