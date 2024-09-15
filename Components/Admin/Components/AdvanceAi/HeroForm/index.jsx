import { Card } from "@nextui-org/react";

import AdminHeroForm_7 from "../../../../ReUsable/Admin/HeroForm/HeroForm_7";

export default function HeroForm() {
  return (
    <Card className="m-4 !border-0 overflow-xscroll" shadow="lg">
      <AdminHeroForm_7
        dbCollection={"advance-ai"}
        item={"hero_form_7"}
        header={"Advance Ai Header"}
      />
    </Card>
  );
}
