import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import UseLogout from '../../Hooks/UseLogout';


const Logout = () => {

  const { loading, logout } = UseLogout();
  
  return (
    <div className='mt-auto'>
      {!loading ? (
        <TbLogout2 className='w-6 h-6 cursor-pointer'
          onClick={logout}
        />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default Logout