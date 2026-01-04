import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Code, CheckCircle2, Circle, PlayCircle, ExternalLink, 
  ChevronRight, Terminal, Layers, Cpu, Globe, Database, Layout, 
  Monitor, AlertTriangle, Moon, Sun, Menu, X, Youtube, LogIn, LogOut,
  FileText, Link as LinkIcon, User, Star
} from 'lucide-react';

// --- FIREBASE IMPORTS ---
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  onSnapshot 
} from "firebase/firestore";

// --- FIREBASE CONFIGURATION ---
// OYAGE FIREBASE CONSOLE EKEN LABENA CONFIG EKA METHANATA PASTE KARANNA
const firebaseConfig = {
  apiKey: "AIzaSyB-jAlylCBVzA8pkTYtPJ0wfHBMFy5GWOQ",
  authDomain: "react-study-companion.firebaseapp.com",
  projectId: "react-study-companion",
  storageBucket: "react-study-companion.firebasestorage.app",
  messagingSenderId: "528706496960",
  appId: "1:528706496960:web:5e3f821bd3fea3c9ec4025"
};
// Initialize Firebase safely
let app, auth, db;
try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.log("Running in Guest/Offline Mode (Firebase not configured)");
}

// --- COMPONENTS ---

const MockScreenshot = ({ title, children, type = "code" }) => (
  <div className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800 transition-all">
    <div className="bg-slate-100 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
      {type === "browser" ? <Globe size={14} className="text-slate-500 dark:text-slate-400"/> : <Terminal size={14} className="text-slate-500 dark:text-slate-400"/>}
      <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">{title}</span>
    </div>
    <div className="p-0 text-slate-800 dark:text-slate-200 overflow-x-auto">
      {children}
    </div>
  </div>
);

