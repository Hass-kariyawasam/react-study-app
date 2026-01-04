/*import React from 'react';
import { Globe, Terminal } from 'lucide-react';

const MockScreenshot = ({ title, children, type = "code" }) => (
  <div className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800">
    <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
      {type === "browser" ? <Globe size={14} className="text-slate-500"/> : <Terminal size={14} className="text-slate-500"/>}
      <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase">{title}</span>
    </div>
    <div className="p-0 text-slate-800 dark:text-slate-200 overflow-x-auto">
      {children}
    </div>
  </div>
);

export default MockScreenshot;*/

import React from 'react';
import { Globe, Terminal } from 'lucide-react';

const MockScreenshot = ({ title, children, type = "code" }) => (
  <div className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800">
    <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
      {type === "browser" ? <Globe size={14} className="text-slate-500"/> : <Terminal size={14} className="text-slate-500"/>}
      <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase">{title}</span>
    </div>
    <div className="p-0 text-slate-800 dark:text-slate-200 overflow-x-auto">
      {children}
    </div>
  </div>
);

export default MockScreenshot;