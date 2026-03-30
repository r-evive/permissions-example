'use client'

import { useUserSession } from "@/context/UserSession"
import { getAllPermissions, hasPermission } from "@/utils/permissions"

const usePermission = () => {
  const { userSession } = useUserSession()

  const can = (permission: string) => {
    if (!userSession?.role) return false

    const permissions = getAllPermissions(userSession.role, userSession.permissions)
    return hasPermission(permission, permissions)
  }

  return { can }
}

export default usePermission