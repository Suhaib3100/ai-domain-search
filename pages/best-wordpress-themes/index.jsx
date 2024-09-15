import BestWPThemes from "../../Components/Front/BestWPThemes";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";
import axios from "axios";
export default function BWPT({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <BestWPThemes />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/best-wp-themes`)
    .then((res) => res.data);
  return {
    props: {
      data,
    },
  };
}
