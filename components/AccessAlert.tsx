import { AlertOctagonIcon } from 'lucide-react'
import React from 'react'
import Hint from './Hint'
import { useMemo } from 'react'
import { HintVariant } from '@/types/types'

type Props = {
  hasAccess: boolean
  requiredPermissions: string[]
}

const AccessAlert = ({ hasAccess, requiredPermissions }: Props) => {
  const permissionsText = requiredPermissions.join(", ")

  if (!hasAccess)
    return <Hint title="No access!" icon={AlertOctagonIcon} variant={HintVariant.ERROR}>
      <span className='mb-2'>You don't have required permissions to perform:</span>
      <span className='font-bold'>{permissionsText}</span>
    </Hint>
  else
    return <Hint title="Access granted!" icon={AlertOctagonIcon} variant={HintVariant.SUCCESS}>
      You can perform the following actions: <span className='font-bold'>{permissionsText}</span>
    </Hint>
}

export default AccessAlert