import Head from "next/head";
import OpenAiDomain from "../../Components/Front/OpenAi";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setPageData } from "../../Redux/reducer";

export default function OpenAI({ data }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <OpenAiDomain />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/ai-domain-generator/advance-ai`)
    .then((res) => res.data);

  return {
    props: {
      data,
    },
  };
}
