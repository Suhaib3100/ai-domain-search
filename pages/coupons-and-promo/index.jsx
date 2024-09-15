import { useDispatch } from "react-redux";
import HostingCoupon from "../../Components/Front/HostingCoupon";
import { setPageData } from "../../Redux/reducer";
import axios from "axios";
import Head from "next/head";

export default function HC({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <HostingCoupon />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/hosting-coupon`)
    .then((res) => res.data);
  return {
    props: {
      data,
    },
  };
}
