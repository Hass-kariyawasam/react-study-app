import React from 'react';
import { Youtube, CheckCircle2, Clock } from 'lucide-react';

const VideoCard = ({ videoId, title, duration, isCompleted, onToggle }) => {
  return (
    <div 
      className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:scale-[1.02] ${
        isCompleted 
          ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500' 
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-400'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded-lg ${isCompleted ? 'bg-emerald-500' : 'bg-rose-500'}`}>
          {isCompleted ? (
            <CheckCircle2 size={20} className="text-white" />
          ) : (
            <Youtube size={20} className="text-white" />
          )}
        </div>
        <div className="flex-1">
          <h5 className={`font-bold text-sm ${isCompleted ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-800 dark:text-slate-200'}`}>
            {title}
          </h5>
          <div className="flex items-center gap-2 mt-1">
            <Clock size={12} className="text-slate-400" />
            <span className="text-xs text-slate-500 dark:text-slate-400">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;