import HostingInfo from "./HostingInfo";
import HostingList from "./HostingList";
import HostingTable from "./HostingTable";
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
import { useSelector } from "react-redux";
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
export default function WhoIsHosting() {
  const pageData = useSelector((state) => state?.pageData);
  return (
    <>
      {/* Hero section */}
      <HeroForm_1
        whoisHosting
        placeholder="Type a Domain Name"
        data={pageData?.hero_form_1}
      />
      <HeroForm_2
        whoisHosting
        placeholder="Type a Domain Name"
        data={pageData?.hero_form_2}
      />
      <HeroForm_3
        whoisHosting
        placeholder="Type a Domain Name"
        data={pageData?.hero_form_3}
      />
      <HeroForm_4
        whoisHosting
        placeholder="Type a Domain Name"
        data={pageData?.hero_form_4}
      />
      <HeroForm_5
        whoisHosting
        placeholder="Type a Domain Name"
        data={pageData?.hero_form_5}
      />
      <HeroForm_6
        whoisHosting
        placeholder="Type a Domain Name"
        data={pageData?.hero_form_6}
      />
      <HeroForm_7
        whoisHosting
        placeholder="Type a Domain Name"
        data={pageData?.hero_form_7}
      />
      <HeroForm_8
        whoisHosting
        placeholder="Type a Domain Name"
        data={pageData?.hero_form_8}
      />
      <Ads />
      {/* Hosting info */}
      <HostingInfo />
      {/* Stats */}
      <Stats_1 data={pageData?.stats_1} />
      <Stats_2 data={pageData?.stats_2} />
      <Stats_3 data={pageData?.stats_3} />
      <Stats_4 data={pageData?.stats_4} />
      <Stats_5 data={pageData?.stats_5} />
      <Stats_6 data={pageData?.stats_6} />
      <Stats_7 data={pageData?.stats_7} />
      {/* Stats */}
      {/* Hosting list */}
      <HostingList data={pageData} />
      {/* Call to Action */}
      <CTA_1 data={pageData?.cta_1} />
      <CTA_2 data={pageData?.cta_2} />
      <CTA_3 data={pageData?.cta_3} />
      <CTA_4 data={pageData?.cta_4} />
      <CTA_5 data={pageData?.cta_5} />
      <CTA_6 data={pageData?.cta_6} />
      <CTA_7 data={pageData?.cta_7} />
      <CTA_8 data={pageData?.cta_8} />
      <CTA_9 data={pageData?.cta_9} />

      {/* Call to Action */}
      {/* Hosting  table */}
      <HostingTable data={pageData} />

      <Blog data={pageData?.content?.content} />
      {/* Feature */}
      <Ads />
      <Feature_1 data={pageData?.features_1} />
      <Feature_2 data={pageData?.features_2} />
      <Feature_3 data={pageData?.features_3} />
      <Feature_4 data={pageData?.features_4} />
      <Feature_5 data={pageData?.features_5} />
      <Feature_6 data={pageData?.features_6} />
      <Feature_7 data={pageData?.features_7} />
      <Feature_8 data={pageData?.features_8} />
      {/* Feature */}

      {/* Faq */}
      <FAQ_1 data={pageData?.faq_1} />
      <FAQ_2 data={pageData?.faq_2} />
      <FAQ_3 data={pageData?.faq_3} />
      <FAQ_4 data={pageData?.faq_4} />
      <FAQ_5 data={pageData?.faq_5} />
      <FAQ_6 data={pageData?.faq_6} />
      <FAQ_7 data={pageData?.faq_7} />

      {/* Faq */}
      <Ads />
    </>
  );
}
