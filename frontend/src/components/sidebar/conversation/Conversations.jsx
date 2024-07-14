import React from 'react'
import Conversation from './Conversation'
import Loader from "../../Loader"
import useGetConversation from '../../../hooks/useGetConversation';
import { getRandomEmoji } from '../../../util/emoji';

const Conversations = () => {

  const [loading, conversations] = useGetConversation();

  return (
    
      loading 
      ? <div className='py-2 flex flex-col justify-center items-center overflow-auto '><Loader /></div>
      : <div className='py-2 flex flex-col overflow-auto '>
        {
          conversations.map((convo,index) => (
             <Conversation 
              conversation = {convo}
              key = {convo._id}
              emoji = {getRandomEmoji()}
              lastIndex = {index === (conversations.length -1)}
            />
          ))
        }
      </div>
    
  )
}

export default Conversations