import { useDispatch } from "react-redux";
import TopTen from "../../Components/Front/TopTen";
import { setPageData } from "../../Redux/reducer";
import axios from "axios";
import Head from "next/head";

export default function TopTenHosting({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <TopTen />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/best-dedicated-hosting`)
    .then((res) => res.data);
  return {
    props: {
      data,
    },
  };
}
