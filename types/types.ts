import { LucideIcon } from "lucide-react";

export interface NavItem {
  id: number
  name: string
  href: string
  icon: LucideIcon
}

export enum HintVariant {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
  CUSTOM = "custom"
}

export type RolePermissions = Record<Role, string[]>

export interface UserSession {
  id: number
  name: string
  email: string
  role: Role
  permissions: string[]
}