'use client'

import React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatMessage from '../components/ChatMessage'
import ChatFooter from '../components/ChatFooter'
import { useChat } from '../hooks/useChat'

const ChatPage = () => {
    const { isLoading, messages, sendMessage } = useChat();

    return (
        <div className='flex items-center justify-center  h-full w-full p-2 sm:p-6 md:p-10 overflow-hidden'>
            <div className='flex flex-col w-full max-w-3xl h-full'>
                <ChatHeader />
                <ChatMessage isLoading={isLoading} messages={messages} />
                <ChatFooter sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default ChatPage
