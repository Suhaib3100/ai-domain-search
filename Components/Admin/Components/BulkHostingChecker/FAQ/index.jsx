import { Tabs, Tab, Card } from "@nextui-org/react";
import AdminFaq_1 from "../../../../ReUsable/Admin/FAQ/Faq_1";
import AdminFaq_2 from "../../../../ReUsable/Admin/FAQ/Faq_2";
import AdminFaq_3 from "../../../../ReUsable/Admin/FAQ/Faq_3";
import AdminFaq_4 from "../../../../ReUsable/Admin/FAQ/Faq_4";
import AdminFaq_5 from "../../../../ReUsable/Admin/FAQ/Faq_5";
import AdminFaq_6 from "../../../../ReUsable/Admin/FAQ/Faq_6";
import AdminFaq_7 from "../../../../ReUsable/Admin/FAQ/Faq_7";

export default function FAQ() {
  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options" size="lg" radius="md" fullWidth>
          <Tab key="FAQ_1" title="FAQ 1">
            <AdminFaq_1 dbCollection={"bulk-hosting"} item={"faq_1"} />
          </Tab>
          <Tab key="FAQ_2" title="FAQ 2">
            <AdminFaq_2 dbCollection={"bulk-hosting"} item={"faq_2"} />
          </Tab>
          <Tab key="FAQ_3" title="FAQ 3">
            <AdminFaq_3 dbCollection={"bulk-hosting"} item={"faq_3"} />
          </Tab>
          <Tab key="FAQ_4" title="FAQ 4">
            <AdminFaq_4 dbCollection={"bulk-hosting"} item={"faq_4"} />
          </Tab>
          <Tab key="FAQ_5" title="FAQ 5">
            <AdminFaq_5 dbCollection={"bulk-hosting"} item={"faq_5"} />
          </Tab>
          <Tab key="FAQ_6" title="FAQ 6">
            <AdminFaq_6 dbCollection={"bulk-hosting"} item={"faq_6"} />
          </Tab>
          <Tab key="FAQ_7" title="FAQ 7">
            <AdminFaq_7 dbCollection={"bulk-hosting"} item={"faq_7"} />
          </Tab>
        </Tabs>
      </div>
    </Card>
  );
}
