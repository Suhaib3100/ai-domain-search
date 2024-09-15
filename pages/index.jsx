import { useDispatch } from "react-redux";
import { setPageData } from "../Redux/reducer";
import Head from "next/head";
import HomePage from "../Components/Front/HomePage";
import axios from "axios";

const Home = ({ data, topTen }) => {
  const dispatch = useDispatch();
  dispatch(setPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <HomePage />
    </>
  );
};

export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/home-page`)
    .then((res) => res.data);

  // const topTen = await axios
  //   .get(`http://${host}/api/top-ten-hosting`)
  //   .then((res) => res.data);

  return {
    props: {
      data,
      // topTen,
    },
  };
}

export default Home;
