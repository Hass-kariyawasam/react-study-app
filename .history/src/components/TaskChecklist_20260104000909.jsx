import React from 'react';
import { CheckCircle2, Globe, Monitor, Star } from 'lucide-react';

const TaskChecklist = ({ currentDay, activeDay, completedSubTasks, toggleSubTask, user }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden sticky top-28">
        <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-base flex items-center gap-2.5 text-slate-800 dark:text-slate-200">
            <CheckCircle2 className="text-emerald-500" size={20} />
            Daily Tasks
          </h3>
        </div>
        <div className="p-6 space-y-3">
          {currentDay.checklist.map((task, idx) => (
            <label 
              key={idx} 
              className="flex items-start gap-3.5 cursor-pointer p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700/50"
            >
              <div className="relative flex items-center mt-0.5">
                <input 
                  type="checkbox" 
                  className="peer sr-only"
                  checked={!!completedSubTasks[`${activeDay}-${idx}`]}
                  onChange={() => toggleSubTask(activeDay, idx)}
                />
                <div className="w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded-md peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all flex items-center justify-center bg-white dark:bg-slate-800">
                  <CheckCircle2 size={14} className="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all" />
                </div>
              </div>
              <span className={`text-sm font-medium leading-snug ${completedSubTasks[`${activeDay}-${idx}`] ? 'text-slate-400 line-through' : 'text-slate-700 dark:text-slate-300'}`}>
                {task}
              </span>
            </label>
          ))}
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/30 px-6 py-4 text-xs font-medium text-center text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2">
          {user ? (
            <><Globe size={12} className="text-blue-500"/> Synced to Cloud</>
          ) : (
            <><Monitor size={12} className="text-amber-500"/> Saved Locally</>
          )}
        </div>
      </div>

      {/* Motivational Card */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
        <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Star className="fill-yellow-300 text-yellow-300" size={18}/> Keep Going!</h4>
        <p className="text-sm text-indigo-100 leading-relaxed">
          "You don't have to be great to start, but you have to start to be great."
        </p>
      </div>
    </div>
  );
};

export default TaskChecklist;