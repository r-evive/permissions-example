import { NavItem } from "@/types/types";
import { BoxIcon, ChartAreaIcon, HomeIcon, PaperclipIcon, SettingsIcon } from "lucide-react";

export const NavItems: NavItem[] = [
  {
    id: 1,
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "Orders",
    href: "/orders",
    icon: BoxIcon,
  },
  {
    id: 3,
    name: "Reports",
    href: "/reports",
    icon: ChartAreaIcon,
  },
  {
    id: 4,
    name: "Invoices",
    href: "/invoices",
    icon: PaperclipIcon,
  },
  {
    id: 5,
    name: "Settings",
    href: "/settings",
    icon: SettingsIcon,
  }
]

const normalizePath = (path: string): string => {
  const trimmed = path.trim();

  if (!trimmed.startsWith("/"))
    return `/${trimmed}`;

  return trimmed;
};

export const isRouteActive = (currentPath: string, href: string): boolean => {
  const normalizedCurrentPath = normalizePath(currentPath);
  const normalizedHref = normalizePath(href);

  if (normalizedHref === "/") 
    return normalizedCurrentPath === "/";

  return (
    normalizedCurrentPath === normalizedHref ||
    normalizedCurrentPath.startsWith(`${normalizedHref}/`)
  );
};