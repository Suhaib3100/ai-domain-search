import { useDispatch } from "react-redux";
import AboutUs from "../../Components/Front/AboutUs";
import { setPageData } from "../../Redux/reducer";
import axios from "axios";
import Head from "next/head";

export default function Aboutus({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <AboutUs />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/about-us`)
    .then((res) => res.data);
  return {
    props: {
      data,
    },
  };
}
