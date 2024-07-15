import { createContext, useEffect, useState } from "react";
import io from 'socket.io-client';
import { useAuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(()=>{
        if (authUser) {
            const socket = io("http://localhost:8000", {
                query: {
                    userId: authUser._id,
                    socketId: socket.id,
                }
            });
            setSocket(socket);

            return () => socket.close();
        } else  {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    },[]);
    
    return <SocketContext.Provider value={{socket, onlineUsers}} >{children}</SocketContext.Provider>;
}