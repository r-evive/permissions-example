import { HintVariant } from '@/types/types'
import { LucideIcon } from 'lucide-react'
import React from 'react'
import { ReactNode } from 'react'
import { useMemo } from 'react'

type HintProps = {
  title: string
  children: ReactNode
  icon?: LucideIcon
  variant?: HintVariant
}

const HINT_VARIANT_CLASS = {
  info: "bg-card/40 border border-gray-500",
  success: "bg-green-500/40 border border-green-500",
  warning: "bg-yellow-500/40 border border-yellow-500",
  error: "bg-red-500/40 border border-red-500",
}

const Hint = ({ title, children, icon, variant = HintVariant.INFO }: HintProps) => {
  const Icon = useMemo(() => {
    if (!icon) return null
    return icon
  }, [icon])

  const hintVariant = useMemo(() => {
    return HINT_VARIANT_CLASS[variant] || HINT_VARIANT_CLASS["info"]
  }, [variant])

  return (
    <div className={`flex flex-col gap-2 items-center justify-center ${hintVariant} rounded-lg p-4`}>
      <div className='flex flex-gap flex-row gap-2 items-center justify-start'>
        {Icon && <Icon className='w-4 h-4' />}
        <span className='font-bold'>{title}</span>
      </div>
      <span className='flex flex-col whitespace-preline text-center'>{children}</span>
    </div>
  )
}

export default Hint