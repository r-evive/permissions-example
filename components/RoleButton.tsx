import { useUserSession } from "@/context/UserSession"
import { Role } from "@/types/types"
import { cn } from "@/utils/utils"

const ROLE_COLORS: Record<Role, string> = {
  [Role.ADMIN]: "bg-blue-400 text-blue-900",
  [Role.USER]: "bg-green-400 text-green-900",
  [Role.CUSTOM]: "bg-yellow-400 text-yellow-900",
}

const RoleButton = ({ role }: { role: Role }) => {
  const { setRole } = useUserSession()

  const handleRoleChange = () => {
    setRole(role)
  }

  return (
    <button className={cn(`p-2 rounded-lg uppercase`, ROLE_COLORS[role])} onClick={handleRoleChange}>{role}</button>
  )
}

export default RoleButton