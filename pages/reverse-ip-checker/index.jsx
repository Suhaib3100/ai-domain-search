import axios from "axios";
import { useDispatch } from "react-redux";
import { setReverseIPPageData } from "../../Redux/reducer";

import ReverseIP from "../../Components/Front/ReverseIP";
import Head from "next/head";

export default function RIP({ data }) {
  const dispatch = useDispatch();
  dispatch(setReverseIPPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <ReverseIP />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/reverse-ip`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
