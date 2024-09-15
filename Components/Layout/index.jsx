import Layout from "../Admin/layout/layout";
import AdminLogin from "../Admin/Components/AdminLogin";
import { useSelector } from "react-redux";
import BestDedicated from "./List/BestDedicated";
import WhoisHosting from "./List/WhoisHosting";
import HomePage from "./List/HomePage";
import TopTen from "./List/TopTen";
import Blog from "./List/Blog";
import BestReseller from "./List/BestReseller";
import BestShared from "./List/BestShared";
import BestVPS from "./List/BestVPS";
import BestWooCommerce from "./List/BestWooCommerce";
import HostingCoupons from "./List/HostingCoupon";
import ExitModals from "./List/ExitModal";
import ServerLocation from "./List/ServerLocation";
import DnsChecker from "./List/DnsChecker";
import ReverseIP from "./List/ReverseIP";
import Footer from "./List/Footer";
import BestWordPress from "./List/BestWordPress";
import Logos from "./List/Logo";
import AdminCredential from "./List/Credentials";
import Databases from "./List/Database";
import Aboutus from "./List/AboutUs";
import Contactus from "./List/ContactUs";
import BestWordPressThemes from "./List/BestWPThemes";
import BestWordPressPlugin from "./List/BestWPPlugins";
import AdminStat from "./List/AdminStats";
import AiDomainGenerator from "./List/AiDomainGenerator";
import RandomWordAdmin from "./List/RandomWord";
import RandomLetterAdmin from "./List/RandomLetter";
import BulkDomainChecker from "./List/BulkDomainChecker";
import BulkHostingChecker from "./List/BulkHostingChecker";
import BulkWhoisChecker from "./List/BulkWhoisChecker";
import BulkLocationChecker from "./List/BulkLocationChecker";
import Whois from "./List/Whois";
import Ads from "./List/Ads";
import Affiliatelink from "./List/AffiliateLink";
import APIS from "./List/APIs";
import RobotTxtT from "./List/Robot.txt";
import AdvanceAi from "./List/AdvanceAi";

export default function MyLayout() {
  const loggedIn = useSelector((state) => state.loggedIn);
  return (
    <>
      {loggedIn ? (
        <Layout>
          {/* Admin Sidebar layout component */}
          <AdminStat />
          <HomePage />
          <WhoisHosting />
          <AiDomainGenerator />
          <AdvanceAi />

          <TopTen />
          <BestDedicated />
          <BestReseller />
          <BestShared />
          <BestVPS />
          <BestWordPress />
          <BestWooCommerce />

          <Blog />
          <HostingCoupons />

          <ExitModals />
          <ServerLocation />
          <DnsChecker />
          <ReverseIP />
          <Footer />
          <Logos />
          <AdminCredential />
          <Databases />
          <Aboutus />
          <Contactus />
          <BestWordPressThemes />
          <BestWordPressPlugin />
          <RandomWordAdmin />
          <RandomLetterAdmin />
          <BulkDomainChecker />
          <BulkHostingChecker />
          <BulkWhoisChecker />
          <BulkLocationChecker />
          <Whois />
          <Ads />
          <Affiliatelink />
          <APIS />
          <RobotTxtT />
        </Layout>
      ) : (
        <AdminLogin />
      )}
    </>
  );
}
