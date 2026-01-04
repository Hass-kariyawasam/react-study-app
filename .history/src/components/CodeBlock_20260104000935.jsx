import React from 'react';

const CodeBlock = ({ title, code }) => (
  <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
    <div className="bg-slate-50 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{title}</span>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
      </div>
    </div>
    <div className="bg-[#0f172a] p-4 overflow-x-auto">
      <pre className="text-xs font-mono text-blue-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

export default CodeBlock;