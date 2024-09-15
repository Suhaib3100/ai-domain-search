import axios from "axios";
import { useDispatch } from "react-redux";
import { setDnsPageData } from "../../Redux/reducer";
import DnsChecker from "../../Components/Front/DnsChecker";
import Head from "next/head";

export default function DN({ data }) {
  const dispatch = useDispatch();
  dispatch(setDnsPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <DnsChecker />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/dns-checker`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
