import { Adsense } from "@ctrl/react-adsense";
import { useSelector } from "react-redux";
import { Image, Link } from "@nextui-org/react";

export default function Ads() {
  const bannerAds = useSelector((state) => state?.bannerAds);
  const googleAds = useSelector((state) => state?.googleAds);

  // send ads clicked data to the server
  const handleClick = (e) => {
    // axios.post("/api/domain-ads-clicked", { clicked: "ads-clicked" });
  };

  return (
    <div className="w-full text-center ">
      {/* google Adsense */}
      {/* {googleAds && googleAds?.googleAds?.enableAds ? (
        <div className="my-5" onClick={handleClick}>
          <Adsense
            client={googleAds?.googleAds?.clientID || ""}
            slot={googleAds?.googleAds?.slotID || ""}
            format="auto"
            responsive="true"
            style={{ display: "block" }}
          />
        </div>
      ) : (
        ""
      )} */}

      {/* banner ads */}
      {bannerAds && bannerAds?.bannerAds?.enableAds ? (
        <div className="my-5 px-4 text-center">
          <Link
            href={bannerAds?.bannerAds?.affiliateLink || "#"}
            target="_blank"
          >
            <Image
              onClick={handleClick}
              src={
                bannerAds?.bannerAds?.bannerCdnLink ||
                bannerAds?.bannerAds?.bannerImage?.split("public")[1]
              }
              alt="Banner Ads Image"
              objectFit="none"
            />
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
