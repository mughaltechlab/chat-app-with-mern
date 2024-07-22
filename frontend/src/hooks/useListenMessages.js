import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand-store/useConversation";

import notificationSound from "../assets/sounds/notification_sound.mp3";

const useListenMessages = () => {

    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        });
        // console.log(socket);

        return ()=> socket?.off("newMessage");
        
    }, [socket, setMessages, messages]);
  
}

export default useListenMessages