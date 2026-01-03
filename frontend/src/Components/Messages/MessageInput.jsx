import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import UseSendmessage from '../../Hooks/UseSendmessage';

const MessageInput = () => {

    const [message,Setmessage] = useState('');
    const {loading,sendMessage} = UseSendmessage();

    const handlesubmit = async (e) => {
        e.preventDefault();
        if(!message) return;

        await sendMessage(message)
        Setmessage("");
    };
    
    return (
        <form className='px-4 my-3' onSubmit={handlesubmit}>
            <div className='w-full relative'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                    placeholder='write a message....'
                    value={message}
                    onChange={(e)=>Setmessage(e.target.value)}
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {loading ? <div className='loading loading-spinner'></div> : <AiOutlineSend className='w-6 h-6 text-success' />}
                    
                </button>

            </div>
        </form>
    )
}

export default MessageInput