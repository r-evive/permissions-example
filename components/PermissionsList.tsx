import { useUserSession } from "@/context/UserSession"
import { Permission } from "@/utils/permissions"

const PermissionsList = () => {
  const { userSession, setPermissions } = useUserSession()

  const handlePermissionChange = (permission: string) => {
    const newPermissions = userSession.permissions.includes(permission)
      ? userSession.permissions.filter((p) => p !== permission)
      : [...userSession.permissions, permission]

    setPermissions(newPermissions)
  }

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-center my-2'>Permissions:</span>
      <div className='grid grid-cols-2 gap-2 bg-card p-4 rounded-lg'>
        {Object.values(Permission).map((permission) => (
          <div key={permission} className='flex flex-row gap-2'>
            <input type='checkbox' value={permission} id={permission} checked={userSession.permissions.includes(permission)} onChange={() => handlePermissionChange(permission)} />
            <label className="select-none" htmlFor={permission}>{permission}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PermissionsList