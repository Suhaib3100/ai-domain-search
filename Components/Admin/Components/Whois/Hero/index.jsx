import { Tabs, Tab, Card } from "@nextui-org/react";
import HeroAdmin_1 from "../../../../ReUsable/Admin/Hero/Hero_1";
import HeroAdmin_2 from "../../../../ReUsable/Admin/Hero/Hero_2";
import HeroAdmin_3 from "../../../../ReUsable/Admin/Hero/Hero_3";
import HeroAdmin_4 from "../../../../ReUsable/Admin/Hero/Hero_4";
import HeroAdmin_5 from "../../../../ReUsable/Admin/Hero/Hero_5";
import HeroAdmin_6 from "../../../../ReUsable/Admin/Hero/Hero_13";
import HeroAdmin_7 from "../../../../ReUsable/Admin/Hero/Hero_7";
import HeroAdmin_8 from "../../../../ReUsable/Admin/Hero/Hero_8";
import HeroAdmin_10 from "../../../../ReUsable/Admin/Hero/Hero_10";
import HeroAdmin_11 from "../../../../ReUsable/Admin/Hero/Hero_11";
import HeroAdmin_12 from "../../../../ReUsable/Admin/Hero/Hero_12";
import HeroAdmin_13 from "../../../../ReUsable/Admin/Hero/Hero_13";
import HeroAdmin_14 from "../../../../ReUsable/Admin/Hero/Hero_14";
import HeroAdmin_15 from "../../../../ReUsable/Admin/Hero/Hero_15";
import HeroAdmin_16 from "../../../../ReUsable/Admin/Hero/Hero_16";
import HeroAdmin_17 from "../../../../ReUsable/Admin/Hero/Hero_17";
import HeroAdmin_18 from "../../../../ReUsable/Admin/Hero/Hero_18";
import HeroAdmin_19 from "../../../../ReUsable/Admin/Hero/Hero_19";

export default function HomePageHero() {
  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          size="lg"
          radius="md"
          // className="overflow-scroll"
          fullWidth
        >
          <Tab key="hero_1" title="Hero 1">
            <HeroAdmin_1
              dbCollection={"whois"}
              storagePath={"images/whois/hero-1"}
            />
          </Tab>
          <Tab key="hero_2" title="Hero 2">
            <HeroAdmin_2 item={"hero_2"} dbCollection={"whois"} />
          </Tab>
          <Tab key="hero_3" title="Hero 3">
            <HeroAdmin_3 item={"hero_3"} dbCollection={"whois"} />
          </Tab>
          <Tab key="hero_4" title="Hero 4">
            <HeroAdmin_4
              dbCollection={"whois"}
              storagePath={"images/whois/hero-4"}
            />
          </Tab>
          <Tab key="hero_5" title="Hero 5">
            <HeroAdmin_5
              dbCollection={"whois"}
              storagePath={"images/whois/hero-5"}
            />
          </Tab>
          <Tab key="hero_6" title="Hero 6">
            <HeroAdmin_6
              dbCollection={"whois"}
              storagePath={"images/whois/hero-6"}
            />
          </Tab>
          <Tab key="hero_7" title="Hero 7">
            <HeroAdmin_7
              dbCollection={"whois"}
              storagePath={"images/whois/hero-7"}
            />
          </Tab>
          <Tab key="hero_8" title="Hero 8">
            <HeroAdmin_8
              dbCollection={"whois"}
              storagePath={"images/whois/hero-8"}
            />
          </Tab>
          <Tab key="hero_10" title="Hero 10">
            <HeroAdmin_10 item={"hero_10"} dbCollection={"whois"} />
          </Tab>
          <Tab key="hero_11" title="Hero 11">
            <HeroAdmin_11
              dbCollection={"whois"}
              storagePath={"images/whois/hero-11"}
            />
          </Tab>
          <Tab key="hero_12" title="Hero 12">
            <HeroAdmin_12 item={"hero_12"} dbCollection={"whois"} />
          </Tab>
          <Tab key="hero_13" title="Hero 13">
            <HeroAdmin_13
              dbCollection={"whois"}
              storagePath={"images/whois/hero-13"}
            />
          </Tab>
          <Tab key="hero_14" title="Hero 14">
            <HeroAdmin_14
              dbCollection={"whois"}
              storagePath={"images/whois/hero-14"}
            />
          </Tab>
          <Tab key="hero_15" title="Hero 15">
            <HeroAdmin_15
              dbCollection={"whois"}
              storagePath={"images/whois/hero-15"}
            />
          </Tab>
          <Tab key="hero_16" title="Hero 16">
            <HeroAdmin_16
              dbCollection={"whois"}
              storagePath={"images/whois/hero-16"}
            />
          </Tab>
          <Tab key="hero_17" title="Hero 17">
            <HeroAdmin_17
              dbCollection={"whois"}
              storagePath={"images/whois/hero-17"}
            />
          </Tab>
          <Tab key="hero_18" title="Hero 18">
            <HeroAdmin_18 item={"hero_18"} dbCollection={"whois"} />
          </Tab>
          <Tab key="hero_19" title="Hero 19">
            <HeroAdmin_19 item={"hero_19"} dbCollection={"whois"} />
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
