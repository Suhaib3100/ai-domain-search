import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import LogoList from "./LogoList";
import AddHostingLogo from "./AddHostingLogo";
import AddTitle from "./AddTitle";

export default function BestWooCommerceLogoGrid() {
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <CardBody>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="logo-list" title="Hosting Logo Grid">
              <AddTitle />
              <LogoList />
            </Tab>
            <Tab key="add-logo" title="Add Hosting Logo">
              <AddHostingLogo />
            </Tab>
          </Tabs>
        </div>
      </CardBody>
    </Card>
  );
}
