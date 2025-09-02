"use client";
import React from 'react';
import { Plus, FolderPlus, GitCompareArrows, FileText, Folder, TrendingUp, Clock } from 'lucide-react';

export default function Info() {
  // Sample data for recent notes
  const recentNotes = [
    {
      title: "Project Brainstorming",
      description: "Ideas for the new marketing campaign...",
      updated: "2 hours ago",
      color: "bg-primary/10",
    },
    {
      title: "Meeting Notes",
      description: "Summary of the client meeting...",
      updated: "Yesterday",
      color: "bg-accent/10",
    },
    {
      title: "Research Paper",
      description: "Analysis of recent trends...",
      updated: "3 days ago",
      color: "bg-secondary/20",
    },
  ];

  // Sample quick actions
  const quickActions = [
    { name: "New Note", icon: <Plus className="w-4 h-4 lg:w-5 lg:h-5" />, color: "hover:bg-primary/10" },
    { name: "New Folder", icon: <FolderPlus className="w-4 h-4 lg:w-5 lg:h-5" />, color: "hover:bg-accent/10" },
    { name: "Sync Notes", icon: <GitCompareArrows className="w-4 h-4 lg:w-5 lg:h-5" />, color: "hover:bg-secondary/20" },
  ];

  // Sample stats
  const stats = [
    { label: "Total Notes", value: "127", icon: <FileText className="w-5 h-5 lg:w-6 lg:h-6" />, color: "text-primary" },
    { label: "Folders", value: "12", icon: <Folder className="w-5 h-5 lg:w-6 lg:h-6" />, color: "text-accent" },
    { label: "This Week", value: "23", icon: <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />, color: "text-secondary" },
  ];

  return (
    <div className="p-3 lg:p-8 space-y-4 lg:space-y-8">

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-surface rounded-lg lg:rounded-xl p-3 lg:p-6 border border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg lg:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-xs lg:text-sm">{stat.label}</p>
              </div>
              <div className={`${stat.color} p-2 lg:p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Notes Section */}
      <div className="space-y-3 lg:space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base lg:text-xl font-semibold text-foreground">Recent Notes</h2>
          <button className="text-primary hover:text-primary-600 transition-colors text-xs lg:text-sm font-medium">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
          {recentNotes.map((note, index) => (
            <div
              key={index}
              className={`${note.color} p-3 lg:p-6 rounded-lg lg:rounded-xl border border-border hover:shadow-lg transition-all cursor-pointer group`}
            >
              <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors text-sm lg:text-base">{note.title}</h3>
              <p className="text-xs lg:text-sm text-muted-foreground mb-2 lg:mb-3 line-clamp-2">{note.description}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock size={10} className="mr-1" />
                {note.updated}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="space-y-3 lg:space-y-4">
        <h2 className="text-base lg:text-xl font-semibold text-foreground">Quick Actions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`p-3 lg:p-6 bg-surface rounded-lg lg:rounded-xl border border-border flex items-center gap-3 lg:gap-4 hover:shadow-lg transition-all group ${action.color}`}
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                {action.icon}
              </div>
              <span className="font-medium text-foreground text-sm lg:text-base">{action.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}