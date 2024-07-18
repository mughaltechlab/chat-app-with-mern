import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand-store/useConversation"

const useListenMessages = () => {

    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage", (newMessage)=>{
            setMessages([...messages,newMessage]);
        });
        // console.log(socket);

        return ()=> socket?.off("newMessage");
        
    },[socket, messages, setMessages]);
  
}

export default useListenMessages