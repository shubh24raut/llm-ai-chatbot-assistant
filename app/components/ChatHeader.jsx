import React from 'react'

const ChatHeader = ({ clearAllChat }) => {

  const clearAll = () => {
    clearAllChat();
  }

  return (
    <div className='flex items-center justify-between text-2xl py-2 bg-gray-800 px-4'>
      <span >
        LLM Studio
      </span>
      <button onClick={clearAll} className='text-sm border border-white px-4 py-2 rounded cursor-pointer'>Clear Chat</button>
    </div>
  )
}

export default ChatHeader
