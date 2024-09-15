import { useSelector } from "react-redux";
import ServerLocation from "./ServerLocation";
import RecentTable from "./RecentTable";

// import Content from "./Content";
import CTA_1 from "../../ReUsable/Front/CTA/CTA_1";
import CTA_2 from "../../ReUsable/Front/CTA/CTA_2";
import CTA_3 from "../../ReUsable/Front/CTA/CTA_3";
import CTA_4 from "../../ReUsable/Front/CTA/CTA_4";
import CTA_5 from "../../ReUsable/Front/CTA/CTA_5";
import CTA_6 from "../../ReUsable/Front/CTA/CTA_6";
import CTA_7 from "../../ReUsable/Front/CTA/CTA_7";
import CTA_8 from "../../ReUsable/Front/CTA/CTA_8";
import CTA_9 from "../../ReUsable/Front/CTA/CTA_9";
import Stats_1 from "../../ReUsable/Front/Stats/Stats_1";
import Stats_2 from "../../ReUsable/Front/Stats/Stats_2";
import Stats_3 from "../../ReUsable/Front/Stats/Stats_3";
import Stats_4 from "../../ReUsable/Front/Stats/Stats_4";
import Stats_5 from "../../ReUsable/Front/Stats/Stats_5";
import Stats_6 from "../../ReUsable/Front/Stats/Stats_6";
import Stats_7 from "../../ReUsable/Front/Stats/Stats_7";
import Feature_1 from "../../ReUsable/Front/Features/Feature_1";
import Feature_2 from "../../ReUsable/Front/Features/Feature_2";
import Feature_3 from "../../ReUsable/Front/Features/Feature_3";
import Feature_4 from "../../ReUsable/Front/Features/Feature_4";
import Feature_5 from "../../ReUsable/Front/Features/Feature_5";
import Feature_6 from "../../ReUsable/Front/Features/Feature_6";
import Feature_7 from "../../ReUsable/Front/Features/Feature_7";
import Feature_8 from "../../ReUsable/Front/Features/Feature_8";
import FAQ_1 from "../../ReUsable/Front/FAQ/FAQ_1";
import FAQ_2 from "../../ReUsable/Front/FAQ/FAQ_2";
import FAQ_3 from "../../ReUsable/Front/FAQ/FAQ_3";
import FAQ_4 from "../../ReUsable/Front/FAQ/FAQ_4";
import FAQ_5 from "../../ReUsable/Front/FAQ/FAQ_5";
import FAQ_6 from "../../ReUsable/Front/FAQ/FAQ_6";
import FAQ_7 from "../../ReUsable/Front/FAQ/FAQ_7";
import HeroForm_1 from "../../ReUsable/Front/HeroForm/HeroForm_1";
import HeroForm_2 from "../../ReUsable/Front/HeroForm/HeroForm_2";
import HeroForm_3 from "../../ReUsable/Front/HeroForm/HeroForm_3";
import HeroForm_4 from "../../ReUsable/Front/HeroForm/HeroForm_4";
import HeroForm_5 from "../../ReUsable/Front/HeroForm/HeroForm_5";
import HeroForm_6 from "../../ReUsable/Front/HeroForm/HeroForm_6";
import HeroForm_7 from "../../ReUsable/Front/HeroForm/HeroForm_7";
import HeroForm_8 from "../../ReUsable/Front/HeroForm/HeroForm_8";
import Blog from "../../ReUsable/Blog";
import Ads from "../Ads";
export default function HositngLocation() {
  const hostingLocationPageData = useSelector(
    (state) => state.hostingLocationPageData
  );
  return (
    <>
      <HeroForm_1
        hostingLocation
        placeholder="Type a Domain Name"
        data={hostingLocationPageData?.hero_form_1}
      />
      <HeroForm_2
        hostingLocation
        placeholder="Type a Domain Name"
        data={hostingLocationPageData?.hero_form_2}
      />
      <HeroForm_3
        hostingLocation
        placeholder="Type a Domain Name"
        data={hostingLocationPageData?.hero_form_3}
      />
      <HeroForm_4
        hostingLocation
        placeholder="Type a Domain Name"
        data={hostingLocationPageData?.hero_form_4}
      />
      <HeroForm_5
        hostingLocation
        placeholder="Type a Domain Name"
        data={hostingLocationPageData?.hero_form_5}
      />
      <HeroForm_6
        hostingLocation
        placeholder="Type a Domain Name"
        data={hostingLocationPageData?.hero_form_6}
      />
      <HeroForm_7
        hostingLocation
        placeholder="Type a Domain Name"
        data={hostingLocationPageData?.hero_form_7}
      />
      <HeroForm_8
        hostingLocation
        placeholder="Type a Domain Name"
        data={hostingLocationPageData?.hero_form_8}
      />
      <Ads />
      {/* Dns Record Section */}
      <ServerLocation />
      {/* Stats */}
      <Stats_1 data={hostingLocationPageData?.stats_1} />
      <Stats_2 data={hostingLocationPageData?.stats_2} />
      <Stats_3 data={hostingLocationPageData?.stats_3} />
      <Stats_4 data={hostingLocationPageData?.stats_4} />
      <Stats_5 data={hostingLocationPageData?.stats_5} />
      <Stats_6 data={hostingLocationPageData?.stats_6} />
      <Stats_7 data={hostingLocationPageData?.stats_7} />
      {/* Stats */}

      {/* Recent Checks table */}
      <RecentTable data={hostingLocationPageData} />
      {/* Call to Action */}
      <CTA_1 data={hostingLocationPageData?.cta_1} />
      <CTA_2 data={hostingLocationPageData?.cta_2} />
      <CTA_3 data={hostingLocationPageData?.cta_3} />
      <CTA_4 data={hostingLocationPageData?.cta_4} />
      <CTA_5 data={hostingLocationPageData?.cta_5} />
      <CTA_6 data={hostingLocationPageData?.cta_6} />
      <CTA_7 data={hostingLocationPageData?.cta_7} />
      <CTA_8 data={hostingLocationPageData?.cta_8} />
      <CTA_9 data={hostingLocationPageData?.cta_9} />

      {/* Call to Action */}

      <Blog data={hostingLocationPageData?.content?.content} />
      <Ads />
      {/* Feature */}
      <Feature_1 data={hostingLocationPageData?.features_1} />
      <Feature_2 data={hostingLocationPageData?.features_2} />
      <Feature_3 data={hostingLocationPageData?.features_3} />
      <Feature_4 data={hostingLocationPageData?.features_4} />
      <Feature_5 data={hostingLocationPageData?.features_5} />
      <Feature_6 data={hostingLocationPageData?.features_6} />
      <Feature_7 data={hostingLocationPageData?.features_7} />
      <Feature_8 data={hostingLocationPageData?.features_8} />
      {/* Feature */}

      {/* Faq */}
      <FAQ_1 data={hostingLocationPageData?.faq_1} />
      <FAQ_2 data={hostingLocationPageData?.faq_2} />
      <FAQ_3 data={hostingLocationPageData?.faq_3} />
      <FAQ_4 data={hostingLocationPageData?.faq_4} />
      <FAQ_5 data={hostingLocationPageData?.faq_5} />
      <FAQ_6 data={hostingLocationPageData?.faq_6} />
      <FAQ_7 data={hostingLocationPageData?.faq_7} />
      <Ads />
    </>
  );
}
