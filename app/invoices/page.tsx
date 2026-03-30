'use client'

import usePermission from '@/hooks/usePermission'
import { Permission } from '@/utils/permissions'
import AccessAlert from '@/components/AccessAlert'

const InvoicesPage = () => {
  const { can } = usePermission()

  const hasAccess = can(Permission.INVOICES_VIEW)
  const canCreate = can(Permission.INVOICES_CREATE)
  const canManage = can(Permission.INVOICES_MANAGE)

  return (
    <div className='space-y-4'>
      <AccessAlert hasAccess={hasAccess} requiredPermissions={[Permission.INVOICES_VIEW]} />
      <AccessAlert hasAccess={canCreate} requiredPermissions={[Permission.INVOICES_CREATE]} />
      <AccessAlert hasAccess={canManage} requiredPermissions={[Permission.INVOICES_MANAGE]} />
    </div>
  )
}

export default InvoicesPage