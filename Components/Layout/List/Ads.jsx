import { useRouter } from "next/router";
import GoogleAds from "../../Admin/Components/Ads";
import BannerAds from "../../Admin/Components/BannerAds";

export default function Ads() {
  const router = useRouter();
  const route = router.query.route;
  return (
    <>
      {route === "google-ads" ? (
        <GoogleAds />
      ) : route === "banner-ads" ? (
        <BannerAds />
      ) : (
        ""
      )}
    </>
  );
}
