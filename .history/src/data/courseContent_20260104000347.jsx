import React from 'react';
import CodeBlock from '../components/CodeBlock';
import MockScreenshot from '../components/MockScreenshot';

export const days = [
  { id: 1, title: "JS Foundation", icon: "Terminal" },
  { id: 2, title: "React Basics", icon: "Layers" },
  { id: 3, title: "State & Events", icon: "Cpu" },
  { id: 4, title: "Lists & Forms", icon: "Layout" },
  { id: 5, title: "Hooks & APIs", icon: "Database" },
  { id: 6, title: "React Router", icon: "Globe" },
  { id: 7, title: "Build & Deploy", icon: "CheckCircle2" },
];

export const courseContent = {
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
        title: "Setup (V 01-03)",
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
                $ node -v<br/>v18.17.0
              </div>
            </MockScreenshot>
          </div>
        )
      },
      {
        title: "Arrow Functions (V 04-06)",
        duration: "Videos 4-6",
        resources: [{ title: "ES6 Guide", url: "https://w3schools.com/react/react_es6.asp" }],
        notes: (
          <div className="space-y-4">
            <p className="text-sm">Video 04-06 wala Arrow Functions gana kiyala denawa.</p>
            <CodeBlock title="Arrow Function" code={`// Regular Function
function sayHello() {
  return "Hello";
}

// Arrow Function
const sayHello = () => "Hello";`} />
          </div>
        )
      },
      {
        title: "Destructuring (V 07-10)",
        duration: "Videos 7-10",
        resources: [],
        notes: (
          <div className="space-y-4">
            <h4 className="font-bold">Object Destructuring</h4>
            <CodeBlock title="Example" code={`const person = { name: "Kasun", age: 25 };

// Old Way
const name = person.name;

// New Way
const { name, age } = person;`} />
          </div>
        )
      },
      {
        title: "Array Methods (V 11-13)",
        duration: "Videos 11-13",
        resources: [],
        notes: (
          <div className="space-y-4">
            <h4 className="font-bold">Map & Filter</h4>
            <CodeBlock title="Map" code={`const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// [2, 4, 6]`} />
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
        title: "Create App (V 14-18)",
        duration: "Videos 14-18",
        resources: [{ title: "Vite", url: "https://vitejs.dev/" }],
        notes: (
          <div className="space-y-4">
            <p className="text-sm">Vite use karala fast React project ekak hadamu.</p>
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
        title: "Components (V 21-25)",
        duration: "Videos 21-25",
        resources: [],
        notes: (
          <div className="space-y-4">
            <p className="text-sm">Component ekak kiyanne JavaScript function ekak.</p>
            <CodeBlock title="Greeting.jsx" code={`function Greeting() {
  return <h1>Ayubowan!</h1>;
}

export default Greeting;`} />
          </div>
        )
      },
      {
        title: "Props (V 26-28)",
        duration: "Videos 26-28",
        resources: [],
        notes: (
          <div className="space-y-4">
            <p className="text-sm">Props walin Parent ge indan Child ta data yawanawa.</p>
            <CodeBlock title="Props" code={`<Car brand="Toyota" />

function Car(props) {
  return <h2>{props.brand}</h2>;
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
        title: "useState (V 31-33)",
        duration: "Videos 31-33",
        resources: [{title: "React State", url: "https://react.dev/learn/state-a-components-memory"}],
        notes: (
          <div className="space-y-4">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
              <h4 className="font-bold text-rose-700 dark:text-rose-300">Important</h4>
              <p className="text-sm">Variable ekak wenas unata UI update wenne na. State ona.</p>
            </div>
            <CodeBlock title="Counter" code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}`} />
          </div>
        )
      },
      {
        title: "Events (V 34-36)",
        duration: "Videos 34-36",
        resources: [],
        notes: (
          <div className="space-y-4">
            <CodeBlock title="Event" code={`const handleClick = () => {
  alert("Clicked!");
}

<button onClick={handleClick}>
  Click Me
</button>`} />
          </div>
        )
      }
    ]
  },
  4: {
    title: "Day 4: Lists & Forms (Videos 39-48)",
    description: "Data godak pennana hati (Lists) saha Forms.",
    checklist: [
      "Rendering Lists (Videos 39-41)",
      "Keys in React (Videos 42-43)",
      "Basic Forms (Videos 44-45)",
      "Complex Forms (Videos 46-48)"
    ],
    modules: [
      {
        title: "Lists (V 39-43)",
        duration: "Videos 39-43",
        resources: [],
        notes: (
          <div className="space-y-4">
            <p className="text-sm">Array ekak loop karala components hadanna `.map()` use karanawa.</p>
            <CodeBlock title="List" code={`const fruits = ["Apple", "Banana"];

{fruits.map((fruit, i) => (
  <li key={i}>{fruit}</li>
))}`} />
          </div>
        )
      },
      {
        title: "Forms (V 44-48)",
        duration: "Videos 44-48",
        resources: [],
        notes: (
          <div className="space-y-4">
            <CodeBlock title="Form" code={`const [name, setName] = useState("");

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
    description: "Pitathin data ganna hati (API) saha Lifecycle.",
    checklist: [
      "Lifecycle (Videos 49-50)",
      "useEffect Hook (Videos 51-53)",
      "Fetch API (Videos 54-56)",
      "Async/Await (Videos 57-58)"
    ],
    modules: [
      {
        title: "useEffect (V 51-53)",
        duration: "Videos 51-53",
        resources: [{title: "useEffect", url: "https://react.dev/reference/react/useEffect"}],
        notes: (
          <div className="space-y-4">
            <CodeBlock title="useEffect" code={`useEffect(() => {
  console.log("Mounted!");
}, []);`} />
          </div>
        )
      },
      {
        title: "API (V 54-58)",
        duration: "Videos 54-58",
        resources: [],
        notes: (
          <div className="space-y-4">
            <CodeBlock title="Fetch" code={`useEffect(() => {
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
    description: "Page reload wenne nathuwa navigate karanna.",
    checklist: [
      "Install Router (Videos 59-60)",
      "Links (Videos 61-62)",
      "URL Params (Videos 63-64)",
      "Navigation (Videos 65-66)"
    ],
    modules: [
      {
        title: "Setup (V 59-60)",
        duration: "Videos 59-60",
        resources: [{title: "React Router", url: "https://reactrouter.com/"}],
        notes: (
          <div className="space-y-4">
            <CodeBlock title="main.jsx" code={`import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>`} />
          </div>
        )
      },
      {
        title: "Routes (V 61-66)",
        duration: "Videos 61-66",
        resources: [],
        notes: (
          <div className="space-y-4">
            <CodeBlock title="Routes" code={`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`} />
          </div>
        )
      }
    ]
  },
  7: {
    title: "Day 7: Final Project (Videos 67-71)",
    description: "Igena gaththu okkoma ekathu karala Deploy karamu.",
    checklist: [
      "Project Setup (Video 67)",
      "Building UI (Videos 68-69)",
      "Deployment (Video 70)",
      "Final Review (Video 71)"
    ],
    modules: [
      {
        title: "Project (V 67-69)",
        duration: "Videos 67-69",
        resources: [],
        notes: (
          <div className="space-y-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-200">Movie App</h4>
              <p className="text-sm mt-1">API eken data aran Movie cards wala pennanawa.</p>
            </div>
          </div>
        )
      },
      {
        title: "Deploy (V 70-71)",
        duration: "Videos 70-71",
        resources: [{title: "Firebase", url: "https://firebase.google.com/docs/hosting"}],
        notes: (
          <div className="space-y-4">
            <h4 className="font-bold">Steps</h4>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><code>npm run build</code></li>
              <li><code>firebase init</code></li>
              <li><code>firebase deploy</code></li>
            </ul>
          </div>
        )
      }
    ]
  }
};