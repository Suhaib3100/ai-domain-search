import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import HostingList from "./HostingList";
import AddHosting from "./AddHosting";

export default function RecommendedHost() {
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <CardBody>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="hosting-list" title="Hosting List">
              <p className="text-xl font-semibold text-violet-700">
                Hosting Table List
              </p>
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
