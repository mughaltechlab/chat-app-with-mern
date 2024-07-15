import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage'
import Loader from '../Loader'

const MessageInput = () => {

  const [msgInputVal, setMsgInputVal] = useState("");
  const [loading, sendMessage] = useSendMessage();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (!msgInputVal) return;
    
    await sendMessage(msgInputVal)
    setMsgInputVal('');
  }
  
  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
        <div className="w-full relative">
            <input 
                type="text"
                className='border text-white placeholder:text-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-whtie '
                // placeholder={loading ? '' : 'Send a message...'}
                placeholder='Send a message...'
                value={msgInputVal}
                onChange={(e)=>setMsgInputVal(e.target.value)}
            />
            {/* {loading && <span className="absolute text-white inset-y-0 start-[10px] flex items-center loading loading-dots"></span>} */}
            <button type='submit' className='absolute text-white inset-y-0 end-0 flex items-center pe-3 '>
              {loading ? <Loader /> : <BsSend />}
            </button>
        </div>
    </form>
  )
}

export default MessageInput