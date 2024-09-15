import { useRouter } from "next/router";
import Seo from "../../Admin/Components/WhoIsHosting/Seo";
import Hero from "../../Admin/Components/ContactUs/Hero";
import Messages from "../../Admin/Components/ContactUs/Messages";

export default function Contactus() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "contact-us-hero" ? (
        <Hero />
      ) : route === "contact-us-messages" ? (
        <Messages />
      ) : route === "contact-us-seo" ? (
        <Seo dbCollection={"contact-us"} />
      ) : (
        ""
      )}
    </>
  );
}
