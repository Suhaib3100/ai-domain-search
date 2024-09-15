import { Tabs, Tab, Card, CardBody, Divider, Spacer } from "@nextui-org/react";
import HostingList from "./List";
import AddHosting from "./AddHosting";
import ListTitle from "./ListTitle";

export default function DedicatedHostList() {
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <CardBody>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="hosting-list" title="Hosting List">
              <ListTitle />
              <Spacer y={2} />
              <Divider />
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
