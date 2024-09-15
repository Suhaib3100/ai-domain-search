import axios from "axios";
import PostList from "../../Components/Front/Blog/PostList";
import Head from "next/head";

export default function Blogs({ posts, seo }) {
  return (
    <>
      <Head>
        <title>{seo?.seo?.title}</title>
        <meta name="description" content={seo?.seo?.metaDesc} />
      </Head>
      <PostList posts={posts} />
    </>
  );
}
export async function getServerSideProps({ req, query }) {
  const { host } = req.headers;
  const posts = await axios
    .get(`http://${host}/api/blog/add-new-post`)
    .then((res) => res.data);

  const seo = await axios
    .get(`http://${host}/api/blog/blog-seo`)
    .then((res) => res.data);
  return {
    props: {
      posts,
      seo,
    },
  };
}
