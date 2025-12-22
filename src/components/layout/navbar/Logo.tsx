import { LOGO1 } from '@/assets'
import React from 'react'
import { Link } from 'react-router-dom'


const Logo: React.FC = () => {
  return (
    <Link to='/' className='flex items-center gap-3'>
        <div className="w-8 h-8 items-center justify-center">
            <img src={LOGO1} alt="" />
        </div>
    </Link>
  )
}

export default Logo