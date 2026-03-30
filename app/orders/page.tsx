'use client'

import usePermission from '@/hooks/usePermission'
import { Permission } from '@/utils/permissions'
import AccessAlert from '@/components/AccessAlert'

const OrdersPage = () => {
  const { can } = usePermission()

  const hasAccess = can(Permission.ORDERS_VIEW)
  const canCreate = can(Permission.ORDERS_CREATE)
  const canManage = can(Permission.ORDERS_MANAGE)

  return (
    <div className='space-y-4'>
      <AccessAlert hasAccess={hasAccess} requiredPermissions={[Permission.ORDERS_VIEW]} />
      <AccessAlert hasAccess={canCreate} requiredPermissions={[Permission.ORDERS_CREATE]} />
      <AccessAlert hasAccess={canManage} requiredPermissions={[Permission.ORDERS_MANAGE]} />
    </div>
  )
}

export default OrdersPage