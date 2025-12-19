'use client'

import { SendHorizontalIcon } from 'lucide-react'
import React, { useState } from 'react'

const ChatFooter = ({ isLoading, sendMessage }) => {
    const [singleMessage, setSingleMessage] = useState('')

    const handleSend = () => {
        if (!singleMessage.trim()) return;
        sendMessage(singleMessage);
        setSingleMessage('');
    };


    return (
        <div className='w-full bg-gray-400 text-black p-6'>
            <div className='w-full flex   rounded-3xl px-4 bg-gray-200 shadow-md shadow-gray-600 py-2 items-center space-x-2'>
                <input
                    disabled={isLoading}
                    value={singleMessage}
                    className={`outline-none focus:outline-none focus:ring-0 focus:border-none w-full text-gray-700 font-medium ${isLoading ? 'cursor-not-allowed bg-gray-200' : 'bg-gray-200'}`}
                    placeholder="Ask me anything"
                    onChange={(e) => setSingleMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <button className={`${isLoading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}><SendHorizontalIcon className='text-gray-700' onClick={handleSend} /></button>
            </div>
        </div>
    )
}

export default ChatFooter
