'use client'

import usePermission from '@/hooks/usePermission'
import { Permission } from '@/utils/permissions'
import AccessAlert from '@/components/AccessAlert'

const ReportsPage = () => {
  const { can } = usePermission()

  const hasAccess = can(Permission.REPORTS_VIEW)
  const canCreate = can(Permission.REPORTS_CREATE)
  const canManage = can(Permission.REPORTS_MANAGE)

  return (
    <div className='space-y-4'>
      <AccessAlert hasAccess={hasAccess} requiredPermissions={[Permission.REPORTS_VIEW]} />
      <AccessAlert hasAccess={canCreate} requiredPermissions={[Permission.REPORTS_CREATE]} />
      <AccessAlert hasAccess={canManage} requiredPermissions={[Permission.REPORTS_MANAGE]} />
    </div>
  )
}

export default ReportsPage