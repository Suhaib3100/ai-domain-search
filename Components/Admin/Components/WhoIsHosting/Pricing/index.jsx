import { Tabs, Tab, Card } from "@nextui-org/react";
import AdminPricing_1 from "../../../../ReUsable/Pricing/Pricing_1";
import AdminPricing_2 from "../../../../ReUsable/Pricing/Pricing_2";
import AdminPricing_3 from "../../../../ReUsable/Pricing/Pricing_3";
import AdminPricing_4 from "../../../../ReUsable/Pricing/Pricing_4";
import AdminPricing_5 from "../../../../ReUsable/Pricing/Pricing_5";
import AdminPricing_6 from "../../../../ReUsable/Pricing/Pricing_6";
import AdminPricing_7 from "../../../../ReUsable/Pricing/Pricing_7";
import AdminPricing_8 from "../../../../ReUsable/Pricing/Pricing_8";
import AdminPricing_9 from "../../../../ReUsable/Pricing/Pricing_9";
import AdminPricing_10 from "../../../../ReUsable/Pricing/Pricing_10";
import AdminPricing_11 from "../../../../ReUsable/Pricing/Pricing_11";
import AdminPricing_12 from "../../../../ReUsable/Pricing/Pricing_12";

export default function Pricing() {
  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" size="lg" radius="md" fullWidth>
          <Tab key="pricing 1" title="Pricing 1">
            <AdminPricing_1
              dbCollection={"who-is-hosting"}
              item={"pricing_1"}
            />
          </Tab>
          <Tab key="pricing 2" title="Pricing 2">
            <AdminPricing_2
              dbCollection={"who-is-hosting"}
              item={"pricing_2"}
            />
          </Tab>
          <Tab key="pricing 3" title="Pricing 3">
            <AdminPricing_3
              dbCollection={"who-is-hosting"}
              item={"pricing_3"}
            />
          </Tab>
          <Tab key="pricing 4" title="Pricing 4">
            <AdminPricing_4
              dbCollection={"who-is-hosting"}
              item={"pricing_4"}
            />
          </Tab>
          <Tab key="pricing 5" title="Pricing 5">
            <AdminPricing_5
              dbCollection={"who-is-hosting"}
              item={"pricing_5"}
            />
          </Tab>
          <Tab key="pricing 6" title="Pricing 6">
            <AdminPricing_6
              dbCollection={"who-is-hosting"}
              item={"pricing_6"}
            />
          </Tab>
          <Tab key="pricing 7" title="Pricing 7">
            <AdminPricing_7
              dbCollection={"who-is-hosting"}
              item={"pricing_7"}
            />
          </Tab>
          <Tab key="pricing 8" title="Pricing 8">
            <AdminPricing_8
              dbCollection={"who-is-hosting"}
              item={"pricing_8"}
            />
          </Tab>
          <Tab key="pricing 9" title="Pricing 9">
            <AdminPricing_9
              dbCollection={"who-is-hosting"}
              item={"pricing_9"}
            />
          </Tab>
          <Tab key="pricing 10" title="Pricing 10">
            <AdminPricing_10
              dbCollection={"who-is-hosting"}
              item={"pricing_10"}
            />
          </Tab>
          <Tab key="pricing 11" title="Pricing 11">
            <AdminPricing_11
              dbCollection={"who-is-hosting"}
              item={"pricing_11"}
            />
          </Tab>
          <Tab key="pricing 12" title="Pricing 12">
            <AdminPricing_12
              dbCollection={"who-is-hosting"}
              item={"pricing_12"}
            />
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
