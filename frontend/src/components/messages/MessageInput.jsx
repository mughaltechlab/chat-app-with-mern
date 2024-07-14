import React from 'react'
import {BsSend} from "react-icons/bs"

const MessageInput = () => {
  return (
    <form action="" className="px-4 my-3">
        <div className="w-full relative">
            <input 
                type="text"
                className='border text-white placeholder:text-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-whtie '
                placeholder='Send a message...'
            />
            <button type='submit' className='absolute text-white inset-y-0 end-0 flex items-center pe-3 '>
                <BsSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput