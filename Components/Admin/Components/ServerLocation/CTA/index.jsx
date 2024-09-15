import { Tabs, Tab, Card } from "@nextui-org/react";
import AdminCTA_1 from "../../../../ReUsable/Admin/CTA/CTA_1";
import AdminCTA_2 from "../../../../ReUsable/Admin/CTA/CTA_2";
import AdminCTA_3 from "../../../../ReUsable/Admin/CTA/CTA_3";
import AdminCTA_4 from "../../../../ReUsable/Admin/CTA/CTA_4";
import AdminCTA_5 from "../../../../ReUsable/Admin/CTA/CTA_5";
import AdminCTA_6 from "../../../../ReUsable/Admin/CTA/CTA_6";
import AdminCTA_7 from "../../../../ReUsable/Admin/CTA/CTA_7";
import AdminCTA_8 from "../../../../ReUsable/Admin/CTA/CTA_8";
import AdminCTA_9 from "../../../../ReUsable/Admin/CTA/CTA_9";

export default function CTA() {
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
          <Tab key="cta_1" title="CTA 1">
            <AdminCTA_1 dbCollection={"hosting-location"} item={"cta_1"} />
          </Tab>

          <Tab key="cta_2" title="CTA 2">
            <AdminCTA_2 dbCollection={"hosting-location"} item={"cta_2"} />
          </Tab>
          <Tab key="cta_3" title="CTA 3">
            <AdminCTA_3 dbCollection={"hosting-location"} item={"cta_3"} />
          </Tab>
          <Tab key="cta_4" title="CTA 4">
            <AdminCTA_4 dbCollection={"hosting-location"} item={"cta_4"} />
          </Tab>
          <Tab key="cta_5" title="CTA 5">
            <AdminCTA_5 dbCollection={"hosting-location"} item={"cta_5"} />
          </Tab>
          <Tab key="cta_6" title="CTA 6">
            <AdminCTA_6 dbCollection={"hosting-location"} item={"cta_6"} />
          </Tab>
          <Tab key="cta_7" title="CTA 7">
            <AdminCTA_7 dbCollection={"hosting-location"} item={"cta_7"} />
          </Tab>
          <Tab key="cta_8" title="CTA 8">
            <AdminCTA_8 dbCollection={"hosting-location"} item={"cta_8"} />
          </Tab>
          <Tab key="cta_9" title="CTA 9">
            <AdminCTA_9
              dbCollection={"hosting-location"}
              storagePath={"images/hosting-location/cta-9"}
            />
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
