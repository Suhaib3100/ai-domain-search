import Head from "next/head";
import SavedDomains from "../../Components/Front/SavedDomains";

export default function SD() {
  return (
    <>
      <Head>
        <title>Saved Domains</title>
        <meta
          name="description"
          content="Your saved domains. Register, download in csv file."
        />
      </Head>
      <SavedDomains />
    </>
  );
}
