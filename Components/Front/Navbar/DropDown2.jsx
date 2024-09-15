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
export default function DropDown2() {
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
          Domain Tools
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
          href="/domain-whois-info"
          key="autoscaling"
          description="Check where a website is hosted on. Best webhosting checker tool"
          startContent={icons.scale}
        >
          Domain Who-is
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/dns-checker"
          key="usage_metrics"
          description="Check DNS records of a domain / server. Free and best DNS checker tool."
          startContent={icons.activity}
        >
          DNS Checker
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/hosting-server-location"
          key="hosting-server-location"
          description="Web hosting location checker. See server location on map. "
          startContent={icons.flash}
        >
          Domain Hosting Location
        </DropdownItem>
        <DropdownItem
          as={Link}
          href="/reverse-ip-checker"
          key="99_uptime"
          description="Applications stay on the grid with high availability and high uptime guarantees."
          startContent={icons.server}
        >
          Reverse IP Lookup
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
