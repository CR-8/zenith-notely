"use client";

import React, { useState, useEffect } from 'react';
import { Home, NotepadText, BarChart2, Bot, Settings, Plus, Sun, Moon } from "lucide-react";

function Sidebar({ onClose }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const activePage = "Home";

  const getMenuItemClass = (page) =>
    `flex items-center p-2 sm:p-3 text-foreground rounded-lg sm:rounded-xl hover:bg-primary/10 hover:cursor-pointer transition-colors ${
      activePage === page ? "bg-primary/20" : ""
    }`;

  return (
    <div className="w-[280px] min-w-[280px] rounded-3xl p-4 sm:p-6 m-4 border border-border bg-card backdrop-blur-xl flex flex-col h-[calc(100vh-2rem)]">
      <div className="brand w-full flex items-center justify-between mb-6 sm:mb-8 border-b border-foreground/20">
        <div className="mx-2 sm:mx-4 my-4 flex items-center gap-2">
          <div className="p-2 bg-muted/20 backdrop-blur-md rounded-md">
            <div className="w-4 h-4 rounded-full bg-muted" />
          </div>
          <div className="text-xl sm:text-2xl text-foreground font-bold ml-2">
            Zenith
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5 text-foreground" /> : <Moon className="h-5 w-5 text-foreground" />}
        </button>
      </div>

      <div className="flex flex-col space-y-1 sm:space-y-2 flex-grow">
        <div className={getMenuItemClass("Home")} onClick={onClose}>
          <Home className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" aria-label="Home" />
          <span className="text-sm sm:text-base">Home</span>
        </div>
        <div className={getMenuItemClass("Notes")} onClick={onClose}>
          <NotepadText className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" aria-label="Notes" />
          <span className="text-sm sm:text-base">Notes</span>
        </div>
        <div className={getMenuItemClass("Graph")} onClick={onClose}>
          <BarChart2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" aria-label="Graph" />
          <span className="text-sm sm:text-base">Graph</span>
        </div>
        <div className={getMenuItemClass("AI Assistant")} onClick={onClose}>
          <Bot className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" aria-label="AI Assistant" />
          <span className="text-sm sm:text-base">AI Assistant</span>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className={getMenuItemClass("Settings")} onClick={onClose}>
          <Settings className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" aria-label="Settings" />
          <span className="text-sm sm:text-base">Settings</span>
        </div>

        <button
          className="w-full bg-primary text-primary-foreground py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium flex items-center justify-center hover:bg-foreground hover:cursor-pointer transition-colors"
          aria-label="New Note"
          onClick={onClose}
        >
          <span className='flex items-center justify-center mx-auto gap-1'>
              <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-base">New Note</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
