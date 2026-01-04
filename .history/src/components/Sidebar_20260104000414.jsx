import React from 'react';
import { BookOpen, LogOut, Sun, Moon, CheckCircle2, Globe, Monitor, Terminal, Layers, Cpu, Layout, Database } from 'lucide-react';
import { days } from '../data/courseContent';

const iconMap = {
  Terminal: <Terminal size={18} />,
  Layers: <Layers size={18} />,
  Cpu: <Cpu size={18} />,
  Layout: <Layout size={18} />,
  Database: <Database size={18} />,
  Globe: <Globe size={18} />,
  CheckCircle2: <CheckCircle2 size={18} />
};

const Sidebar = ({ 
  user, 
  isGuest, 
  activeDay, 
  setActiveDay, 
  getProgress, 
  courseContent, 
  onLogout, 
  isDarkMode, 
  setIsDarkMode,
  isMobileMenuOpen 
}) => {
  return (
    <div className={`fixed md:relative z-30 w-72 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 flex flex-col transition-transform duration-300 shadow-2xl md:shadow-none ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
      
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 hidden md:block">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-black text-blue-600 dark:text-blue-500 flex items-center gap-2">
            <BookOpen className="fill-blue-100 dark:fill-blue-900/50" /> React Camp
          </h1>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun size={20} className="text-amber-400"/> : <Moon size={20} className="text-slate-400"/>}
          </button>
        </div>
        
        {/* User Info */}
        <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
          <div className={`w-10 h-10 rounded-full ${user ? 'bg-gradient-to-tr from-blue-500 to-indigo-500' : 'bg-slate-400'} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
            {user?.displayName?.[0] || (isGuest ? "G" : "U")}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
              {user ? user.displayName : "Guest User"}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`w-2 h-2 rounded-full ${user ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
              <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                {user ? "Online" : "Local Mode"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Day Navigation */}
      <div className="p-4 space-y-2 overflow-y-auto flex-1">
        {days.map((day) => (
          <button
            key={day.id}
            onClick={() => setActiveDay(day.id)}
            className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all duration-200 group ${
              activeDay === day.id
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm ring-1 ring-blue-200 dark:ring-blue-800'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
            }`}
          >
            <div className={`p-2 rounded-lg ${activeDay === day.id ? 'bg-white dark:bg-blue-900/40 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
              {iconMap[day.icon]}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-semibold">{day.title}</span>
                {getProgress(day.id, courseContent[day.id].checklist.length) === 100 && (
                  <CheckCircle2 size={16} className="text-emerald-500" />
                )}
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full">
                <div 
                  className="bg-blue-500 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${getProgress(day.id, courseContent[day.id].checklist.length)}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
      
      {/* Logout */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <button 
          onClick={onLogout} 
          className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-xl transition-colors"
        >
          <LogOut size={18} /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;