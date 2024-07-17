import React from 'react'
import useConversation from '../../../zustand-store/useConversation'
import { useSocketContext } from '../../../context/SocketContext';

const Conversation = ({conversation, emoji, lastIndex}) => {

    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation?._id);

  return (
    <>
        <div 
            onClick={()=>{ setSelectedConversation(conversation); }}
            className={` ${isSelected && 'bg-violet-800'} flex gap-2 items-center hover:bg-violet-800 rounded p-2 py-1 transition-all duration-150 cursor-pointer `}
        >
            {/* avatar */}
            <div className={`avatar ${isOnline && 'online'} `}>
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePic} />
                    {/* <img src={"https://api.dicebear.com/9.x/lorelei/svg?seed=sahar"} /> */}
                    {/* https://api.dicebear.com/9.x/lorelei/svg?seed=sahar */}
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between ">
                    {/* name */}
                    <p className="text-gray-300">{conversation.fullName}</p>
                    {/* emoji */}
                    <span className="text-xl">{emoji}</span>
                </div>
            </div>
        </div>
        {/* divider */}
        {!lastIndex && <div className="divider my-0 py-0 h-1 divider-neutral"></div>}
    </>
  )
}

export default Conversation