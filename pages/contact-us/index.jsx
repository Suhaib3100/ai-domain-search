import axios from "axios";
import Contactus from "../../Components/Front/ContactUs";
import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";
import Head from "next/head";

export default function CU({ seo }) {
  const dispatch = useDispatch();
  dispatch(setPageData(seo));
  return (
    <>
      <Head>
        <title>{seo?.seo?.title}</title>
        <meta name="description" content={seo?.seo?.metaDesc} />
      </Head>
      <Contactus />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const seo = await axios
    .get(`http://${host}/api/contact-us`)
    .then((res) => res.data);

  return {
    props: {
      seo,
    },
  };
}
