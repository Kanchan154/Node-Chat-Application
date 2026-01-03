import React from 'react'
import useConversation from '../../Zustand/useConversation'
import { useSocketContext } from '../../Context/SocketContext';

const Chatperson = ({ conversation, lastIDX, emogi }) => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isonline = onlineUsers.includes(conversation._id)


  return (
    <div>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}
      `}
      onClick={() => setSelectedConversation(conversation)} 
      >

        {/* div that contain profile picture of the user and give its online status */}
        <div className={`avatar ${(isonline) ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.ProfilePic} alt='user avatar' />
          </div>
        </div>

        {/* contains username, and emogi*/}
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>{conversation.fullname}</p>
            <span className='text-xl'>{emogi}</span>
          </div>
        </div>
      </div>

      {!lastIDX && <div className='my-0 py-0 divider h-1' />}

    </div>
  )
}

export default Chatperson