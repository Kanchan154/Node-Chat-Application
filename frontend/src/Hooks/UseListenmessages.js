import { useEffect } from "react";
import { useSocketContext } from "../Context/SocketContext"
import useConversation from "../Zustand/useConversation"
import notificationsound from "../assets/sounds/ting.mp3"

const UseListenmessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = useConversation();

    useEffect(() => { 
        socket?.on("newMessage",(newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationsound);
            sound.play();
            setMessages([...messages,newMessage])
        })
        return () => socket?.off("newMessage")
    }, [socket,setMessages,messages])
}

export default UseListenmessages;