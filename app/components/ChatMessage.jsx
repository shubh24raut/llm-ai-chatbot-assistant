
import React, { use } from 'react'
import ChatBubble from './ChatBubble'

const ChatMessage = ({ isLoading, messages }) => {

    return (
        <div className='h-full w-full px-8 py-4 bg-gray-400 text-black flex flex-col space-y-2 overflow-y-auto'>
            {messages?.length > 0 ? messages.map((msg, idx) => <ChatBubble key={idx} type={msg.type} message={msg.message} />) : 'NO MESSAGES'}
            {isLoading && <div className=' flex w-full italic text-sm text-gray-600'>Thinking...please wait</div>}
        </div>
    )
}

export default ChatMessage
