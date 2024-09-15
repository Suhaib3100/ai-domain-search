import { Tabs, Tab, Card } from "@nextui-org/react";
import AdminHeroForm_1 from "../../../../ReUsable/Admin/HeroForm/HeroForm_1";
import AdminHeroForm_2 from "../../../../ReUsable/Admin/HeroForm/HeroForm_2";
import AdminHeroForm_3 from "../../../../ReUsable/Admin/HeroForm/HeroForm_3";
import AdminHeroForm_4 from "../../../../ReUsable/Admin/HeroForm/HeroForm_4";
import AdminHeroForm_5 from "../../../../ReUsable/Admin/HeroForm/HeroForm_5";
import AdminHeroForm_6 from "../../../../ReUsable/Admin/HeroForm/HeroForm_6";
import AdminHeroForm_7 from "../../../../ReUsable/Admin/HeroForm/HeroForm_7";
import AdminHeroForm_8 from "../../../../ReUsable/Admin/HeroForm/HeroForm_8";

export default function HeroForm() {
  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" size="lg" radius="md" fullWidth>
          <Tab key="hero-1" title="Hero 1">
            <AdminHeroForm_1 dbCollection={"whois"} item={"hero_form_1"} />
          </Tab>
          <Tab key="hero-2" title="Hero 2">
            <AdminHeroForm_2 dbCollection={"whois"} item={"hero_form_2"} />
          </Tab>
          <Tab key="hero-3" title="Hero 3">
            <AdminHeroForm_3
              dbCollection={"whois"}
              storagePath={"images/whois/hero-form-3"}
            />
          </Tab>
          <Tab key="hero-4" title="Hero 4">
            <AdminHeroForm_4 dbCollection={"whois"} item={"hero_form_4"} />
          </Tab>
          <Tab key="hero-5" title="Hero 5">
            <AdminHeroForm_5 dbCollection={"whois"} item={"hero_form_5"} />
          </Tab>
          <Tab key="hero-6" title="Hero 6">
            <AdminHeroForm_6 dbCollection={"whois"} item={"hero_form_6"} />
          </Tab>
          <Tab key="hero-7" title="Hero 7">
            <AdminHeroForm_7 dbCollection={"whois"} item={"hero_form_7"} />
          </Tab>
          <Tab key="hero-8" title="Hero 8">
            <AdminHeroForm_8 dbCollection={"whois"} item={"hero_form_8"} />
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
