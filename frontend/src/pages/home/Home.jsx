import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import { useAuthContext } from '../../context/AuthContext';


function Home() {
  const {authUser} = useAuthContext();
  
  if(authUser){
    console.log({authUser});
  }

  
  return (
    <div className="
        flex sm:h-[450px] md:h-[550px] overflow-hidden 
        rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
    ">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home