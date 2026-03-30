import { isRouteActive } from "@/utils/navigation"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const useLinkActive = (href: string) => {
  const pathname = usePathname()

  const isActive = useMemo(() => {
    return isRouteActive(pathname, href)
  }, [pathname, href])

  return isActive
}

export default useLinkActive