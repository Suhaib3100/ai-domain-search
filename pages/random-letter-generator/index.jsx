import { useDispatch } from "react-redux";
import { setDomains, setPageData } from "../../Redux/reducer";
import Head from "next/head";
import axios from "axios";
import Random_Letter_Generator from "../../Components/Front/RandomLetterGenerator";

export default function RL({ data, randomLetter }) {
  const dispatch = useDispatch();
  dispatch(setPageData(data));
  dispatch(setDomains(randomLetter));

  return (
    <>
      <Head>
        <title>{data?.seo?.title}</title>
        <meta name="description" content={data?.seo?.metaDesc} />
      </Head>
      <Random_Letter_Generator />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const { host } = req.headers;
  const data = await axios
    .get(`http://${host}/api/random-letter-generator`)
    .then((res) => res.data);

  const randomLetter = await axios
    .post(`http://${host}/api/random-letter-generator/page-request`)
    .then((res) => res.data);

  return {
    props: {
      data,
      randomLetter,
    },
  };
}
