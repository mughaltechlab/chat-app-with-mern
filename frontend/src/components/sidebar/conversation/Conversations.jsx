import React from 'react'
import Conversation from './Conversation'
import Loader from "../../Loader"
import useGetConversation from '../../../hooks/useGetConversation';

const Conversations = () => {

  const [loading, conversations] = useGetConversation();
  return (
    
      loading 
      ? <div className='py-2 flex flex-col justify-center items-center overflow-auto '><Loader /></div>
      : <div className='py-2 flex flex-col overflow-auto '>
        {
          conversations.map((convo) => {
            return <Conversation data = {convo} key={convo._id} />
          })
        }
      </div>
    
  )
}

export default Conversations