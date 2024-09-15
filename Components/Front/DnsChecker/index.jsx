import RecentTable from "./RecentTable";
import DnsInfo from "./DnsInfo";
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
export default function DnsChecker() {
  const dnsPageData = useSelector((state) => state?.dnsPageData);
  return (
    <>
      {/* Hero Section */}
      {/* Hero section */}
      <HeroForm_1
        dnsChecker
        placeholder="Type a Domain Name"
        data={dnsPageData?.hero_form_1}
      />
      <HeroForm_2
        dnsChecker
        placeholder="Type a Domain Name"
        data={dnsPageData?.hero_form_2}
      />
      <HeroForm_3
        dnsChecker
        placeholder="Type a Domain Name"
        data={dnsPageData?.hero_form_3}
      />
      <HeroForm_4
        dnsChecker
        placeholder="Type a Domain Name"
        data={dnsPageData?.hero_form_4}
      />
      <HeroForm_5
        dnsChecker
        placeholder="Type a Domain Name"
        data={dnsPageData?.hero_form_5}
      />
      <HeroForm_6
        dnsChecker
        placeholder="Type a Domain Name"
        data={dnsPageData?.hero_form_6}
      />
      <HeroForm_7
        dnsChecker
        placeholder="Type a Domain Name"
        data={dnsPageData?.hero_form_7}
      />
      <HeroForm_8
        dnsChecker
        placeholder="Type a Domain Name"
        data={dnsPageData?.hero_form_8}
      />
      <Ads />
      {/* Dns Record Section */}
      <DnsInfo />
      <Stats_1 data={dnsPageData?.stats_1} />
      <Stats_2 data={dnsPageData?.stats_2} />
      <Stats_3 data={dnsPageData?.stats_3} />
      <Stats_4 data={dnsPageData?.stats_4} />
      <Stats_5 data={dnsPageData?.stats_5} />
      <Stats_6 data={dnsPageData?.stats_6} />
      <Stats_7 data={dnsPageData?.stats_7} />
      {/* Recent Checks table */}
      <RecentTable data={dnsPageData} />

      {/* Stats */}

      {/* Stats */}
      {/* Call to Action */}
      <CTA_1 data={dnsPageData?.cta_1} />
      <CTA_2 data={dnsPageData?.cta_2} />
      <CTA_3 data={dnsPageData?.cta_3} />
      <CTA_4 data={dnsPageData?.cta_4} />
      <CTA_5 data={dnsPageData?.cta_5} />
      <CTA_6 data={dnsPageData?.cta_6} />
      <CTA_7 data={dnsPageData?.cta_7} />
      <CTA_8 data={dnsPageData?.cta_8} />
      <CTA_9 data={dnsPageData?.cta_9} />
      <Ads />
      {/* Call to Action */}
      <Blog data={dnsPageData?.content?.content} />
      {/* Feature */}
      <Feature_1 data={dnsPageData?.features_1} />
      <Feature_2 data={dnsPageData?.features_2} />
      <Feature_3 data={dnsPageData?.features_3} />
      <Feature_4 data={dnsPageData?.features_4} />
      <Feature_5 data={dnsPageData?.features_5} />
      <Feature_6 data={dnsPageData?.features_6} />
      <Feature_7 data={dnsPageData?.features_7} />
      <Feature_8 data={dnsPageData?.features_8} />
      {/* Feature */}

      {/* Faq */}
      <FAQ_1 data={dnsPageData?.faq_1} />
      <FAQ_2 data={dnsPageData?.faq_2} />
      <FAQ_3 data={dnsPageData?.faq_3} />
      <FAQ_4 data={dnsPageData?.faq_4} />
      <FAQ_5 data={dnsPageData?.faq_5} />
      <FAQ_6 data={dnsPageData?.faq_6} />
      <FAQ_7 data={dnsPageData?.faq_7} />

      {/* Faq */}
      <Ads />
    </>
  );
}
