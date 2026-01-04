import React from 'react';
import { Youtube } from 'lucide-react';
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
  user 
}) => {
  const modules = currentDay.modules || [];
  const safeIndex = activeModuleIndex < modules.length ? activeModuleIndex : 0;
  const currentModule = modules[safeIndex];
  const progressPercent = getProgress(activeDay, currentDay.checklist.length);

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto pb-20 md:pb-0">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Current Module
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">{currentDay.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">{currentDay.description}</p>
            </div>
            
            <div className="flex bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 items-center gap-5">
              <div className="text-right">
                <div className="text-3xl font-black text-blue-600 dark:text-blue-500">{progressPercent}%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-bold">Complete</div>
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
        <div className="mb-8 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-3 min-w-max">
            {modules.map((module, index) => (
              <button
                key={index}
                onClick={() => setActiveModuleIndex(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all shadow-sm border ${
                  safeIndex === index 
                    ? 'bg-blue-600 text-white border-blue-600 scale-105' 
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Youtube size={18} className={safeIndex === index ? "text-white" : "text-rose-500"}/>
                {module.title}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <ModuleNotes currentModule={currentModule} />
          <TaskChecklist 
            currentDay={currentDay}
            activeDay={activeDay}
            completedSubTasks={completedSubTasks}
            toggleSubTask={toggleSubTask}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentArea;