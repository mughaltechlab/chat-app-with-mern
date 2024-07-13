import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './conversation/Conversations'
import LogoutBtn from './LogoutBtn'

function Sidebar() {

  

  
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col '>
        {/* searchbar */}
        <SearchInput />
        <div className="divider px-3 divider-neutral "></div>
        {/* conversations */}
        <Conversations />
        {/* logout btn */}
        <LogoutBtn />
    </div>
  )
}

export default Sidebar