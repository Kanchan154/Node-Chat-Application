import React, { useEffect } from 'react'
import Messages from './Messages.jsx'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../Zustand/useConversation';
import MessageInput from './MessageInput';
import { useAuthContext } from '../../Context/AuthContext.jsx';

const Messagecontainer = () => {

  const {selectedConversation,setSelectedConversation} = useConversation()

  useEffect(() => {
    return () => setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header of the chat */}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'> To: </span> {"  "}
            <span className='text-gray-900 font-bold'>{selectedConversation.fullname}</span>
          </div>

          <Messages/>
          <MessageInput/>

        </>
      )}
    </div>
  )
}

export default Messagecontainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p className=' text-yellow-300 md:text-4xl text-2xl'>Welcome 👋 {authUser.fullname}</p>
        <p className='text-warning'>Select a Chat to start Conversation</p>
        <TiMessages className='text-3xl md:text-6xl text-center text-green-600' />
      </div>
    </div>
  )
}