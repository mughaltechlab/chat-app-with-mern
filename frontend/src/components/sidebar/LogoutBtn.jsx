import React from 'react'
import {RiLogoutCircleLine} from "react-icons/ri"

const LogoutBtn = () => {
  return (
    <div className='mt-auto'>
        <RiLogoutCircleLine className='text-red-400 hover:text-red-600 cursor-pointer group delay-75 w-6 h-6' />
    </div>
  )
}

export default LogoutBtn