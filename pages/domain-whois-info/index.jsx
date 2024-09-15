import axios from "axios";
import { useDispatch } from "react-redux";
import { setWhoisPageData } from "../../Redux/reducer";
import Head from "next/head";
import Whois from "../../Components/Front/Whois";

export default function Who({ data }) {
  const dispatch = useDispatch();
  dispatch(setWhoisPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <Whois />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/whois`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
