'use client'

import { Role, UserSession } from "@/types/types";
import { getAllPermissions } from "@/utils/permissions";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const defualtValue: UserSession = {
  id: 0,
  name: "John Doe",
  email: "[EMAIL_ADDRESS]",
  role: Role.USER,
  permissions: []
}

const UserSessionContext = createContext({
  userSession: defualtValue,
  setRole: (role: Role) => { },
  setPermissions: (permissions: string[]) => { }
})

export const UserSessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSession, setUserSession] = useState<UserSession>(defualtValue)

  const setRole = (role: Role) => {
    setUserSession((prev) => ({ ...prev, role, permissions: role !== Role.CUSTOM ? [] : prev.permissions }))
  }

  const setPermissions = (permissions: string[]) => {
    setUserSession((prev) => ({ ...prev, permissions }))
  }

  return (
    <UserSessionContext.Provider value={{ userSession, setRole, setPermissions }} >
      {children}
    </UserSessionContext.Provider>
  )
}

export const useUserSession = () => {
  const ctx = useContext(UserSessionContext)
  if (!ctx) throw new Error("useUserSession must be used within provider")

  return ctx
}

