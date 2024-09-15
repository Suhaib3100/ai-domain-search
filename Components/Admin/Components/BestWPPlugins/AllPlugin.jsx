import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import PluginList from "./PluginList";
import AddPlugin from "./AddPlugin";

export default function AllWPPlugin() {
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <CardBody>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="Plugins" title="Plugins">
              <p className="text-xl font-semibold text-violet-700">
                All WordPress Plugins
              </p>
              <PluginList />
            </Tab>
            <Tab key="add-plugins" title="Add WP Plugin">
              <AddPlugin />
            </Tab>
          </Tabs>
        </div>
      </CardBody>
    </Card>
  );
}
