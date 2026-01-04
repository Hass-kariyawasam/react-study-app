import React from 'react';
import { Youtube, Monitor, PlayCircle, CheckCircle2 } from 'lucide-react';
import ModuleNotes from './ModuleNotes';
import TaskChecklist from './TaskChecklist';

const ContentArea = ({ 
  currentDay, 
  activeDay, 
  activeModuleIndex, 
  setActiveModuleIndex, 
  completedSubTasks, 
  toggleSubTask, 
  getProgress, 
  user,
  totalPoints,
  streak
}) => {
  
  // Safe access to modules
  const modules = currentDay?.modules || [];
  const safeModuleIndex = (modules && activeModuleIndex < modules.length) ? activeModuleIndex : 0;
  const currentModule = modules[safeModuleIndex];
  const progressPercent = getProgress(activeDay, currentDay?.checklist?.length || 0);

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto pb-20 md:pb-0">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
               <div className="flex items-center gap-2 mb-3">
                 <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200 dark:border-blue-800">
                   {currentDay.title ? "Current Module" : "Loading..."}
                 </span>
               </div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
                 {currentDay.title || "Select a Day"}
               </h2>
               <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
                 {currentDay.description}
               </p>
            </div>
            
            {/* Progress Circle (Hidden on mobile) */}
            <div className="hidden min-[400px]:flex bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm items-center gap-5">
              <div className="text-right">
                 <div className="text-3xl font-black text-blue-600 dark:text-blue-500">{progressPercent}%</div>
                 <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest">Complete</div>
              </div>
              <div className="h-14 w-14 relative">
                 <svg className="w-full h-full transform -rotate-90">
                   <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="5" fill="transparent" className="text-slate-200 dark:text-slate-800" />
                   <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="5" fill="transparent" strokeDasharray={138} strokeDashoffset={138 - (138 * progressPercent) / 100} className="text-blue-500 transition-all duration-700" strokeLinecap="round" />
                 </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Video Tabs */}
        {modules.length > 0 && (
          <div className="mb-8 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex gap-3 min-w-max">
              {modules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => setActiveModuleIndex(index)}
                  className={`
                    flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all shadow-sm border
                    ${safeModuleIndex === index 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-blue-500/30 scale-105' 
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}
                  `}
                >
                  <Youtube size={18} className={safeModuleIndex === index ? "text-white" : "text-rose-500"}/>
                  {module.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT: Notes Section */}
          <ModuleNotes currentModule={currentModule} />

          {/* RIGHT: Checklist Section */}
          <div className="space-y-6">
            <TaskChecklist 
              currentDay={currentDay} 
              activeDay={activeDay}
              completedSubTasks={completedSubTasks}
              toggleSubTask={toggleSubTask}
              user={user}
            />
            
            {/* Stats Card */}
            {user && (
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg">
                 <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">Your Progress</h4>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Level 1</span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-3 rounded-xl">
                       <div className="text-2xl font-bold">{totalPoints || 0}</div>
                       <div className="text-xs text-indigo-200">Total Points</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl">
                       <div className="text-2xl font-bold">{streak || 0} 🔥</div>
                       <div className="text-xs text-indigo-200">Day Streak</div>
                    </div>
                 </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContentArea;