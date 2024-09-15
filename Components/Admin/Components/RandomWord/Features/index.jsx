import { Tabs, Tab, Card } from "@nextui-org/react";
import AdminFeatures_1 from "../../../../ReUsable/Admin/Features/Features_1";
import AdminFeatures_2 from "../../../../ReUsable/Admin/Features/Features_2";
import AdminFeatures_3 from "../../../../ReUsable/Admin/Features/Features_3";
import AdminFeatures_4 from "../../../../ReUsable/Admin/Features/Features_4";
import AdminFeatures_5 from "../../../../ReUsable/Admin/Features/Features_5";
import AdminFeatures_6 from "../../../../ReUsable/Admin/Features/Features_6";
import AdminFeatures_7 from "../../../../ReUsable/Admin/Features/Features_7";
import AdminFeatures_8 from "../../../../ReUsable/Admin/Features/Features_8";

export default function Features() {
  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" size="lg" radius="md" fullWidth>
          <Tab key="feature_1" title="Feature 1">
            <AdminFeatures_1 dbCollection={"random-word"} item={"features_1"} />
          </Tab>
          <Tab key="feature_2" title="Feature 2">
            <AdminFeatures_2 dbCollection={"random-word"} item={"features_2"} />
          </Tab>
          <Tab key="feature_3" title="Feature 3">
            <AdminFeatures_3 dbCollection={"random-word"} item={"features_3"} />
          </Tab>
          <Tab key="feature_4" title="Feature 4">
            <AdminFeatures_4 dbCollection={"random-word"} item={"features_4"} />
          </Tab>
          <Tab key="feature_5" title="Feature 5">
            <AdminFeatures_5
              dbCollection={"random-word"}
              storagePath={"images/features/features-5"}
            />
          </Tab>
          <Tab key="feature_6" title="Feature 6">
            <AdminFeatures_6
              dbCollection={"random-word"}
              storagePath={"images/features/features-6"}
            />
          </Tab>
          <Tab key="feature_7" title="Feature 7">
            <AdminFeatures_7
              dbCollection={"random-word"}
              storagePath={"images/features/features-7"}
            />
          </Tab>
          <Tab key="feature_8" title="Feature 8">
            <AdminFeatures_8
              dbCollection={"random-word"}
              storagePath={"images/features/features-8"}
            />
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
