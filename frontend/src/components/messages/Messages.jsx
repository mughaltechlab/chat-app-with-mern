import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {

  const [loading, messages] = useGetMessages();
  useListenMessages();

  const lastMsgRef = useRef();

  useEffect(()=>{
    setTimeout(() => {
      lastMsgRef.current?.scrollIntoView({behavior: 'smooth'});
    }, 50);
  },[messages])
  
  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((message)=>(
        <div key={message._id} ref={lastMsgRef}>
          <Message msg = {message}  />
        </div>
      ))}
      
      {loading && [...Array(3)].map((_,index)=><MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (<p className='p-2 text-center text-gray-300'>Send a message to start a conversation</p>) }
    </div>
  )
}

export default Messages