
'use client'

import { NavItems } from '../utils/navigation'
import NavLink from './NavLink'

const Navbar = () => {

  return (
    <nav className='mb-16 p-4 bg-card rounded-lg'>
      <div className='flex flex-row'>
        <div className="flex flex-row">
          <div className='grid grid-cols-5 justify-center items-center text-center shrink-0'>
            {NavItems.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar