import { faCircleXmark, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setTextAds } from "../../../Redux/reducer";
import { Card, CardBody, Link } from "@nextui-org/react";
export default function TextAds() {
  const [show, setShow] = useState(true);
  const textAds = useSelector((state) => state?.textAds);
  const inputValue = useSelector((state) => state?.inputValue);
  const suggested = useSelector((state) => state?.suggested);
  const randomLetter = useSelector((state) => state?.randomLetter);
  const randomWord = useSelector((state) => state?.randomWord);
  const bulkDomain = useSelector((state) => state?.bulkDomain);
  const whois = useSelector((state) => state?.whois);
  const reverseIP = useSelector((state) => state?.reverseIP);
  const domainLocation = useSelector((state) => state?.domainLocation);
  const [txt, setTxt] = useState(
    "Skim the quotes and bullet point summaries within minutes"
  );
  const [link, setLink] = useState("#");

  const dispatch = useDispatch();

  // text ads settings
  useEffect(() => {
    if (
      inputValue ||
      suggested ||
      randomLetter ||
      randomWord ||
      bulkDomain ||
      whois ||
      reverseIP ||
      domainLocation
    ) {
      setTimeout(() => setShow(true), 5000);
    }
  }, [
    inputValue,
    suggested,
    randomLetter,
    randomWord,
    bulkDomain,
    whois,
    reverseIP,
    domainLocation,
  ]);

  // Get text ads settngs from the server
  useEffect(() => {
    axios.get("/api/text-ads").then((res) => {
      dispatch(setTextAds(res.data?.enableAds));
      const ads = res.data;

      ads?.enableAds &&
        (Math.floor(Math.random() * 5) === 1
          ? (setTxt(ads.textAds1), setLink(ads.adLink1))
          : Math.floor(Math.random() * 5) === 2
          ? (setTxt(ads.textAds2), setLink(ads.adLink2))
          : Math.floor(Math.random() * 5) === 3
          ? (setTxt(ads.textAds3), setLink(ads.adLink3))
          : Math.floor(Math.random() * 5) === 4
          ? (setTxt(ads.textAds4), setLink(ads.adLink4))
          : (setTxt(ads.textAds5), setLink(ads.adLink5)));
    });
  }, []);
  const handleClick = (e) => {
    axios.post("/api/domain-ads-clicked", { clicked: "ads-clicked" });
  };
  return (
    <div className="flex justify-center">
      {textAds ? ( //textAds
        <Card
          className={`mt-2 ${show ? "block" : "hidden"} w-full sm:w-[80%] `}
          isHoverable
        >
          <CardBody className=" py-1">
            <div className="flex justify-start items-center">
              <p className="font-semibold text-green-700">Ad.</p>
              <div className="flex justify-between items-center w-full">
                <Link
                  isBlock
                  color="secondary"
                  href={link || "#"}
                  isExternal
                  className="ml-3 py-0 w-full"
                >
                  <p onClick={handleClick}>{txt}</p>
                </Link>

                <FontAwesomeIcon
                  color="#ff6f3c"
                  className="adClose cursor-pointer"
                  icon={faCircleXmark}
                  size={"sm"}
                  onClick={(e) => setShow(false)}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}
