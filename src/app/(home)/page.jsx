"use client";

import React, { useState } from 'react'
import Sidebar from '@/module/home/sidebar'
import Searchbar from '@/module/home/searchbar'
import Info from '@/module/home/info'
import { Menu, X } from 'lucide-react'

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="w-full h-[100vh] bg-background flex">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-surface rounded-lg border border-border shadow-lg text-foreground"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col min-h-screen pt-16 lg:pt-0'>
        <Searchbar />
        <div className='flex-1 overflow-auto'>
          <Info />
        </div>
      </div>
    </div>
  )
}

export default Home;