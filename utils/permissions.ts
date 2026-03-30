import { Role, RolePermissions } from "@/types/types";

export enum Permission {
  ORDERS_VIEW = "orders:view",
  ORDERS_CREATE = "orders:create",
  ORDERS_MANAGE = "orders:manage",

  REPORTS_VIEW = "reports:view",
  REPORTS_CREATE = "reports:create",
  REPORTS_MANAGE = "reports:manage",

  INVOICES_VIEW = "invoices:view",
  INVOICES_CREATE = "invoices:create",
  INVOICES_MANAGE = "invoices:manage",

  SETTINGS_VIEW = "settings:view",
  SETTINGS_MANAGE = "settings:manage",
}

export type PermissionKeys = keyof typeof Permission

export const PermissionInheritance: Record<string, string[]> = {
  [Permission.ORDERS_CREATE]: [Permission.ORDERS_MANAGE],
  [Permission.ORDERS_VIEW]: [Permission.ORDERS_MANAGE, Permission.ORDERS_CREATE],

  [Permission.REPORTS_CREATE]: [Permission.REPORTS_MANAGE],
  [Permission.REPORTS_VIEW]: [Permission.REPORTS_MANAGE, Permission.REPORTS_CREATE],

  [Permission.INVOICES_CREATE]: [Permission.INVOICES_MANAGE],
  [Permission.INVOICES_VIEW]: [Permission.INVOICES_MANAGE, Permission.INVOICES_CREATE],

  [Permission.SETTINGS_VIEW]: [Permission.SETTINGS_MANAGE],
}


export const Permissions: RolePermissions = {
  [Role.ADMIN]: [Permission.ORDERS_MANAGE, Permission.REPORTS_MANAGE, Permission.INVOICES_MANAGE, Permission.SETTINGS_MANAGE],
  [Role.USER]: [Permission.ORDERS_VIEW, Permission.REPORTS_VIEW, Permission.INVOICES_VIEW, Permission.SETTINGS_VIEW],
  [Role.CUSTOM]: []
}

export const hasPermission = (permission: string, userPermissions: string[]): boolean => {
  if (userPermissions.includes(permission)) return true

  const inheritedPermissions = PermissionInheritance[permission]

  if (inheritedPermissions)
    return inheritedPermissions.some((inheritedPermission) => userPermissions.includes(inheritedPermission))

  return false
}

export const getAllPermissions = (role: Role, userPermissions: string[]): string[] => {
  return [...new Set([...Permissions[role], ...userPermissions])]
}
