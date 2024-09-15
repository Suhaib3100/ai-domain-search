import {
  faCheckDouble,
  faGlobe,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody } from "@nextui-org/react";

export default function Stats_7({ data = { enable: false } }) {
  return (
    <>
      {data?.enable && (
        <>
          <div className="px-2 sm:px-10 2xl:px-20 my-16">
            <div>
              <p
                className="text-center font-semibold text-4xl 2xl:text-5xl text-slate-700 dark:text-slate-400"
                style={{ fontFamily: "jost" }}
              >
                {data?.title || "#1 Domain Name Generator"}
              </p>
              <p className="text-center mt-3 mb-16">
                {data?.desc ||
                  "For Domainers, Bloggers, Ecommerce and Affiliate Teams"}
              </p>
            </div>

            <div
              justify="space-around"
              css={{ mb: "$20", mt: "$20", px: "$3", "@xs": { px: "$1" } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Card 1 */}
              <Card
                isPressable
                className="card1-bg rounded-[41px] min-h-[200px] 2xl:min-h-[300px]"
              >
                <CardBody className="py-8 px-6">
                  <div>
                    <FontAwesomeIcon
                      icon={faCheckDouble}
                      size={"50px"}
                      color="white"
                      className="text-start text-3xl 2xl:text-5xl"
                    />
                  </div>
                  <p
                    className="text-left text-lg text-white my-3 font-semibold"
                    style={{ fontFamily: "jost" }}
                  >
                    {data?.card1Title || "500+ TLDs"}
                  </p>
                  <p className="text-start text-white text-sm 2xl:text-lg">
                    {data?.card1Desc ||
                      "A domain availability check is a tool that allows you to search for the availability of a specific domain name. It helps you determine if a domain name is currently registered  or if it is available for istration."}
                  </p>
                </CardBody>
              </Card>
              {/* Card 2 */}
              <Card
                isPressable
                className="card2-bg rounded-[41px] min-h-[200px]"
              >
                <CardBody className="py-8 px-6">
                  <div>
                    <FontAwesomeIcon
                      icon={faListCheck}
                      size={"50px"}
                      color="white"
                      className="text-start text-3xl 2xl:text-5xl"
                    />
                  </div>
                  <p
                    className="text-left text-lg text-white my-3 font-semibold"
                    style={{ fontFamily: "jost" }}
                  >
                    {data?.card2Title || "500+ TLDs"}
                  </p>
                  <p className="text-start text-white text-sm 2xl:text-lg">
                    {data?.card2Desc ||
                      "A domain availability check is a tool that allows you to search for the availability of a specific domain name. It helps you determine if a domain name is currently registered  or if it is available for istration."}
                  </p>
                </CardBody>
              </Card>
              {/* Card 3 */}
              <Card
                isPressable
                className="card3-bg rounded-[41px] min-h-[200px]"
              >
                <CardBody className="py-8 px-6">
                  <div>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      size={"50px"}
                      color="white"
                      className="text-start text-3xl 2xl:text-5xl"
                    />
                  </div>
                  <p
                    className="text-left text-lg text-white my-3 font-semibold"
                    style={{ fontFamily: "jost" }}
                  >
                    {data?.card3Title || "500+ TLDs"}
                  </p>
                  <p className="text-start text-white text-sm 2xl:text-lg">
                    {data?.card3Desc ||
                      "A domain availability check is a tool that allows you to search for the availability of a specific domain name. It helps you determine if a domain name is currently registered  or if it is available for istration."}
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  );
}
