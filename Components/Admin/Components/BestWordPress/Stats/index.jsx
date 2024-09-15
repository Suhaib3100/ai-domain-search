import { Tabs, Tab, Card } from "@nextui-org/react";
import AdminStats_1 from "../../../../ReUsable/Admin/Stats/Stats_1";
import AdminStats_2 from "../../../../ReUsable/Admin/Stats/Stats_2";
import AdminStats_3 from "../../../../ReUsable/Admin/Stats/Stats_3";
import AdminStats_4 from "../../../../ReUsable/Admin/Stats/Stats_4";
import AdminStats_5 from "../../../../ReUsable/Admin/Stats/Stats_5";
import AdminStats_6 from "../../../../ReUsable/Admin/Stats/Stats_6";
import AdminStats_7 from "../../../../ReUsable/Admin/Stats/Stats_7";
export default function Stats() {
  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" size="lg" radius="md" fullWidth>
          <Tab key="stats_1" title="Stats 1">
            <AdminStats_1 dbCollection={"best-wp-hosting"} item={"stats_1"} />
          </Tab>
          <Tab key="stats_2" title="Stats 2">
            <AdminStats_2 dbCollection={"best-wp-hosting"} item={"stats_2"} />
          </Tab>
          <Tab key="stats_3" title="Stats 3">
            <AdminStats_3 dbCollection={"best-wp-hosting"} item={"stats_3"} />
          </Tab>
          <Tab key="stats_4" title="Stats 4">
            <AdminStats_4 dbCollection={"best-wp-hosting"} item={"stats_4"} />
          </Tab>
          <Tab key="stats_5" title="Stats 5">
            <AdminStats_5 dbCollection={"best-wp-hosting"} item={"stats_5"} />
          </Tab>
          <Tab key="stats_6" title="Stats 6">
            <AdminStats_6 dbCollection={"best-wp-hosting"} item={"stats_6"} />
          </Tab>
          <Tab key="stats_7" title="Stats 7">
            <AdminStats_7 dbCollection={"best-wp-hosting"} item={"stats_7"} />
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
