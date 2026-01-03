import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import useConversation from '../../Zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Singlemessages = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.SenderID === authUser._id;
    const formattedTime = extractTime(message.createdAt)
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const ProfilePic = fromMe ? authUser.ProfilePic : selectedConversation?.ProfilePic;
    const chatbackground = fromMe ? 'text-white bg-green-800' : '';
    const shakeClass = message.shouldShake ? "shake" : ""
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="chat-image avatar" src={ProfilePic} />
                </div>
            </div>
            <div className={`chat-bubble ${chatbackground} ${shakeClass} pb-2`}>{message.message}</div>
            <div className="chat-footer opacity-50"><time className="text-xs ml-1 text-black opacity-100">{formattedTime}</time></div>
        </div>

    )
}

export default Singlemessages;