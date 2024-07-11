import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from "react-icons/ti"

const MessageContainer = () => {

  const noChateSelected = true;
  
  return (
    <div className='md:min-w-[450px] flex flex-col '>
        {
          noChateSelected 
          ? <NoChatSelected />
          : (
            <>
            {/* header */}
            <div className="bg-violet-400 px-4 py-2 mb-2 ">
                <span className="label-text ">To:</span> <span className="font-bold">Lone wolf</span>
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


const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 ">
        <p>Welcome 👋 Lone Wolf ❄</p>
        <TiMessages className='text-3xl md:text-6xl text-center ' />
      </div>
    </div>
  )
}