import React from 'react'

const ChatHeader = ({ clearAllChat }) => {

  const clearAll = () => {
    clearAllChat();
  }

  return (
    <div className='flex items-center justify-between text-2xl border-b border-gray-100 p-2 bg-gray-800'>
      <span>
        LLM CHAT ASSISTANT
      </span>
      <button onClick={clearAll} className='text-sm border border-white px-4 py-2 rounded cursor-pointer'>Clear Chat</button>
    </div>
  )
}

export default ChatHeader
