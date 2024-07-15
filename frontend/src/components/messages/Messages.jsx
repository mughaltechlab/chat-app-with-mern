import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {

  const [loading, messages] = useGetMessages();
  console.log(messages)
  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((message)=>(
        <Message msg = {message} key={message._id} />
      ))}
      
      {loading && [...Array(3)].map((_,index)=><MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (<p className='p-2 text-center text-gray-300'>Send a message to start a conversation</p>) }
    </div>
  )
}

export default Messages