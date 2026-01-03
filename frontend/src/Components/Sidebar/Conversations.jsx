import React from 'react'
import Chatperson from './Chatperson'
import UseGetConversation from '../../Hooks/UseGetConversation'
import { getRandomEmogi } from '../../utils/emogi';


const Conversations = () => {
  const { loading, conversations } = UseGetConversation();
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {conversations.map((conversation, idx) => (
        <Chatperson
          key={conversation._id}
          conversation={conversation}
          emogi={getRandomEmogi()}
          lastIDX={idx === conversations.length - 1}
        />
      ))}


      {loading ? (<span className='loading loading-spinner mx-auto'></span>) : null}
    </div>
  )
}

export default Conversations