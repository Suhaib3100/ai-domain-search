import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import HostingList from "./List";
import AddHosting from "./AddHosting";

export default function DedicatedHostingTable() {
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <CardBody>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="hosting-list" title="Hosting List">
              <HostingList />
            </Tab>
            <Tab key="add-hosting" title="Add Hosting">
              <AddHosting />
            </Tab>
          </Tabs>
        </div>
      </CardBody>
    </Card>
  );
}
