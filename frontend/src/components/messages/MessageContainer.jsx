import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from "react-icons/ti"
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand-store/useConversation'

const MessageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{


    // cleanup function (unmount)
    return ()=>{
      setSelectedConversation(null);
      console.log('===========unmount==========')
    }
    
  },[setSelectedConversation]);

  const {authUser} = useAuthContext();
  
  return (
    <div className='md:min-w-[450px] flex flex-col '>
        {
          !selectedConversation 
          ? <NoChatSelected data = {authUser} />
          : (
            <>
            {/* header */}
            <div className="bg-violet-400 px-4 py-2 mb-2 ">                        {/*.............. */}
                <span className="label-text ">To:</span> <span className="font-semibold text-white">{selectedConversation.fullName}</span>
            </div>
            {/* messages */}
            <Messages />
            {/* message input */}
            <MessageInput />
            </>
          )
        }
    </div>
  )
}

export default MessageContainer


const NoChatSelected = ({data}) => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 ">
        <p>Welcome 👋 {data.fullName} ❄</p>
        <TiMessages className='text-3xl md:text-6xl text-center ' />
      </div>
    </div>
  )
}