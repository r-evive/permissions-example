'use client'

import useLinkActive from '@/hooks/useLinkActive'
import { NavItem } from '@/types/types'
import { isRouteActive } from '@/utils/navigation'
import { cn } from '@/utils/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

export const ACTIVE_LINK_CLASS = "text-blue-500"

type NavLinkProps = {
  item: NavItem
}

const NavLink = ({ item }: NavLinkProps) => {
  const isActive = useLinkActive(item.href)

  const Icon = item.icon

  return (
    <Link href={item.href}
      className={
        cn('px-4 border-l border-gray-200 first:border-l-0',
          isActive ? 'text-blue-500' : '')}>
      <span className='flex flex-row gap-2 items-center justify-center'>
        <Icon className='w-4 h-4' />
        <span className='hidden md:block'>{item.name}</span>
      </span>
    </Link>
  )
}

export default NavLink