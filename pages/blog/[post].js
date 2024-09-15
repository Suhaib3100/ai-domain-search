import axios from "axios";
import Head from "next/head";
import Post from "../../Components/Front/Blog/Post";

export default function ReadPost({ post, allPost }) {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.meta} />
      </Head>
      <>
        <Post post={post} allPost={allPost} />
      </>
    </>
  );
}
export async function getServerSideProps({ req, query }) {
  const { post } = query;
  const { host } = req.headers;
  const pst = await axios
    .get(`http://${host}/api/blog/get-one-post`, { params: { post } })
    .then((res) => res.data);

  const allPost = await axios
    .get(`http://${host}/api/blog/add-new-post`)
    .then((res) => res.data);

  return {
    props: {
      post: pst,
      allPost,
    },
  };
}
