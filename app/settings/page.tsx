'use client'

import usePermission from '@/hooks/usePermission'
import { Permission } from '@/utils/permissions'
import AccessAlert from '@/components/AccessAlert'

const SettingsPage = () => {
  const { can } = usePermission()

  const hasAccess = can(Permission.SETTINGS_VIEW)
  const canManage = can(Permission.SETTINGS_MANAGE)

  return (
    <div className='space-y-4'>
      <AccessAlert hasAccess={hasAccess} requiredPermissions={[Permission.SETTINGS_VIEW]} />
      <AccessAlert hasAccess={canManage} requiredPermissions={[Permission.SETTINGS_MANAGE]} />
    </div>
  )
}

export default SettingsPage