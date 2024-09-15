import { Tabs, Tab, Card } from "@nextui-org/react";
import AdminBannerAds_1 from "../../../../ReUsable/Admin/BannerAds/BannerAds_1";
import AdminBannerAds_2 from "../../../../ReUsable/Admin/BannerAds/BannerAds_2";
import AdminBannerAds_3 from "../../../../ReUsable/Admin/BannerAds/BannerAds_3";
import AdminBannerAds_4 from "../../../../ReUsable/Admin/BannerAds/BannerAds_4";

export default function BannerAds() {
  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" size="lg" radius="md" fullWidth>
          <Tab key="banner_1" title="Ads 1">
            <AdminBannerAds_1 dbCollection={"ai-generator"} item={"banner_1"} />
          </Tab>
          <Tab key="banner_2" title="Ads 2">
            <AdminBannerAds_2 dbCollection={"ai-generator"} item={"banner_2"} />
          </Tab>
          <Tab key="banner_3" title="Ads 3">
            <AdminBannerAds_3 dbCollection={"ai-generator"} item={"banner_3"} />
          </Tab>
          <Tab key="banner_4" title="Ads 4">
            <AdminBannerAds_4 dbCollection={"ai-generator"} item={"banner_4"} />
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