const CodeBlock = ({ title, code }) => (
  <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
    <div className="bg-slate-50 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{title}</span>
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

// --- MAIN APP ---

const StudyPlanApp = () => {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [activeDay, setActiveDay] = useState(1);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [completedSubTasks, setCompletedSubTasks] = useState({});
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize Dark Mode from Local Storage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Apply Dark Mode Class to HTML Tag
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Auth Listener
  useEffect(() => {
    if (!auth) {
        setLoading(false);
        return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) setIsGuest(false);
    });
    return () => unsubscribe();
  }, []);

  // Load Data
  useEffect(() => {
    if (user && db) {
      const unsubDocs = onSnapshot(doc(db, "users", user.uid), (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          if (data.progress) setCompletedSubTasks(data.progress);
        }
      });
      return () => unsubDocs();
    } else if (isGuest) {
      const saved = localStorage.getItem("reactCampProgress");
      if (saved) {
        setCompletedSubTasks(JSON.parse(saved));
      }
    }
  }, [user, isGuest]);

  // Reset tab when day changes
  useEffect(() => {
    setActiveModuleIndex(0);
    setIsMobileMenuOpen(false);
  }, [activeDay]);

  const handleLogin = async () => {
    if (!auth) { alert("Firebase Setup not complete!"); return; }
    const provider = new GoogleAuthProvider();
    try { await signInWithPopup(auth, provider); } catch (error) { console.error(error); }
  };

  const handleGuestAccess = () => {
    setIsGuest(true);
    setLoading(false);
  };

  const handleLogout = () => {
    if (user) {
      signOut(auth);
    } else {
      setIsGuest(false);
    }
    setCompletedSubTasks({});
  };

  const toggleSubTask = async (dayId, taskId) => {
    const key = `${dayId}-${taskId}`;
    const newState = { ...completedSubTasks, [key]: !completedSubTasks[key] };
    setCompletedSubTasks(newState);
    if (user && db) {
      await setDoc(doc(db, "users", user.uid), { progress: newState, lastUpdated: new Date() }, { merge: true });
    } else {
      localStorage.setItem("reactCampProgress", JSON.stringify(newState));
    }
  };

  const getProgress = (dayId, totalTasks) => {
    let completed = 0;
    for (let i = 0; i < totalTasks; i++) {
      if (completedSubTasks[`${dayId}-${i}`]) completed++;
    }
    return Math.round((completed / totalTasks) * 100);
  };

  // --- EXPANDED CONTENT DATA (71 VIDEOS COVERED) ---
  const days = [
    { id: 1, title: "JS Foundation", icon: <Terminal size={18} /> },
    { id: 2, title: "React Basics", icon: <Layers size={18} /> },
    { id: 3, title: "State & Events", icon: <Cpu size={18} /> },
    { id: 4, title: "Lists & Forms", icon: <Layout size={18} /> },
    { id: 5, title: "Hooks & APIs", icon: <Database size={18} /> },
    { id: 6, title: "React Router", icon: <Globe size={18} /> },
    { id: 7, title: "Build & Deploy", icon: <CheckCircle2 size={18} /> },
  ];

  const content = {
    1: {
      title: "Day 1: Modern JavaScript (Videos 01-13)",
      description: "React patan ganna kalin ES6 Features (Arrow Functions, Destructuring, Map) hodata purudu wenna one.",
      checklist: [
        "Install Node.js & VS Code",
        "Watch Videos 01-03 (Intro)",
        "Practice Arrow Functions (Videos 04-06)",
        "Practice Destructuring (Videos 07-10)",
        "Practice Array Methods (Videos 11-13)"
      ],
      modules: [
        {
          title: "Unit 01: Setup (V 01-03)",
          duration: "Videos 1-3",
          resources: [{ title: "Node Download", url: "https://nodejs.org/" }],
          notes: (
            <div className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-slate-800 dark:text-slate-200">Video 01-03 Summary</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Mema videos wala Node.js install karana hati saha VS Code setup karana hati kiyala denawa.
                </p>
              </div>
              <MockScreenshot title="Terminal Check" type="terminal">
                <div className="font-mono text-xs text-green-400 bg-black p-3">
                  $ node -v<br/>
                  v18.17.0
                </div>
              </MockScreenshot>
            </div>
          )
        },
        {
          title: "Unit 02: Arrow Fn (V 04-06)",
          duration: "Videos 4-6",
          resources: [{ title: "ES6 Guide", url: "https://www.w3schools.com/react/react_es6.asp" }],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Video 04 sita 06 dakwa Arrow Functions ganai thiyenne.</p>
              <CodeBlock title="Arrow Function Syntax" code={`// Regular Function
function sayHello() {
  return "Hello";
}

// Arrow Function (Shorter)
const sayHello = () => "Hello";`} />
            </div>
          )
        },
        {
          title: "Unit 02: Destructuring (V 07-10)",
          duration: "Videos 7-10",
          resources: [],
          notes: (
            <div className="space-y-4">
              <h4 className="font-bold">Object Destructuring</h4>
              <p className="text-sm">Video 07-10 wala object eken data eliyata ganna lesi krama kiyala denawa.</p>
              <CodeBlock title="Example" code={`const person = { name: "Kasun", age: 25 };

// Old Way
const name = person.name;

// New Way (Destructuring)
const { name, age } = person;`} />
            </div>
          )
        },
        {
          title: "Unit 02: Array Methods (V 11-13)",
          duration: "Videos 11-13",
          resources: [],
          notes: (
            <div className="space-y-4">
              <h4 className="font-bold">Map & Filter</h4>
              <p className="text-sm">React wala list ekak pennanna aniwarayenma `.map()` ona wenawa.</p>
              <CodeBlock title="Map Example" code={`const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
// Result: [2, 4, 6]`} />
            </div>
          )
        }
      ]
    },
    2: {
      title: "Day 2: React Basics (Videos 14-28)",
      description: "Vite project ekak hadala, Components saha Props gana igena gamu.",
      checklist: [
        "Create Vite App (Videos 14-18)",
        "Understand Folder Structure (Videos 19-20)",
        "Create Components (Videos 21-25)",
        "Pass Props (Videos 26-28)"
      ],
      modules: [
        {
          title: "Unit 03: Create App (V 14-18)",
          duration: "Videos 14-18",
          resources: [{ title: "Vite", url: "https://vitejs.dev/" }],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Create React App (CRA) dan parana wadi. Api use karanne <strong>Vite</strong>.</p>
              <MockScreenshot title="Terminal" type="terminal">
                <div className="font-mono text-xs text-slate-300 bg-slate-950 p-3">
                  npm create vite@latest my-app -- --template react<br/>
                  cd my-app<br/>
                  npm install<br/>
                  npm run dev
                </div>
              </MockScreenshot>
            </div>
          )
        },
        {
          title: "Unit 04: Components (V 21-25)",
          duration: "Videos 21-25",
          resources: [],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Component ekak kiyanne JavaScript function ekak, eka HTML return karanawa.</p>
              <CodeBlock title="Greeting.jsx" code={`function Greeting() {
  return <h1>Ayubowan!</h1>;
}

export default Greeting;`} />
            </div>
          )
        },
        {
          title: "Unit 04: Props (V 26-28)",
          duration: "Videos 26-28",
          resources: [],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Props walin karanne Parent ge indan Child ta data yawana eka.</p>
              <CodeBlock title="Props Usage" code={`// Parent Component
<Car brand="Toyota" />

// Child Component
function Car(props) {
  return <h2>I have a {props.brand}</h2>;
}`} />
            </div>
          )
        }
      ]
    },
    3: {
      title: "Day 3: State Management (Videos 29-38)",
      description: "App eke data wenas wena hati (State) saha Events handle karana hati.",
      checklist: [
        "Intro to State (Videos 29-30)",
        "useState Hook (Videos 31-33)",
        "Event Handling (Videos 34-36)",
        "State vs Props (Videos 37-38)"
      ],
      modules: [
        {
          title: "Unit 05: useState (V 31-33)",
          duration: "Videos 31-33",
          resources: [{title: "React State", url: "https://react.dev/learn/state-a-components-memory"}],
          notes: (
            <div className="space-y-4">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
                <h4 className="font-bold text-rose-700 dark:text-rose-300">Important Rule</h4>
                <p className="text-sm">Variable ekak wenas unata UI eka update wenne na. Ekata <strong>State</strong> ona.</p>
              </div>
              <CodeBlock title="Counter Example" code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`} />
            </div>
          )
        },
        {
          title: "Unit 05: Events (V 34-36)",
          duration: "Videos 34-36",
          resources: [],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">onClick, onChange wage events React wala handle karana hati.</p>
              <CodeBlock title="Event" code={`const handleClick = () => {
  alert("Button Clicked!");
}

<button onClick={handleClick}>Click Me</button>`} />
            </div>
          )
        }
      ]
    },
    4: {
      title: "Day 4: Lists & Forms (Videos 39-48)",
      description: "Data godak pennana hati (Lists) saha User gen data ganna hati (Forms).",
      checklist: [
        "Rendering Lists (Videos 39-41)",
        "Keys in React (Videos 42-43)",
        "Basic Forms (Videos 44-45)",
        "Complex Forms (Videos 46-48)"
      ],
      modules: [
        {
          title: "Unit 06: Lists (V 39-43)",
          duration: "Videos 39-43",
          resources: [],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Array ekak loop karala components hadanna `.map()` use karanawa. `key` prop eka danna amathaka karanna epa.</p>
              <CodeBlock title="List Rendering" code={`const fruits = ["Apple", "Banana", "Orange"];

{fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
))}`} />
            </div>
          )
        },
        {
          title: "Unit 07: Forms (V 44-48)",
          duration: "Videos 44-48",
          resources: [],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Input field ekaka value eka state ekata link karanna one (Controlled Components).</p>
              <CodeBlock title="Form Input" code={`const [name, setName] = useState("");

<input 
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`} />
            </div>
          )
        }
      ]
    },
    5: {
      title: "Day 5: Effects & API (Videos 49-58)",
      description: "Pitathin data ganna hati (API) saha Component Lifecycle.",
      checklist: [
        "Lifecycle Methods (Videos 49-50)",
        "useEffect Hook (Videos 51-53)",
        "Fetch API Data (Videos 54-56)",
        "Async/Await (Videos 57-58)"
      ],
      modules: [
        {
          title: "Unit 08: useEffect (V 51-53)",
          duration: "Videos 51-53",
          resources: [{title: "useEffect", url: "https://react.dev/reference/react/useEffect"}],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Component eka load unama wada karanna `useEffect` one.</p>
              <CodeBlock title="useEffect Syntax" code={`useEffect(() => {
  console.log("Component Mounted!");
}, []); // Empty array = Runs only once`} />
            </div>
          )
        },
        {
          title: "Unit 08: API Fetch (V 54-58)",
          duration: "Videos 54-58",
          resources: [],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Data ganna `fetch` ho `axios` pawichchi karanna puluwan.</p>
              <CodeBlock title="API Call" code={`useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);`} />
            </div>
          )
        }
      ]
    },
    6: {
      title: "Day 6: Routing (Videos 59-66)",
      description: "Page ekak reload wenne nathuwa thawa page ekakata yamu.",
      checklist: [
        "Install Router (Videos 59-60)",
        "Links & NavLinks (Videos 61-62)",
        "URL Parameters (Videos 63-64)",
        "Programmatic Nav (Videos 65-66)"
      ],
      modules: [
        {
          title: "Unit 09: Setup (V 59-60)",
          duration: "Videos 59-60",
          resources: [{title: "React Router", url: "https://reactrouter.com/"}],
          notes: (
            <div className="space-y-4">
              <p className="text-sm">Mulikama de thamai App eka `BrowserRouter` eken cover karana eka.</p>
              <CodeBlock title="main.jsx" code={`import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>`} />
            </div>
          )
        },
        {
          title: "Unit 09: Routes (V 61-66)",
          duration: "Videos 61-66",
          resources: [],
          notes: (
            <div className="space-y-4">
              <CodeBlock title="App.jsx Routes" code={`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/user/:id" element={<UserProfile />} />
</Routes>`} />
            </div>
          )
        }
      ]
    },
    7: {
      title: "Day 7: Final Project (Videos 67-71)",
      description: "Igena gaththu okkoma ekathu karala Project ekak hadala Deploy karamu.",
      checklist: [
        "Project Setup (Video 67)",
        "Building UI (Videos 68-69)",
        "Deployment Setup (Video 70)",
        "Final Review (Video 71)"
      ],
      modules: [
        {
          title: "Unit 10: Project (V 67-69)",
          duration: "Videos 67-69",
          resources: [],
          notes: (
            <div className="space-y-4">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
                <h4 className="font-bold text-emerald-800 dark:text-emerald-200">Movie App Project</h4>
                <p className="text-sm mt-1">Me videos wala api Movie Search App ekak hadanawa. API eken data aran, cards wala pennanawa.</p>
              </div>
            </div>
          )
        },
        {
          title: "Unit 11: Deploy (V 70-71)",
          duration: "Videos 70-71",
          resources: [{title: "Firebase Hosting", url: "https://firebase.google.com/docs/hosting"}],
          notes: (
            <div className="space-y-4">
              <h4 className="font-bold">Deployment Steps</h4>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li><code>npm run build</code> (Build folder eka hadanna)</li>
                <li><code>firebase login</code></li>
                <li><code>firebase init</code> (Hosting select karanna, public dir = 'dist')</li>
                <li><code>firebase deploy</code></li>
              </ul>
            </div>
          )
        }
      ]
    }
  };

  const currentDay = content[activeDay] || content[1];
  const modules = currentDay.modules || [];
  const safeModuleIndex = (modules && activeModuleIndex < modules.length) ? activeModuleIndex : 0;
  const currentModule = modules[safeModuleIndex];
  const progressPercent = getProgress(activeDay, currentDay.checklist.length);

  // --- RENDER LOGIN SCREEN ---
  if (!user && !isGuest && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 transition-colors duration-300">
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
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/30"
            >
              <LogIn size={20} />
              Login with Google
            </button>

            <button 
              onClick={handleGuestAccess}
              className="w-full flex items-center justify-center gap-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 py-4 px-6 rounded-xl font-semibold transition-all"
            >
              <User size={20} />
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER MAIN UI ---
  return (
    <div className={`flex flex-col h-screen font-sans transition-colors duration-300 bg-slate-50 dark:bg-slate-950`}>
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* MOBILE HEADER */}
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 flex justify-between items-center z-30 shadow-sm sticky top-0">
           <h1 className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2 text-lg">
              <BookOpen className="fill-blue-100 dark:fill-blue-900" size={24}/> React Camp
           </h1>
           <div className="flex items-center gap-2">
             <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-transform">
               {isDarkMode ? <Sun size={20} className="text-amber-400"/> : <Moon size={20} className="text-slate-600"/>}
             </button>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-transform">
               {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
             </button>
           </div>
        </div>

        {/* SIDEBAR */}
        <div className={`fixed inset-0 z-20 bg-slate-900/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMobileMenuOpen(false)} />
        
        <div className={`fixed md:relative z-30 w-72 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 flex flex-col transition-transform duration-300 shadow-2xl md:shadow-none ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 hidden md:block">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-black text-blue-600 dark:text-blue-500 flex items-center gap-2 tracking-tight">
                <BookOpen className="fill-blue-100 dark:fill-blue-900/50" /> React Camp
              </h1>
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {isDarkMode ? <Sun size={20} className="text-amber-400"/> : <Moon size={20} className="text-slate-400"/>}
              </button>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className={`w-10 h-10 rounded-full ${user ? 'bg-gradient-to-tr from-blue-500 to-indigo-500' : 'bg-slate-400'} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                    {user?.displayName?.[0] || (isGuest ? "G" : "U")}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                      {user ? user.displayName : "Guest User"}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`w-2 h-2 rounded-full ${user ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate uppercase tracking-wide">
                        {user ? "Online" : "Local Mode"}
                      </p>
                    </div>
                </div>
            </div>
          </div>

          <div className="p-4 space-y-2 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center gap-3.5 transition-all duration-200 group ${
                  activeDay === day.id
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 shadow-sm ring-1 ring-blue-200 dark:ring-blue-800'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${activeDay === day.id ? 'bg-white dark:bg-blue-900/40 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-slate-700'}`}>
                  {day.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-semibold truncate">{day.title}</span>
                    {getProgress(day.id, content[day.id].checklist.length) === 100 && (
                       <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full transition-all duration-500 ease-out rounded-full"
                      style={{ width: `${getProgress(day.id, content[day.id].checklist.length)}%` }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
             <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-xl transition-colors">
               <LogOut size={18} /> Sign Out
             </button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth bg-slate-50 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto pb-20 md:pb-0">
            
            {/* Header */}
            <div className="mb-8 md:mb-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                   <div className="flex items-center gap-2 mb-3">
                     <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200 dark:border-blue-800">
                       Current Module
                     </span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">{currentDay.title}</h2>
                   <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">{currentDay.description}</p>
                </div>
                
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

            {/* VIDEO TABS */}
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

            {/* GRID LAYOUT */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* LEFT: Notes Section */}
              <div className="lg:col-span-2 space-y-8">
                 {currentModule ? (
                   <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none min-h-[600px] relative overflow-hidden">
                      {/* Decorative top gradient */}
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
                        {/* Extra Resources */}
                        {currentModule.resources && (
                            <div className="flex flex-wrap gap-2">
                                {currentModule.resources.map((res, i) => (
                                    <a key={i} href={res.url} target="_blank" rel="noreferrer" 
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-slate-200 dark:border-slate-700">
                                        <LinkIcon size={14} /> {res.title} <ExternalLink size={10} className="opacity-50"/>
                                    </a>
                                ))}
                            </div>
                        )}
                      </div>
                      
                      <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-rose-500 dark:prose-code:text-rose-400 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800">
                        {currentModule.notes}
                      </div>
                   </div>
                 ) : (
                   <div className="p-12 text-center bg-slate-100 dark:bg-slate-800/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 text-slate-500">
                     Select a module above to see notes.
                   </div>
                 )}
              </div>

              {/* RIGHT: Checklist Section */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-none overflow-hidden sticky top-28">
                  <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-5 border-b border-slate-200 dark:border-slate-800">
                    <h3 className="font-bold text-base flex items-center gap-2.5 text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="text-emerald-500" size={20} />
                      Daily Tasks
                    </h3>
                  </div>
                  <div className="p-6 space-y-3">
                    {currentDay.checklist.map((task, idx) => (
                      <label key={idx} className="flex items-start gap-3.5 cursor-pointer p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all active:scale-[0.98] border border-transparent hover:border-slate-100 dark:hover:border-slate-700/50">
                        <div className="relative flex items-center mt-0.5">
                          <input 
                            type="checkbox" 
                            className="peer sr-only"
                            checked={!!completedSubTasks[`${activeDay}-${idx}`]}
                            onChange={() => toggleSubTask(activeDay, idx)}
                          />
                          <div className="w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded-md peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all flex items-center justify-center bg-white dark:bg-slate-800">
                            <CheckCircle2 size={14} className="text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all duration-200" />
                          </div>
                        </div>
                        <span className={`text-sm font-medium leading-snug transition-colors ${completedSubTasks[`${activeDay}-${idx}`] ? 'text-slate-400 line-through decoration-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>
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
                   <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                   <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Star className="fill-yellow-300 text-yellow-300" size={18}/> Keep Going!</h4>
                   <p className="text-sm text-indigo-100 leading-relaxed">
                     "You don't have to be great to start, but you have to start to be great."
                   </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlanApp;