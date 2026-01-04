import React from 'react';
import { BookOpen, Monitor, ExternalLink, LinkIcon as LinkIconLucide } from 'lucide-react';

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
              <h3 className="text-xl font-bold text-slate-900 dark:text