import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";
import Head from "next/head";
import axios from "axios";
import Bulk_Domain_Checker from "../../Components/Front/BulkDomainChecker";

export default function BL({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <Bulk_Domain_Checker />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/bulk-domain-checker`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
