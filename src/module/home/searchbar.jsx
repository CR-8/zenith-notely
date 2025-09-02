"use client";
import React, { useState } from 'react';
import { Search, Bell, User, Sparkles, Command, Plus, FolderPlus, FileText } from 'lucide-react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='min-h-[120px] sm:h-[20vh] lg:h-[30vh] w-full flex items-center justify-center px-4'>
      <div className="w-full max-w-4xl space-y-3 sm:space-y-4 lg:space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center gap-2 lg:gap-4 px-3 lg:px-6 py-2 lg:py-4 bg-surface rounded-lg lg:rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
            <Search className="text-muted-foreground flex-shrink-0" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your notes..."
              className="flex-1 text-sm lg:text-lg bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
            />
            <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
              <Command size={16} />
              <span>K</span>
            </div>
            <button className="p-1 lg:p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors flex-shrink-0">
              <Bell size={16} />
            </button>
            <button className="p-1 lg:p-2 rounded-full hover:bg-glass transition-colors">
            <div className='w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-muted flex items-center justify-center'>
              <User size={14} className="text-muted-foreground" />
            </div>
          </button>
          </div>

          {/* Search Suggestions */}
          {searchQuery && (
            <div className="absolute top-full mt-2 w-full bg-surface rounded-xl border border-border shadow-lg p-3 lg:p-4 z-10">
              <div className="space-y-2">
                <p className="text-xs lg:text-sm text-muted-foreground">Quick results for "{searchQuery}"</p>
                <div className="flex items-center gap-3 p-2 hover:bg-muted/20 rounded-lg cursor-pointer">
                  <FileText size={14} />
                  <span className="text-xs lg:text-sm">Sample Note</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Access */}
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors">
            <Plus size={14} />
            <span className="text-xs lg:text-base">New Note</span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors">
            <FolderPlus size={14} />
            <span className="text-xs lg:text-base">New Folder</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;