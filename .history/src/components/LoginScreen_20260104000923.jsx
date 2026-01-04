import React from 'react';
import { BookOpen, LogIn, User } from 'lucide-react';

const LoginScreen = ({ onLogin, onGuestAccess }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-slate-200 dark:border-slate-700">
        <div className="mb-8 flex justify-center">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-5 rounded-full shadow-inner ring-4 ring-blue-50 dark:ring-slate-700">
            <BookOpen size={56} className="text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">React Camp</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          Videos 71 ma cover wana paripurna study plan eka.<br/>Login wee oba nawathu thanin patan ganna.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={onLogin}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-lg"
          >
            <LogIn size={20} />
            Login with Google
          </button>

          <button 
            onClick={onGuestAccess}
            className="w-full flex items-center justify-center gap-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 py-4 px-6 rounded-xl font-semibold transition-all"
          >
            <User size={20} />
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;