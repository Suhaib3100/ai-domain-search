import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";
import Head from "next/head";
import axios from "axios";
import Bulk_Domain_Location from "../../Components/Front/BulkDomainLocation";

export default function BulkLocation({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <Bulk_Domain_Location />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/bulk-location-checker`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
