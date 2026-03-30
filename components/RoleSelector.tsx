'use client'

import { Role } from '@/types/types'
import { useUserSession } from '@/context/UserSession'
import PermissionsList from './PermissionsList'
import RoleButton from './RoleButton'

const RoleSelector = () => {
  const { userSession, setRole } = useUserSession()

  return (
    <div className='flex flex-col justify-center items-center space-y-4 w-full mt-8'>
      <span>Current role: <span className='font-bold capitalize text-blue-400'>{userSession.role}</span></span>
      <div className='flex flex-row gap-2 border-t border-gray-500 pt-4'>
        {Object.values(Role).map((role) => (
          <RoleButton key={role} role={role} />
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        {userSession.role === Role.CUSTOM && <PermissionsList />}
      </div>
    </div>
  )
}

export default RoleSelector