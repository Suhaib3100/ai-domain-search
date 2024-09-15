import axios from "axios";
import HositngLocation from "../../Components/Front/HostingLocation";
import { useDispatch } from "react-redux";
import { setHostingLocationPageData } from "../../Redux/reducer";
import Head from "next/head";

export default function HL({ data }) {
  const dispatch = useDispatch();

  dispatch(setHostingLocationPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <HositngLocation />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/hosting-location`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
