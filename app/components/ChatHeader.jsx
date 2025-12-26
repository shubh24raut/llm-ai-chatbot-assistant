'use client'

import { BetweenHorizonalEnd, BetweenHorizonalStart } from 'lucide-react';
import React from 'react'
import { useSidebar } from '../hooks/useSidebar';

const ChatHeader = ({ clearAllChat }) => {

  const { isOpen, toggleSidebar } = useSidebar()

  const clearAll = () => {
    clearAllChat();
  }

  return (
    <div className='flex items-center justify-between text-2xl py-[11px] border-b px-4'>
      <span
        onClick={toggleSidebar}
        className={`
    block md:hidden cursor-pointer p-2
    transition-all duration-300 ease-in-out
    transform ${isOpen ? "translate-x-1 rotate-360" : "translate-x-0 rotate-0"}
  `}
      >
        {isOpen ? (
          <BetweenHorizonalEnd className="transition-all duration-300" />
        ) : (
          <BetweenHorizonalStart className="transition-all duration-300" />
        )}
      </span>

      <span />
      <button onClick={clearAll} className='text-sm border border-white px-4 py-2 rounded cursor-pointer'>Clear Chat</button>
    </div>
  )
}

export default ChatHeader
