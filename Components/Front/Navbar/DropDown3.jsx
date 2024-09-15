import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons2.jsx";
import Link from "next/link.js";
export default function DropDown3() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          endContent={icons.chevron}
          radius="sm"
          variant="light"
        >
          Bulk Tools
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          as={Link}
          href="/bulk-domain-checker"
          key="autoscaling"
          description="Check domain names availability in bulk upto 500 domains simultaneously. Supports many extensions."
          startContent={icons.scale}
        >
          Bulk Domain Checker
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/bulk-domain-location-checker"
          key="usage_metrics"
          description="Check domain location in bulk mode. Supports Hundreds of domains."
          startContent={icons.activity}
        >
          Bulk Domain Location
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/bulk-domain-whois-checker"
          key="hosting-server-location"
          description="Check domain who-is record in bulk mode. Hundreds of domains checks simultaneously"
          startContent={icons.flash}
        >
          Bulk Whois Checker
        </DropdownItem>
        {/* <DropdownItem
          as={Link}
          href="/bulk-web-hosting-checker"
          key="99_uptime"
          description="Check hundreds of domain's hosting provider instantlly. Download the results."
          startContent={icons.server}
        >
          Bulk Webhosting Checker
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}
