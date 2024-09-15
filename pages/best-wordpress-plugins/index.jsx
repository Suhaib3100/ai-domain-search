import axios from "axios";
import BestWPPlugins from "../../Components/Front/BestWPPlugins";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";

export default function BWPP({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <BestWPPlugins />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/best-wp-plugins`)
    .then((res) => res.data);
  return {
    props: {
      data,
    },
  };
}
