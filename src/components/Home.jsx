import React, { useState } from 'react'
import { useChatStore } from '../store/useChatStore'
import Sidebar from './Sidebar'
import NoChatSelected from './NoChatSelected'
import ChatContainer from './ChatContainer'

const Home = () => {
  const { selectedUser } = useChatStore()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-5 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full container h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
