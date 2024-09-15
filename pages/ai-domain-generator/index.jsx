import { useDispatch } from "react-redux";
import { setPageData } from "../../Redux/reducer";
import Head from "next/head";
import AI_Domain_Generator from "../../Components/Front/AiDomainGenerator";
import axios from "axios";

export default function AiDomainGenerator({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <AI_Domain_Generator />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/ai-domain-generator`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
