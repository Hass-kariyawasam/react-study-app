import React from 'react';
import { BookOpen, Monitor, ExternalLink, Link as LinkIcon } from 'lucide-react';

const ModuleNotes = ({ currentModule }) => {
  if (!currentModule) {
    return (
      <div className="lg:col-span-2 p-12 text-center bg-slate-100 dark:bg-slate-800/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-500">
        Select a module to see notes.
      </div>
    );
  }

  return (
    <div className="lg:col-span-2">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl min-h-[600px] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Study Notes</h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <Monitor size={12}/> {currentModule.duration}
                </span>
              </div>
            </div>
          </div>
          {currentModule.resources && currentModule.resources.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {currentModule.resources.map((res, i) => (
                <a 
                  key={i} 
                  href={res.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <LinkIcon size={14} /> {res.title} <ExternalLink size={10} className="opacity-50"/>
                </a>
              ))}
            </div>
          )}
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {currentModule.notes}
        </div>
      </div>
    </div>
  );
};

export default ModuleNotes;