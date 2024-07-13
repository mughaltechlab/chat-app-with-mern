import React from 'react'
import {RiLogoutCircleLine} from "react-icons/ri"
import useLogout from '../../hooks/useLogout'
import Loader from '../Loader';

const LogoutBtn = () => {

  const [loading, logout] = useLogout();
  
  return (
    <div className='mt-auto py-2'>
        {
          loading
          ? <Loader />
          : <RiLogoutCircleLine 
            onClick={logout}
            className='text-red-400 hover:text-red-600 cursor-pointer group delay-75 w-6 h-6' 
          />
        }
    </div>
  )
}

export default LogoutBtn