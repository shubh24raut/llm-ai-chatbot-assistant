
import React, { useEffect, useRef } from 'react'
import ChatBubble from './ChatBubble'
import { MessageCircle } from 'lucide-react'

const ChatMessage = ({ isLoading, messages }) => {
    const containerRef = useRef(null);


    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop =
                containerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    return (
        <div ref={containerRef} className='h-full w-full px-8 py-4 bg-gray-400 text-black flex flex-col space-y-2 overflow-y-auto'>
            {messages?.length > 0 ? messages.map((msg, idx) => <ChatBubble key={idx} type={msg.role} message={msg.content} />) : <div className="flex flex-col items-center justify-center h-full text-center text-gray-600 space-y-3">
                <MessageCircle size={48} className="opacity-50" />
                <p className="text-lg font-medium">No messages yet</p>
                <p className="text-sm max-w-xs">
                    Start the conversation by typing a message below.
                </p>
            </div>}
            {isLoading && <div className=' flex w-full italic text-sm text-gray-600'>Thinking...</div>}
        </div>
    )
}

export default ChatMessage
