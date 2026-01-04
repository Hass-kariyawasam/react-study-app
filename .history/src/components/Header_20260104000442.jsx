import React from 'react';
import { BookOpen, Sun, Moon, Menu, X } from 'lucide-react';

const Header = ({ isDarkMode, setIsDarkMode, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center z-30 shadow-sm sticky top-0">
      <h1 className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 text-lg">
        <BookOpen className="fill-blue-100 dark:fill-blue-900" size={24}/> React Camp
      </h1>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {isDarkMode ? <Sun size={20} className="text-amber-400"/> : <Moon size={20} className="text-slate-600"/>}
        </button>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
    </div>
  );
};

export default Header;