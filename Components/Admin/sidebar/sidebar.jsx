import React from "react";
import Sidebar from "./sidebar.styles";
import { Image, Link } from "@nextui-org/react";
import HomeIcon from "../icons/sidebar/home-icon";
import SidebarItem from "./sidebar-item";
import SidebarMenu from "./sidebar-menu";
import useSidebarContext from "../layout/useSidebarContext";
import { useRouter } from "next/router";
import BestDedicated from "./List/BestDedicated";
import BestReseller from "./List/BestReseller";
import BestShared from "./List/BestShared";
import BestVPS from "./List/BestVPS";
import BestWooCommerce from "./List/BestWooCommerce";
import TopTen from "./List/TopTen";
import WhoIsHosting from "./List/WhoIsHosting";
import Blog from "./List/Blog";
import BestWordPress from "./List/BestWordPress";
import HostingCoupon from "./List/HostingCoupon";
import ExitModal from "./List/ExitModal";
import ServerLocation from "./List/ServerLocaton";
import DnsChecker from "./List/DnsChecker";
import ReverseIP from "./List/ReverseIP";
import Footer from "./List/Footer";
import Logo from "./List/Logo";
import Credentials from "./List/Credentials";
import DataBases from "./List/Database";
import AboutUs from "./List/AboutUs";
import Contactus from "./List/ContactUs";
import BestWPThemes from "./List/BestWPThemes";
import BestWPPlugins from "./List/BestWPPlugins";
import HomePage from "./List/HomePage";
import AiDomainGenerator from "./List/AiDomainGenerator";
import RandomWordGenerator from "./List/RandomWordGenerator";
import RandomLetterGenerator from "./List/RandomLetterGenerator";
import BulkDomain from "./List/BulkDomain";
import BulkHosting from "./List/BulkHosting";
import BulkWhois from "./List/BulkWhois";
import BulkLocation from "./List/BulkLocation";
import Whois from "./List/Whois";
import Ads from "./List/Ads";
import AffiliateLink from "./List/AffiliateLink";
import APIs from "./List/APIs";
import RobotTxt from "./List/RobotTxt";
import AdvanceAi from "./List/AdvanceAi";
export default function SidebarWrapper() {
  const router = useRouter();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[202] sticky top-0  custom-scrollbar ">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={`${Sidebar({
          collapsed: collapsed,
        })} bg-gradient-to-r from-blue-800 to-violet-800`}
      >
        <div className={Sidebar.Header()}>
          {/* <CompaniesDropdown /> */}
          <Link className="" href="/" aria-label="Brand">
            <Image
              width={250}
              // height={50}
              alt="Your site logo"
              src="/images/logo/logo/logo.png"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Stats"
              icon={<HomeIcon />}
              isActive={router.pathname === "/admin"}
              href="/admin"
            />
            <SidebarMenu title="Settings">
              <DataBases />
              <Credentials />
              <Logo />
              <Ads />
              <AffiliateLink />
              <APIs />
              <RobotTxt />
            </SidebarMenu>
            {/* Lists  */}
            <SidebarMenu title="Pages">
              <HomePage />
              <Blog />
              <AboutUs />
              <Footer />
              <Contactus />
              <ExitModal />
            </SidebarMenu>

            <SidebarMenu title="Tools">
              <AiDomainGenerator />
              <AdvanceAi />
              <RandomWordGenerator />
              <RandomLetterGenerator />
              {/* <WhoIsHosting /> */}

              <Whois />
              <DnsChecker />
              <ServerLocation />
              <ReverseIP />

              <BulkDomain />
              <BulkLocation />
              <BulkWhois />
              {/* <BulkHosting /> */}
            </SidebarMenu>

            <SidebarMenu title="Best Hosting">
              <BestShared />
              <BestVPS />
              <BestDedicated />
              <BestWooCommerce />
              <BestReseller />
              <TopTen />
            </SidebarMenu>

            <SidebarMenu title="WordPress">
              <BestWordPress />
              <BestWPThemes />
              <BestWPPlugins />
            </SidebarMenu>
            <SidebarMenu title="Coupons & Promo">
              <HostingCoupon />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}></div>
        </div>
      </div>
    </aside>
  );
}
