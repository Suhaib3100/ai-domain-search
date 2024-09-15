import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import AddTheme from "./AddTheme";
import ThemeList from "./ThemeList";

export default function AllWPThemes() {
  return (
    <Card className="m-4 !border-0" shadow="lg">
      <CardBody>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="Themes" title="Themes">
              <p className="text-xl font-semibold text-violet-700">
                All WordPress Themes
              </p>
              <ThemeList />
            </Tab>
            <Tab key="add-themes" title="Add WP Theme">
              <AddTheme />
            </Tab>
          </Tabs>
        </div>
      </CardBody>
    </Card>
  );
}
