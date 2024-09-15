import { useDispatch } from "react-redux";
import { setDomains, setPageData } from "../../Redux/reducer";
import Head from "next/head";
import axios from "axios";
import Random_Word_Generator from "../../Components/Front/RandomWordGenerator";

export default function RW({ data, randomWord }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  dispatch(setDomains(randomWord));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <Random_Word_Generator />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/random-word-generator`)
    .then((res) => res.data);

  const randomWord = await axios
    .post(`http://${host}/api/random-word-generator/page-request`)
    .then((respond) => respond.data);

  return {
    props: {
      data,
      randomWord,
    },
  };
}
