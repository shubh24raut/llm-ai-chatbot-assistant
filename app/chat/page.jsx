'use client'

import ChatSidebar from '../components/ChatSidebar'
import ChatHeader from '../components/ChatHeader'
import ChatMessage from '../components/ChatMessage'
import ChatFooter from '../components/ChatFooter'
import { useChat } from '../hooks/useChat'

export default function ChatPage() {
  const { isLoading, messages, sendMessage, clearAllChat } = useChat()

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <ChatSidebar />

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1 h-full bg-gray-800">
        <ChatHeader clearAllChat={clearAllChat} />

        {/* Messages scroll area */}
        <div className="flex-1 overflow-y-auto  ">
          <ChatMessage isLoading={isLoading} messages={messages} />
        </div>

        {/* Input */}
        <ChatFooter isLoading={isLoading} sendMessage={sendMessage} />
      </div>
    </div>
  )
}
