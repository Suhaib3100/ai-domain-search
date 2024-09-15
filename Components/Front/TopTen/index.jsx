import { useSelector } from "react-redux";
import LogoGrid from "../../ReUsable/LogoGrid";
import HostingList from "../../ReUsable/HostingList";
import Table from "../../ReUsable/Table";
import Blog from "../../ReUsable/Blog";
import Hero_1 from "../../ReUsable/Front/Hero/Hero_1";
import Hero_2 from "../../ReUsable/Front/Hero/Hero_2";
import Hero_3 from "../../ReUsable/Front/Hero/Hero_3";
import Hero_4 from "../../ReUsable/Front/Hero/Hero_4";
import Hero_5 from "../../ReUsable/Front/Hero/Hero_5";
import Hero_6 from "../../ReUsable/Front/Hero/Hero_6";
import Hero_7 from "../../ReUsable/Front/Hero/Hero_7";
import Hero_8 from "../../ReUsable/Front/Hero/Hero_8";
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
import Hero_11 from "../../ReUsable/Front/Hero/Hero_11";
import Hero_10 from "../../ReUsable/Front/Hero/Hero_10";
import Hero_12 from "../../ReUsable/Front/Hero/Hero_12";
import Hero_13 from "../../ReUsable/Front/Hero/Hero_13";
import Hero_14 from "../../ReUsable/Front/Hero/Hero_14";
import Hero_15 from "../../ReUsable/Front/Hero/Hero_15";
import Hero_16 from "../../ReUsable/Front/Hero/Hero_16";
import Hero_17 from "../../ReUsable/Front/Hero/Hero_17";
import Hero_18 from "../../ReUsable/Front/Hero/Hero_18";
import Hero_19 from "../../ReUsable/Front/Hero/Hero_19";
import FAQ_1 from "../../ReUsable/Front/FAQ/FAQ_1";
import FAQ_2 from "../../ReUsable/Front/FAQ/FAQ_2";
import FAQ_3 from "../../ReUsable/Front/FAQ/FAQ_3";
import FAQ_4 from "../../ReUsable/Front/FAQ/FAQ_4";
import FAQ_5 from "../../ReUsable/Front/FAQ/FAQ_5";
import FAQ_6 from "../../ReUsable/Front/FAQ/FAQ_6";
import FAQ_7 from "../../ReUsable/Front/FAQ/FAQ_7";
import Ads from "../Ads";
export default function TopTen() {
  const pageData = useSelector((state) => state.pageData);
  return (
    <>
      {/* Hero section */}
      {/* <Hero2 data={pageData} /> */}
      <Hero_1 data={pageData?.hero_1} />
      <Hero_2 data={pageData?.hero_2} />
      <Hero_3 data={pageData?.hero_3} />
      <Hero_4 data={pageData?.hero_4} />
      <Hero_5 data={pageData?.hero_5} />
      <Hero_6 data={pageData?.hero_6} />
      <Hero_7 data={pageData?.hero_7} />
      <Hero_8 data={pageData?.hero_8} />
      {/* <Hero_9 data={pageData?.hero_9} /> */}
      <Hero_10 data={pageData?.hero_10} />
      <Hero_11 data={pageData?.hero_11} />
      <Hero_12 data={pageData?.hero_12} />
      <Hero_13 data={pageData?.hero_13} />
      <Hero_14 data={pageData?.hero_14} />
      <Hero_15 data={pageData?.hero_15} />
      <Hero_16 data={pageData?.hero_16} />
      <Hero_17 data={pageData?.hero_17} />
      <Hero_18 data={pageData?.hero_18} />
      <Hero_19 data={pageData?.hero_19} />

      {/* Ads Section*/}
      <Ads />
      {/* Call to action */}

      <CTA_1 data={pageData?.cta_1} />
      <CTA_2 data={pageData?.cta_2} />
      <CTA_3 data={pageData?.cta_3} />
      <CTA_4 data={pageData?.cta_4} />
      <CTA_5 data={pageData?.cta_5} />
      <CTA_6 data={pageData?.cta_6} />
      <CTA_7 data={pageData?.cta_7} />
      <CTA_8 data={pageData?.cta_8} />
      <CTA_9 data={pageData?.cta_9} />
      {/* <CTA2 data={pageData} /> */}
      {/* Blog section */}
      <Blog data={pageData?.content1?.content} />
      {/* Best hosting list */}
      <Ads />
      <HostingList data={pageData} />
      {/* Blog section */}
      <Blog data={pageData?.content2?.content} />

      <Table data={pageData} />
      {/* Stats */}
      <Stats_1 data={pageData?.stats_1} />
      <Stats_2 data={pageData?.stats_2} />
      <Stats_3 data={pageData?.stats_3} />
      <Stats_4 data={pageData?.stats_4} />
      <Stats_5 data={pageData?.stats_5} />
      <Stats_6 data={pageData?.stats_6} />
      <Stats_7 data={pageData?.stats_7} />

      {/* Hosting table */}
      <Ads />

      {/* Faq seciton */}
      <FAQ_1 data={pageData?.faq_1} />
      <FAQ_2 data={pageData?.faq_2} />
      <FAQ_3 data={pageData?.faq_3} />
      <FAQ_4 data={pageData?.faq_4} />
      <FAQ_5 data={pageData?.faq_5} />
      <FAQ_6 data={pageData?.faq_6} />
      <FAQ_7 data={pageData?.faq_7} />
      <Ads />
    </>
  );
}
