import React from 'react';
import CodeBlock from '../components/CodeBlock';
import MockScreenshot from '../components/MockScreenshot';
import VideoCard from '../components/VideoCard';

export const days = [
  { id: 1, title: "JS Foundation", icon: "Terminal", videos: 13 },
  { id: 2, title: "React Basics", icon: "Layers", videos: 15 },
  { id: 3, title: "State & Events", icon: "Cpu", videos: 10 },
  { id: 4, title: "Lists & Forms", icon: "Layout", videos: 10 },
  { id: 5, title: "Hooks & APIs", icon: "Database", videos: 10 },
  { id: 6, title: "React Router", icon: "Globe", videos: 8 },
  { id: 7, title: "Build & Deploy", icon: "CheckCircle2", videos: 5 },
];

export const courseContent = {
  1: {
    title: "Day 1: Modern JavaScript Foundation (Videos 01-13)",
    description: "React හොඳට ඉගෙන ගන්න කලින් JavaScript ES6+ features හොඳින් දැනගෙන ඉන්න ඕන. Arrow functions, destructuring, map, filter වගේ දේවල් පුරුදු වෙන්න.",
    checklist: [
      "Node.js & VS Code install කරන්න",
      "Videos 01-03 බලන්න (Introduction)",
      "Arrow Functions practice කරන්න (V 04-06)",
      "Destructuring practice කරන්න (V 07-10)",
      "Array Methods practice කරන්න (V 11-13)"
    ],
    modules: [
      {
        title: "Introduction & Setup",
        duration: "Videos 1-3",
        videoIds: ["v01", "v02", "v03"],
        resources: [
          { title: "Node.js Download", url: "https://nodejs.org/" },
          { title: "VS Code Download", url: "https://code.visualstudio.com/" },
          { title: "ES6 Tutorial", url: "https://www.w3schools.com/js/js_es6.asp" }
        ],
        notes: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">📚 Video 01-03: Getting Started</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                මේ videos වලින් ඔයා React development environment එක setup කරන හැටි ඉගෙන ගන්නවා. 
                Node.js සහ VS Code install කරලා, terminal එකෙන් commands run කරන හැටි පුරුදු වෙන්න.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                  <span className="text-2xl">💻</span> What You'll Learn
                </h5>
                <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                  <li>✅ Node.js installation & verification</li>
                  <li>✅ VS Code extensions for React</li>
                  <li>✅ Terminal basics & npm commands</li>
                  <li>✅ Creating your first project</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚡</span> Quick Commands
                </h5>
                <div className="text-xs space-y-2 font-mono bg-slate-900 text-green-400 p-3 rounded">
                  <div>$ node -v</div>
                  <div>$ npm -v</div>
                  <div>$ npm init -y</div>
                </div>
              </div>
            </div>

            <MockScreenshot title="Terminal Setup Check" type="terminal">
              <div className="font-mono text-xs space-y-1 bg-slate-950 p-4">
                <div className="text-green-400">$ node -v</div>
                <div className="text-blue-300">v18.17.0</div>
                <div className="text-green-400 mt-2">$ npm -v</div>
                <div className="text-blue-300">9.6.7</div>
                <div className="text-yellow-400 mt-3">✓ Setup complete!</div>
              </div>
            </MockScreenshot>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-2">🎯 Practice Exercise</h5>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Terminal එක open කරලා <code className="bg-amber-100 dark:bg-amber-900 px-2 py-0.5 rounded">node -v</code> සහ <code className="bg-amber-100 dark:bg-amber-900 px-2 py-0.5 rounded">npm -v</code> commands run කරලා version numbers පේනවද බලන්න.
              </p>
            </div>
          </div>
        )
      },
      {
        title: "Arrow Functions",
        duration: "Videos 4-6",
        videoIds: ["v04", "v05", "v06"],
        resources: [
          { title: "MDN Arrow Functions", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" },
          { title: "JS.info Functions", url: "https://javascript.info/arrow-functions-basics" }
        ],
        notes: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🎯 Video 04-06: Arrow Functions Mastery</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Arrow functions (= ) යනු JavaScript හි functions ලියන නවීන ක්‍රමයයි. React වල components හදන්න මේක බෙහෙවින් වැදගත්. 
                Normal functions වලට වඩා ටික් කෙටි සහ පිරිසිදුයි.
              </p>
            </div>

            <div className="grid gap-4">
              <CodeBlock title="📘 Traditional Function" code={`// Old Way - පරන විදිය
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Kasun")); // Hello, Kasun!`} />

              <CodeBlock title="✨ Arrow Function" code={`// New Way - අලුත් විදිය (එකම දේ)
const greet = (name) => {
  return "Hello, " + name + "!";
}

// Even Shorter - තවත් කෙටියෙන්
const greet = (name) => "Hello, " + name + "!";

console.log(greet("Kasun")); // Hello, Kasun!`} />
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg">
              <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3">🔥 Key Differences සහ වෙනස්කම්</h5>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">Shorter Syntax:</strong>
                    <span className="text-slate-600 dark:text-slate-400 ml-2">කෙටි සහ පැහැදිලි. <code>function</code> keyword එක අවශ්‍ය නෑ.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">Implicit Return:</strong>
                    <span className="text-slate-600 dark:text-slate-400 ml-2">එක line එකක් විතරක් තිබ්බොත් <code>return</code> keyword එක අවශ්‍ය නෑ.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">No "this" binding:</strong>
                    <span className="text-slate-600 dark:text-slate-400 ml-2">React වල වැදගත්. Arrow functions වල <code>this</code> parent scope එකේ value එකම තියෙනවා.</span>
                  </div>
                </div>
              </div>
            </div>

            <CodeBlock title="🎮 Practice Examples - පුහුණු උදාහරණ" code={`// Example 1: Simple calculation
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// Example 2: Array processing
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Example 3: Filter even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Example 4: React style component (preview)
const Button = (props) => <button>{props.text}</button>;`} />

            <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
              <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-2">⚠️ Common Mistakes - වැරදි</h5>
              <CodeBlock title="❌ Wrong" code={`// වැරදියි - curly braces තියෙනවා නමුත් return නෑ
const greet = (name) => { "Hello" }; // undefined

// හරියි - return keyword එක එකතු කරන්න
const greet = (name) => { return "Hello"; };

// හෝ brackets ඉවත් කරන්න
const greet = (name) => "Hello";`} />
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
              <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Your Challenge - ඔයාගේ අභියෝගය</h5>
              <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
                <li>Arrow function එකක් ලියන්න ගණන් දෙකක් multiply කරන්න</li>
                <li>Array එකක් හදලා එහි සෑම අංකයක්ම වර්ගකරණය කරන arrow function එකක් ලියන්න</li>
                <li>නමක් ගෙන "Welcome, [name]!" කියන message එකක් return කරන function එකක් හදන්න</li>
              </ol>
            </div>
          </div>
        )
      },
      {
        title: "Destructuring",
        duration: "Videos 7-10",
        videoIds: ["v07", "v08", "v09", "v10"],
        resources: [
          { title: "MDN Destructuring", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" }
        ],
        notes: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-cyan-500">
              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">📦 Video 07-10: Destructuring Magic</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Destructuring යනු objects සහ arrays වලින් values extract කරන elegant ක්‍රමයයි. 
                React props handle කරන්න මේක අනිවාර්යයෙන්ම දැනගෙන ඉන්න ඕන!
              </p>
            </div>

            <div className="space-y-4">
              <CodeBlock title="🎁 Object Destructuring" code={`// Traditional Way - පරණ විදිය
const person = {
  name: "Nimal",
  age: 25,
  city: "Colombo"
};

const name = person.name;
const age = person.age;
const city = person.city;

// Modern Way - අලුත් විදිය (Destructuring)
const { name, age, city } = person;

console.log(name); // "Nimal"
console.log(age);  // 25
console.log(city); // "Colombo"`} />

              <CodeBlock title="📋 Array Destructuring" code={`// Array වලින් values extract කරන්න
const colors = ["Red", "Green", "Blue", "Yellow"];

// Old Way
const first = colors[0];
const second = colors[1];

// New Way - Destructuring
const [first, second, third] = colors;

console.log(first);  // "Red"
console.log(second); // "Green"
console.log(third);  // "Blue"`} />

              <CodeBlock title="⚡ React Props Example" code={`// React Component එකක Props Destructuring
// Without Destructuring - අපහසුයි
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.age} years old</p>
    </div>
  );
}

// With Destructuring - පහසුයි!
function UserCard({ name, email, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{age} years old</p>
    </div>
  );
}`} />

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🎨 Advanced Techniques</h5>
                <CodeBlock title="Default Values & Renaming" code={`// Default values එකතු කරන්න
const { name = "Guest", age = 18 } = person;

// Variables rename කරන්න
const { name: userName, age: userAge } = person;

// Nested destructuring
const user = {
  id: 1,
  profile: {
    name: "Kasun",
    location: "Galle"
  }
};

const { profile: { name, location } } = user;

// Rest operator (...) use කරන්න
const { first, ...rest } = colors;
console.log(rest); // ["Green", "Blue", "Yellow"]`} />
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
              <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-2">💡 Pro Tips</h5>
              <ul className="text-sm space-y-2 text-amber-700 dark:text-amber-400 list-disc list-inside">
                <li>React වල Props destructure කරන්න අනිවාර්යයෙන්ම පුරුදු වෙන්න</li>
                <li>API responses handle කරන්න destructuring ගොඩක් helpful</li>
                <li>Nested objects වලට ගොඩක් deep යන එක avoid කරන්න (confusing වෙන්න පුළුවන්)</li>
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
              <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Challenge</h5>
              <div className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400">
                <p><strong>Task 1:</strong> Object එකක් හදලා එහි 5 properties destructure කරන්න</p>
                <p><strong>Task 2:</strong> Array එකක first 3 items extract කරලා rest එක වෙනම variable එකට දාන්න</p>
                <p><strong>Task 3:</strong> Function එකක parameters destructure කරන්න</p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Array Methods",
        duration: "Videos 11-13",
        videoIds: ["v11", "v12", "v13"],
        resources: [
          { title: "Array Methods Guide", url: "https://www.w3schools.com/js/js_array_methods.asp" },
          { title: "JavaScript.info Arrays", url: "https://javascript.info/array-methods" }
        ],
        notes: (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-violet-500">
              <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🔧 Video 11-13: Array Methods Power</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                React වල lists render කරන්න Array methods (map, filter, reduce) දැනගෙන ඉන්න අනිවාර්‍යයි. 
                මේවා master කරන්න මේ videos හොඳට බලන්න!
              </p>
            </div>

            <CodeBlock title="🗺️ MAP - Array එකක් transform කරන්න" code={`// Map: සෑම item එකක්ම වෙනස් කරන්න
const numbers = [1, 2, 3, 4, 5];

// දෙගුණ කරන්න
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// වර්ගකරණය කරන්න
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// Objects වලට convert කරන්න
const objects = numbers.map(num => ({ value: num }));
console.log(objects); // [{ value: 1 }, { value: 2 }, ...]`} />

            <CodeBlock title="🔍 FILTER - Items තෝරා ගන්න" code={`// Filter: condition එකකට match වෙන items විතරක් keep කරන්න
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ඒකාන්ත අංක විතරක්
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// 5 ට වඩා වැඩි අංක
const greaterThan5 = numbers.filter(num => num > 5);
console.log(greaterThan5); // [6, 7, 8, 9, 10]

// Complex example - Objects filter කරන්න
const users = [
  { name: "Nimal", age: 25 },
  { name: "Sunil", age: 17 },
  { name: "Kamala", age: 30 }
];

const adults = users.filter(user => user.age >= 18);
console.log(adults); // Nimal සහ Kamala විතරක්`} />

            <CodeBlock title="➕ REDUCE - Single value එකක් හදන්න" code={`// Reduce: Array එක single value එකක් බවට පත් කරන්න
const numbers = [1, 2, 3, 4, 5];

// සියල්ල එකතු කරන්න
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// Max value එක හොයන්න
const max = numbers.reduce((max, num) => num > max ? num : max);
console.log(max); // 5

// Object එකක් හදන්න
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 2, banana: 2, orange: 1 }`} />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3">🎯 Other Useful Methods</h5>
                <CodeBlock title="More Methods" code={`// FIND - පළමු match එක return කරනවා
const found = numbers.find(num => num > 3);
// 4

// SOME - එක match එකක් හරි තිබ්බොත් true
const hasEven = numbers.some(num => num % 2 === 0);
// true

// EVERY - හැම එකක්ම match වෙනවද
const allPositive = numbers.every(num => num > 0);
// true

// SORT - සකස් කරන්න
const sorted = [3, 1, 4, 1, 5].sort((a, b) => a - b);
// [1, 1, 3, 4, 5]`} />
              </div>

              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
                <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3">⚡ React Example</h5>
                <CodeBlock title="React List Rendering" code={`// React Component එකක List එකක් render කරන්න
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

// Filter කරලා render කරන්න
function CompletedTodos({ todos }) {
  const completed = todos.filter(t => t.done);
  
  return (
    <ul>
      {completed.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}`} />
              </div>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border-l-4 border-rose-500">
              <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">⚠️ Important: Key Prop</h5>
              <p className="text-sm text-rose-700 dark:text-rose-400 mb-3">
                React වල list render කරන කොට <strong>key prop එක අනිවාර්‍යයෙන්ම දෙන්න ඕන!</strong>
              </p>
              <CodeBlock title="✅ Correct Usage" code={`// හරියි - key prop එක තියෙනවා
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}

// වැරදියි - key නෑ (warning එකක් එනවා)
{items.map(item => (
  <div>{item.name}</div>
))}`} />
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
              <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Exercises</h5>
              <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
                <li>1-100 දක්වා අංක වලින් 3 න් බෙදෙන අංක filter කරන්න</li>
                <li>නම් list එකක් ගෙන සෑම නමක්ම capital letters වලට map කරන්න</li>
                <li>Shopping cart එකක total price එක reduce use කරලා calculate කරන්න</li>
                <li>Students array එකක් හදලා marks 50ට වඩා වැඩි අය filter කරන්න</li>
              </ol>
            </div>
          </div>
        )
      }
    ]
  },
  // Day 2, 3, 4, 5, 6, 7 - Similar detailed structure...
  // මම එක එක days සඳහා වෙන් වෙන් comments එකක reply කරන්නම් (character limit එක නිසා)

2: {
  title: "Day 2: React Basics & Components (Videos 14-28)",
  description: "React project එකක් හදන හැටි, components හදන හැටි, සහ props භාවිතා කරන හැටි මේ section එකෙන් ඉගෙන ගන්නවා.",
  checklist: [
    "Vite සමග React project එකක් create කරන්න",
    "Folder structure එක හොඳට understand කරගන්න",
    "පළමු React component එක හදන්න",
    "JSX syntax ගැන ඉගෙන ගන්න",
    "Props භාවිතා කරන හැටි practice කරන්න"
  ],
  modules: [
    {
      title: "Create React App with Vite",
      duration: "Videos 14-18",
      videoIds: ["v14", "v15", "v16", "v17", "v18"],
      resources: [
        { title: "Vite Official Docs", url: "https://vitejs.dev/" },
        { title: "React Official Docs", url: "https://react.dev/" },
        { title: "npm Documentation", url: "https://docs.npmjs.com/" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">⚡ Video 14-18: Lightning-Fast React with Vite</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Vite යනු පරණ Create React App (CRA) වලට වඩා ගොඩක් වේගවත් modern build tool එකක්. 
              මේ videos වලින් project එකක් හදන හැටි, folder structure එක, සහ development server එක run කරන හැටි ඉගෙන ගන්නවා.
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🚀 Why Vite?</h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-amber-700 dark:text-amber-400">⚡ Super fast - විනාඩියකින් start වෙනවා</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-amber-700 dark:text-amber-400">🔥 Hot Module Replacement (HMR)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-amber-700 dark:text-amber-400">📦 Smaller bundle size</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-amber-700 dark:text-amber-400">🎯 Modern browser features</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-amber-700 dark:text-amber-400">🛠️ Better developer experience</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-amber-700 dark:text-amber-400">⚙️ Simple configuration</span>
                </div>
              </div>
            </div>
          </div>

          <MockScreenshot title="Create Vite Project" type="terminal">
            <div className="font-mono text-xs space-y-2 bg-slate-950 p-4">
              <div className="text-green-400">$ npm create vite@latest my-react-app</div>
              <div className="text-blue-300">✔ Select a framework: › React</div>
              <div className="text-blue-300">✔ Select a variant: › JavaScript</div>
              <div className="text-yellow-400 mt-3">
                Scaffolding project in my-react-app...<br/>
                Done. Now run:
              </div>
              <div className="text-green-400 mt-2">
                cd my-react-app<br/>
                npm install<br/>
                npm run dev
              </div>
              <div className="text-cyan-400 mt-3">
                ➜  Local:   http://localhost:5173/
              </div>
            </div>
          </MockScreenshot>

          <div className="grid md:grid-cols-2 gap-4">
            <CodeBlock title="📁 Folder Structure" code={`my-react-app/
├── node_modules/     # Dependencies
├── public/           # Static files
├── src/
│   ├── assets/       # Images, fonts
│   ├── App.jsx       # Main component
│   ├── App.css       # Styles
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json      # Project info
└── vite.config.js    # Vite settings`} />

            <CodeBlock title="📦 Important Commands" code={`# Development server
npm run dev

# Production build
npm run build

# Preview production
npm run preview

# Install new package
npm install package-name

# Remove package
npm uninstall package-name`} />
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-lg">
            <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3">🔍 Understanding main.jsx</h5>
            <CodeBlock title="src/main.jsx - Entry Point" code={`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// මෙතන React App එක DOM එකට attach කරනවා
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`} />
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
              <strong>React.StrictMode:</strong> Development mode එකේ problems identify කරන්න help කරනවා. Production build එකේ මේක run වෙන්නේ නෑ.
            </p>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🎨 First Look at App.jsx</h5>
            <CodeBlock title="src/App.jsx - Your First Component" code={`import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
      <p>Edit src/App.jsx and save to test HMR</p>
    </div>
  )
}

export default App`} />
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-2">⚠️ Common Issues & Solutions</h5>
            <div className="space-y-3 text-sm text-rose-700 dark:text-rose-400">
              <div>
                <strong>Port already in use:</strong>
                <CodeBlock title="Solution" code={`# Terminal එක close කරලා නැවතත් run කරන්න
# හෝ vite.config.js එකේ port එක වෙනස් කරන්න
export default {
  server: {
    port: 3000
  }
}`} />
              </div>
              <div>
                <strong>Module not found:</strong> <code>npm install</code> run කරලා නැද්ද බලන්න
              </div>
              <div>
                <strong>Browser එකේ පෙන්නේ නෑ:</strong> http://localhost:5173 correct URL එක විවෘතද බලන්න
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Your First Task</h5>
            <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
              <li>Terminal එකෙන් <code>npm create vite@latest</code> command එක run කරන්න</li>
              <li>Project එකේ නම දෙන්න (උදා: "my-first-react-app")</li>
              <li>React + JavaScript select කරන්න</li>
              <li><code>cd my-first-react-app</code> කරලා folder එකට යන්න</li>
              <li><code>npm install</code> කරලා dependencies install කරන්න</li>
              <li><code>npm run dev</code> කරලා dev server එක start කරන්න</li>
              <li>Browser එකෙන් http://localhost:5173 විවෘත කරන්න</li>
              <li>App.jsx file එක edit කරලා save කරන්න - HMR වැඩ කරනවද බලන්න!</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Components & JSX",
      duration: "Videos 19-25",
      videoIds: ["v19", "v20", "v21", "v22", "v23", "v24", "v25"],
      resources: [
        { title: "React Components", url: "https://react.dev/learn/your-first-component" },
        { title: "JSX in React", url: "https://react.dev/learn/writing-markup-with-jsx" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🧩 Video 19-25: Building Blocks of React</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              React app එකක් යනු components එකතුවක්. Component එකක් කියන්නේ UI එකේ කොටසක් - button එකක්, card එකක්, navbar එකක් වගේ. 
              Components reusable, maintainable, සහ organized විදියට code කරන්න help කරනවා.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3">🎯 What is a Component?</h5>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li>✅ JavaScript function එකක්</li>
                <li>✅ JSX (HTML වගේ) return කරනවා</li>
                <li>✅ Reusable විදියට හදලා තියෙනවා</li>
                <li>✅ Independent හා self-contained</li>
                <li>✅ Props වලින් data receive කරනවා</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3">📏 Naming Rules</h5>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li>✅ Capital letter එකෙන් start කරන්න</li>
                <li>✅ PascalCase use කරන්න (උදා: UserCard)</li>
                <li>✅ Descriptive names දෙන්න</li>
                <li>❌ lowercase එකෙන් start කරන්න එපා</li>
                <li>❌ React keywords use කරන්න එපා</li>
              </ul>
            </div>
          </div>

          <CodeBlock title="🎨 Your First Component" code={`// Simple component - පරණ විදිය
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// Arrow function component - නව විදිය
const Welcome = () => {
  return <h1>Welcome to React!</h1>;
}

// With multiple elements - එකකට වඩා elements
function Card() {
  return (
    <div className="card">
      <h2>Card Title</h2>
      <p>Card description goes here.</p>
      <button>Click Me</button>
    </div>
  );
}

// Using the component - component එක use කරන හැටි
function App() {
  return (
    <div>
      <Welcome />
      <Card />
      <Card />
    </div>
  );
}`} />

          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-lg border-l-4 border-cyan-500">
            <h5 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3">✨ JSX Rules & Syntax</h5>
            <CodeBlock title="JSX Important Rules" code={`// 1. Single parent element - එක root element එකක් ඕන
// ❌ වැරදියි
function Bad() {
  return (
    <h1>Title</h1>
    <p>Text</p>
  );
}

// ✅ හරියි - div එකක wrap කරන්න
function Good() {
  return (
    <div>
      <h1>Title</h1>
      <p>Text</p>
    </div>
  );
}

// ✅ හරියි - React Fragment use කරන්න (empty tag)
function Better() {
  return (
    <>
      <h1>Title</h1>
      <p>Text</p>
    </>
  );
}

// 2. JavaScript expressions - curly braces {} භාවිතා කරන්න
function UserGreeting() {
  const name = "Nimal";
  const age = 25;
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
      <p>Next year you will be {age + 1}</p>
    </div>
  );
}

// 3. className instead of class
function StyledComponent() {
  return (
    <div className="container">
      <button className="btn btn-primary">Click</button>
    </div>
  );
}

// 4. Close all tags - self-closing tags
function Images() {
  return (
    <div>
      <img src="photo.jpg" alt="Photo" />
      <input type="text" />
      <br />
    </div>
  );
}

// 5. camelCase for attributes
function Form() {
  return (
    <input 
      type="text"
      onChange={handleChange}
      onFocus={handleFocus}
      maxLength={10}
    />
  );
}`} />
          </div>

          <CodeBlock title="🎨 Styling Components" code={`// Method 1: Inline styles (object එකක් විදියට)
function InlineStyle() {
  const divStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '20px',
    borderRadius: '8px'
  };
  
  return <div style={divStyle}>Styled Div</div>;
}

// Method 2: Direct inline
function DirectInline() {
  return (
    <div style={{ 
      backgroundColor: 'red', 
      color: 'white' 
    }}>
      Direct Style
    </div>
  );
}

// Method 3: External CSS file (Best practice)
import './Card.css';

function Card() {
  return (
    <div className="card">
      <h2 className="card-title">Title</h2>
      <p className="card-text">Description</p>
    </div>
  );
}`} />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-2">💡 Component Organization</h5>
              <CodeBlock title="File Structure" code={`src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   └── Button.jsx
├── App.jsx
└── main.jsx

// Each component in separate file
// components/ folder එකේ හිටියනම් හොඳයි`} />
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">📦 Importing Components</h5>
              <CodeBlock title="Import/Export" code={`// Card.jsx - Export කරන්න
export default function Card() {
  return <div>Card</div>;
}

// App.jsx - Import කරන්න
import Card from './components/Card';

function App() {
  return <Card />;
}`} />
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-2">⚠️ Common JSX Mistakes</h5>
            <div className="space-y-2 text-sm text-rose-700 dark:text-rose-400">
              <div><strong>1.</strong> Adjacent JSX elements - parent wrap කරන්න අමතක වෙනවා</div>
              <div><strong>2.</strong> <code>class</code> use කරනවා - <code>className</code> use කරන්න ඕන</div>
              <div><strong>3.</strong> Tags close කරන්න අමතක වෙනවා - <code>&lt;img /&gt;</code> විදියට</div>
              <div><strong>4.</strong> JavaScript inject කරන්න <code>{}</code> use කරන්නේ නැතිව ඉන්නවා</div>
              <div><strong>5.</strong> Component names lowercase එකෙන් start කරනවා</div>
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Challenges</h5>
            <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
              <li><strong>Greeting Component:</strong> නමක් variable එකක store කරලා "Hello, [name]!" display කරන component එකක් හදන්න</li>
              <li><strong>Profile Card:</strong> image එකක්, නමක්, විස්තරයක් තියෙන card component එකක් හදන්න</li>
              <li><strong>Button Component:</strong> විවිධ colors සහ text තියෙන buttons 3ක් render කරන්න</li>
              <li><strong>Navbar:</strong> Logo එකක් සහ navigation links තියෙන navbar component එකක් හදන්න</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Props - Passing Data",
      duration: "Videos 26-28",
      videoIds: ["v26", "v27", "v28"],
      resources: [
        { title: "Passing Props", url: "https://react.dev/learn/passing-props-to-a-component" },
        { title: "Props vs State", url: "https://react.dev/learn/state-a-components-memory" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">📬 Video 26-28: Props - The Communication Bridge</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Props යනු parent component එකෙන් child component එකට data pass කරන ක්‍රමයයි. 
              මේක React වල ඉතාම වැදගත් concept එකක් - components reusable බවට පත් කරන්නේ props නිසයි!
            </p>
          </div>

          <CodeBlock title="🎁 Basic Props Example" code={`// Child Component - Props receive කරනවා
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

// Parent Component - Props send කරනවා
function App() {
  return (
    <div>
      <UserCard name="Nimal" age={25} city="Colombo" />
      <UserCard name="Sunil" age={30} city="Kandy" />
      <UserCard name="Kamala" age={28} city="Galle" />
    </div>
  );
}`} />

          <CodeBlock title="✨ Props Destructuring (Recommended)" code={`// Without Destructuring - අපහසුයි
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.city}</p>
    </div>
  );
}

// With Destructuring - පහසුයි! ✅
function UserCard({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
}

// With Default Values
function UserCard({ name = "Guest", age = 18, city = "Unknown" }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
}`} />

          <div className="grid md:grid-cols-2 gap-4">
            <CodeBlock title="📊 Different Prop Types" code={`function Demo() {
  return (
    <Component
      // String
      name="Nimal"
      
      // Number (curly braces use කරන්න)
      age={25}
      
      // Boolean
      isActive={true}
      
      // Array
      hobbies={["Reading", "Gaming"]}
      
      // Object
      user={{ name: "Nimal", age: 25 }}
      
      // Function
      onClick={() => alert("Clicked!")}
    />
  );
}`} />

            <CodeBlock title="🎨 Props with Children" code={`// Component with children prop
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage - මෙහේම දාපු content එක children විදියට යනවා
function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is the content</p>
      <button>Click Me</button>
    </Card>
  );
}`} />
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🎯 Real-World Example: Product Card</h5>
            <CodeBlock title="ProductCard Component" code={`// ProductCard.jsx
function ProductCard({ image, title, price, rating, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="price">Rs. {price}</div>
      <div className="rating">⭐ {rating}/5</div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

// App.jsx - Using the component multiple times
function App() {
  const handleAddToCart = (product) => {
    alert(\`Added \${product} to cart!\`);
  };

  return (
    <div className="products">
      <ProductCard 
        image="/laptop.jpg"
        title="Dell Laptop"
        price={150000}
        rating={4.5}
        onAddToCart={() => handleAddToCart("Laptop")}
      />
      <ProductCard 
        image="/phone.jpg"
        title="Samsung Phone"
        price={75000}
        rating={4.8}
        onAddToCart={() => handleAddToCart("Phone")}
      />
    </div>
  );
}`} />
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">⚠️ Props Rules & Best Practices</h5>
            <div className="space-y-3 text-sm text-rose-700 dark:text-rose-400">
              <div className="flex gap-2">
                <span className="text-rose-600 font-bold">1.</span>
                <div>
                  <strong>Props are Read-Only:</strong> Child component එකෙන් props modify කරන්න බැහැ!
                  <CodeBlock title="❌ වැරදියි" code={`function UserCard({ name }) {
  name = "New Name"; // ❌ මේක කරන්න බැහැ!
  return <h1>{name}</h1>;
}`} />
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-rose-600 font-bold">2.</span>
                <div><strong>Use Descriptive Names:</strong> <code>data</code>, <code>info</code> වගේ නම් වලට වඩා <code>userName</code>, <code>productPrice</code> වගේ නම් use කරන්න</div>
              </div>
              <div className="flex gap-2">
                <span className="text-rose-600 font-bold">3.</span>
                <div><strong>Keep Props Simple:</strong> ගොඩක් complex objects pass කරන එක වෙනුවට separate props විදියට pass කරන්න</div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-lg border border-cyan-200 dark:border-cyan-800">
            <h5 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3">🔥 Advanced: Spread Operator with Props</h5>
            <CodeBlock title="Spreading Props" code={`// Props එකට එකක් object විදියට pass කරන්න
const userInfo = {
  name: "Nimal",
  age: 25,
  city: "Colombo"
};

// Method 1: එක එක pass කරන්න
<UserCard name={userInfo.name} age={userInfo.age} city={userInfo.city} />

// Method 2: Spread operator (පහසුයි!)
<UserCard {...userInfo} />

// Method 3: Mix කරන්න
<UserCard {...userInfo} role="Admin" />`} />
</div><div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
        <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Exercises</h5>
        <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
          <li><strong>Blog Post Card:</strong> title, author, date, content props තියෙන blog post component එකක් හදන්න</li>
          <li><strong>Social Media Profile:</strong> profile picture, name, bio, followers count props use කරන component එකක් හදන්න</li>
          <li><strong>Movie Card:</strong> poster, title, year, rating, genre (array) props තියෙන movie card එකක් හදන්න</li>
          <li><strong>Button Variants:</strong> color, size, onClick props use කරන reusable button component එකක් හදන්න</li>
        </ol>
      </div>
    </div>
  )
}
]
},3: {
  title: "Day 3: State Management & Events (Videos 29-38)",
  description: "Component එකක data වෙනස් කරන හැටි (State), user interactions handle කරන හැටි (Events), සහ forms හැසිරවන හැටි ඉගෙන ගන්නවා.",
  checklist: [
    "State concept එක හොඳට understand කරගන්න",
    "useState Hook use කරන හැටි ඉගෙන ගන්න",
    "Event handlers ලියන්න පුහුණු වෙන්න",
    "Forms සහ inputs handle කරන්න ඉගෙන ගන්න",
    "State vs Props වෙනස තේරුම් ගන්න"
  ],
  modules: [
    {
      title: "Introduction to State",
      duration: "Videos 29-30",
      videoIds: ["v29", "v30"],
      resources: [
        { title: "State: Component's Memory", url: "https://react.dev/learn/state-a-components-memory" },
        { title: "useState Hook", url: "https://react.dev/reference/react/useState" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-rose-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🧠 Video 29-30: Understanding State</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              State යනු component එකක "memory" එක වගේ. Component එකක තියෙන data එක වෙනස් වෙද්දි UI එක automatically update වෙන්න ඕන නම් state use කරන්න ඕන. 
              Regular variables වලට වඩා state special වෙන්නේ ඒ නිසයි!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                <span className="text-2xl">❌</span> Without State (වැඩ කරන්නේ නෑ)
              </h5>
              <CodeBlock title="Regular Variable - වැඩ නෑ" code={`function Counter() {
  let count = 0; // Regular variable
  
  const increment = () => {
    count = count + 1;
    console.log(count); // මෙහේ වැඩ කරනවා
    // නමුත් UI එක update වෙන්නේ නෑ!
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>
        +1
      </button>
    </div>
  );
}`} />
              <p className="text-xs text-rose-500 mt-2">⚠️ Button එක click කරද්දි UI එක update වෙන්නේ නෑ!</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                <span className="text-2xl">✅</span> With State (හරියට වැඩ කරනවා)
              </h5>
              <CodeBlock title="useState Hook - වැඩ කරනවා!" code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
    // UI එක automatically update වෙනවා!
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>
        +1
      </button>
    </div>
  );
}`} />
              <p className="text-xs text-emerald-500 mt-2">✓ Button එක click කරද්දි UI එක update වෙනවා!</p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🔍 useState Anatomy - කොටස් තේරුම් ගන්න</h5>
            <CodeBlock title="useState Breakdown" code={`const [count, setCount] = useState(0);
//     ↑      ↑              ↑
//     |      |              |
//  Current  Function    Initial
//   Value   to Update    Value

// count: වත්මන් state value එක (read කරන්න use කරන්නේ)
// setCount: state එක update කරන function එක
// useState(0): Initial value එක (first time component render වෙනකොට)

// More Examples:
const [name, setName] = useState("Nimal");
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [items, setItems] = useState([]);
const [user, setUser] = useState({ name: "", age: 0 });`} />
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🎯 State vs Props - වෙනස මොනවද?</h5>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-amber-100 dark:bg-amber-900/30">
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">Feature</th>
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">State 🧠</th>
                    <th className="border border-amber-300 dark:border-amber-700 p-3 text-left">Props 📬</th>
                  </tr>
                </thead>
                <tbody className="text-amber-800 dark:text-amber-300">
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3 font-semibold">කොහෙන් එනවද?</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Component එකේම තියෙනවා</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Parent එකෙන් එනවා</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3 font-semibold">වෙනස් කරන්න පුළුවන්ද?</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">✅ ඔව් (setState use කරන්න)</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">❌ නෑ (Read-only)</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3 font-semibold">කවදා use කරන්නේ?</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Data වෙනස් වෙන්න ඕන නම්</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Parent ගෙන් data ලබා ගන්න</td>
                  </tr>
                  <tr>
                    <td className="border border-amber-300 dark:border-amber-700 p-3 font-semibold">Example</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">Form input values, counters</td>
                    <td className="border border-amber-300 dark:border-amber-700 p-3">User name, product price</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <CodeBlock title="🎮 Interactive Example: Toggle" code={`function LightSwitch() {
  const [isOn, setIsOn] = useState(false);
  
  const toggle = () => {
    setIsOn(!isOn); // true නම් false, false නම් true
  };
  
  return (
    <div>
      <h2>Light is {isOn ? "ON 💡" : "OFF 🌑"}</h2>
      <button onClick={toggle}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
      <div style={{
        width: 100,
        height: 100,
        backgroundColor: isOn ? "yellow" : "gray",
        borderRadius: 10
      }} />
    </div>
  );
}`} />

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Challenge</h5>
            <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
              <li><strong>Like Button:</strong> Click කරද්දි like count එක වැඩි වෙන button එකක් හදන්න</li>
              <li><strong>Show/Hide:</strong> Button එකක් click කරද්දි text එකක් show/hide වෙන component එකක් හදන්න</li>
              <li><strong>Color Changer:</strong> Button click කරද්දි box එකක background color එක වෙනස් වෙන app එකක් හදන්න</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "useState Hook Deep Dive",
      duration: "Videos 31-33",
      videoIds: ["v31", "v32", "v33"],
      resources: [
        { title: "useState Reference", url: "https://react.dev/reference/react/useState" },
        { title: "State Updates", url: "https://react.dev/learn/queueing-a-series-of-state-updates" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">⚡ Video 31-33: useState Mastery</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              useState hook එක deep එකෙන් ඉගෙන ගමු - multiple states, objects, arrays, සහ common patterns.
            </p>
          </div>

          <CodeBlock title="📊 Multiple State Variables" code={`function UserForm() {
  // විවිධ state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("Sri Lanka");
  
  const handleSubmit = () => {
    console.log({ name, email, age, country });
  };
  
  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}`} />

          <CodeBlock title="📦 Object State" code={`function UserProfile() {
  // Object එකක් විදියට state එක
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0
  });
  
  // ❌ වැරදි ක්‍රමය - Direct mutation
  const updateWrong = () => {
    user.name = "New Name"; // මේක වැඩ කරන්නේ නෑ!
    setUser(user);
  };
  
  // ✅ හරි ක්‍රමය - Spread operator use කරන්න
  const updateName = (newName) => {
    setUser({
      ...user,        // පරණ values copy කරන්න
      name: newName   // නව value එක update කරන්න
    });
  };
  
  const updateEmail = (newEmail) => {
    setUser({ ...user, email: newEmail });
  };
  
  return (
    <div>
      <input 
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={user.email}
        onChange={(e) => updateEmail(e.target.value)}
        placeholder="Email"
      />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}`} />

          <CodeBlock title="📋 Array State" code={`function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  
  // Array එකට item එකක් add කරන්න
  const addTodo = () => {
    setTodos([...todos, input]); // spread operator
    setInput(""); // input එක clear කරන්න
  };
  
  // Array එකෙන් item එකක් remove කරන්න
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  // Array එක clear කරන්න
  const clearAll = () => {
    setTodos([]);
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearAll}>Clear All</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`} />

          <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">⚠️ State Updates Are Asynchronous!</h5>
            <CodeBlock title="Common Mistake" code={`function Counter() {
  const [count, setCount] = useState(0);
  
  // ❌ මේක අපේක්ෂා කරන විදියට වැඩ කරන්නේ නෑ
  const incrementThrice = () => {
    setCount(count + 1); // 0 + 1 = 1
    setCount(count + 1); // තවමත් 0 + 1 = 1
    setCount(count + 1); // තවමත් 0 + 1 = 1
    // Result: 1 (not 3!)
  };
  
  // ✅ හරි ක්‍රමය - Updater function use කරන්න
  const incrementThriceCorrect = () => {
    setCount(prev => prev + 1); // 0 + 1 = 1
    setCount(prev => prev + 1); // 1 + 1 = 2
    setCount(prev => prev + 1); // 2 + 1 = 3
    // Result: 3 ✓
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementThrice}>+3 (Wrong)</button>
      <button onClick={incrementThriceCorrect}>+3 (Correct)</button>
    </div>
  );
}`} />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <h5 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3">🎯 State Best Practices</h5>
              <ul className="text-sm space-y-2 text-cyan-700 dark:text-cyan-400 list-disc list-inside">
                <li>Single responsibility - එක state එකක එක කාර්යයක් විතරක්</li>
                <li>Don't duplicate props in state</li>
                <li>Avoid deeply nested state</li>
                <li>Use objects for related data</li>
                <li>Keep state minimal and derived values calculated</li>
              </ul>
            </div>

            <CodeBlock title="💡 Derived Values" code={`function ShoppingCart() {
  const [items, setItems] = useState([
    { name: "Laptop", price: 150000 },
    { name: "Mouse", price: 2000 }
  ]);
  
  // ❌ වැරදි - total එක state එකක තියන එක
  // const [total, setTotal] = useState(0);
  
  // ✅ හරි - Calculate කරන්න
  const total = items.reduce(
    (sum, item) => sum + item.price, 
    0
  );
  
  return (
    <div>
      <h3>Total: Rs. {total}</h3>
    </div>
  );
}`} />
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Advanced Challenges</h5>
            <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
              <li><strong>Shopping Cart:</strong> Items add/remove කරන්න පුළුවන්, total price එක calculate කරන cart එකක් හදන්න</li>
              <li><strong>Form Validation:</strong> Name සහ email validate කරන form එකක් හදන්න (empty නම් error දැක්වෙන්න ඕන)</li>
              <li><strong>Counter with History:</strong> Counter එකක් හදන්න past values track කරන එකක්</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Event Handling",
      duration: "Videos 34-36",
      videoIds: ["v34", "v35", "v36"],
      resources: [
        { title: "Responding to Events", url: "https://react.dev/learn/responding-to-events" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 p-6 rounded-xl border-l-4 border-violet-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🖱️ Video 34-36: Interactive React</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Events යනු user interactions (clicks, typing, hovering) වලට respond කරන ක්‍රමයයි. 
              React වල event handling HTML වලට වඩා ටිකක් වෙනස්!
            </p>
          </div>

          <CodeBlock title="🎯 Common Events" code={`function EventDemo() {
  // onClick - Mouse click
  const handleClick = () => {
    alert("Button clicked!");
  };
  
  // onChange - Input change
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  
  // onSubmit - Form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Page reload වෙන එක නවත්වන්න
    console.log("Form submitted!");
  };
  
  // onFocus - Input focus වෙද්දි
  const handleFocus = () => {
    console.log("Input focused!");
  };
  
  // onBlur - Input blur වෙද්දි
  const handleBlur = () => {
    console.log("Input blurred!");
  };
  
  // onMouseEnter - Mouse එක එනවා
  const handleMouseEnter = () => {
    console.log("Mouse entered!");
  };
  
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      
      <input 
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Type here"
      />
      
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      
      <div 
        onMouseEnter={handleMouseEnter}
        style={{ padding: 20, background: "lightblue" }}
      >
        Hover me!
      </div>
    </div>
  );
}`} />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
              <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🔄 HTML vs React Events</h5>
              <CodeBlock title="Differences" code={`<!-- HTML -->
<button onclick="handleClick()">
  Click
</button>

{/* React */}
<button onClick={handleClick}>
  Click
</button>

// Key Differences:
// 1. camelCase (onClick not onclick)
// 2. Function reference (not string)
// 3. event.preventDefault() අවශ්‍ය`} />
            </div>

            <CodeBlock title="📝 Event Object" code={`function InputDemo() {
  const handleChange = (event) => {
    // event object එකේ useful properties
    console.log(event.target.value);  // Input value
    console.log(event.target.name);   // Input name
    console.log(event.type);          // Event type
    console.log(event.key);           // Key pressed
  };
  
  return (
    <input 
      name="username"
      onChange={handleChange}
      onKeyDown={handleChange}
    />
  );
}`} />
          </div>

          <CodeBlock title="🎮 Real Example: Login Form" code={`function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload නවත්වන්න
    
    // Validation
    if (!email || !password) {
      setError("Please fill all fields!");
      return;
    }
    
    if (!email.includes("@")) {
      setError("Invalid email!");
      return;
    }
    
    // Success
    console.log("Login:", { email, password });
    setError("");
    alert("Login successful!");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div style={{ color: "red" }}>{error}</div>
      )}
      
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      
      <button type="submit">Login</button>
    </form>
  );
}`} />

          <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">⚠️ Common Event Mistakes</h5>
            <CodeBlock title="Mistakes to Avoid" code={`// ❌ වැරදි - Function එක call කරනවා
<button onClick={handleClick()}>Click</button>

// ✅ හරි - Function reference එක pass කරන්න
<button onClick={handleClick}>Click</button>

// ✅ Parameters pass කරන්න නම් arrow function use කරන්න
<button onClick={() => handleClick(id)}>Click</button>

// ❌ වැරදි - Event object අමතක වෙනවා
<button onClick={() => handleClick()}>Click</button>

// ✅ හරි - Event object pass කරන්න නම්
<button onClick={(e) => handleClick(e, id)}>Click</button>`} />
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Tasks</h5>
            <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
              <li><strong>Calculator:</strong> 2 numbers input කරලා +, -, ×, ÷ operations කරන calculator එකක් හදන්න</li>
              <li><strong>Color Picker:</strong> Dropdown එකක color select කරලා box එකක් එයින් color කරන app එකක් හදන්න</li>
              <li><strong>Character Counter:</strong> Textarea එකක type කරද්දි character count එක real-time එකේ දැක්වෙන app එකක් හදන්න</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "State vs Props Practical",
      duration: "Videos 37-38",
      videoIds: ["v37", "v38"],
      resources: [],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-teal-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🔄 Video 37-38: State & Props Together</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Real applications වල state සහ props එකට use කරන හැටි, parent-child communication කරන හැටි ඉගෙන ගන්නවා.
            </p>
          </div>

          <CodeBlock title="🎯 Parent-Child Communication" code={`// Parent Component - State තියෙන්නේ මෙහේ
function App() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  return (
    <div>
      <h1>Main Counter: {count}</h1>
      
      {/* Props විදියට pass කරනවා */}
      <Counter 
        value={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>
  );
}

// Child Component - Props receive කරනවා
function Counter({ value, onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <h2>Counter Display: {value}</h2>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}`} />

          <CodeBlock title="🎨 Real Example: Todo App" code={`// Parent - App.jsx
function App() {
  const [todos, setTodos] = useState([
    { i: 1, text: "Learn React", done: false },
{ id: 2, text: "Build Projects", done: false }
]);
const addTodo = (text) => {
const newTodo = {
id: Date.now(),
text: text,
done: false
};
setTodos([...todos, newTodo]);
};
const toggleTodo = (id) => {
setTodos(todos.map(todo =>
todo.id === id ? { ...todo, done: !todo.done } : todo
));
};
const deleteTodo = (id) => {
setTodos(todos.filter(todo => todo.id !== id));
};
return (
<div>
<h1>My Todos ({todos.length})</h1>
<TodoForm onAdd={addTodo} />
<TodoList 
     todos={todos}
     onToggle={toggleTodo}
     onDelete={deleteTodo}
   />
</div>
);
}
// Child 1 - TodoForm.jsx
function TodoForm({ onAdd }) {
const [input, setInput] = useState("");
const handleSubmit = (e) => {
e.preventDefault();
if (input.trim()) {
onAdd(input);
setInput("");
}
};
return (
<form onSubmit={handleSubmit}>
<input
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Add new todo"
/>
<button type="submit">Add</button>
</form>
);
}
// Child 2 - TodoList.jsx
function TodoList({ todos, onToggle, onDelete }) {
return (
<ul>
{todos.map(todo => (
<TodoItem 
       key={todo.id}
       todo={todo}
       onToggle={onToggle}
       onDelete={onDelete}
     />
))}
</ul>
);
}
// Child 3 - TodoItem.jsx
function TodoItem({ todo, onToggle, onDelete }) {
return (
<li>
<input
type="checkbox"
checked={todo.done}
onChange={() => onToggle(todo.id)}
/>
<span style={{
textDecoration: todo.done ? "line-through" : "none"
}}>
{todo.text}
</span>
<button onClick={() => onDelete(todo.id)}>Delete</button>
</li>
);
}`} />
      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
        <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🎓 Key Concepts Summary</h5>
        <ul className="text-sm space-y-2 text-indigo-700 dark:text-indigo-400 list-disc list-inside">
          <li><strong>Lifting State Up:</strong> Share state කරන්න නම් parent එකේ state එක තියන්න</li>
          <li><strong>Props Down, Events Up:</strong> Data props විදියට යනවා down, events callbacks විදියට එනවා up</li>
          <li><strong>Single Source of Truth:</strong> State එක එක තැනක විතරක් තියන්න</li>
          <li><strong>Controlled Components:</strong> React state එක input values control කරනවා</li>
        </ul>
      </div>

      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
        <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Final Challenge</h5>
        <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-3">
          <strong>Shopping Cart Application:</strong> Parent component එකක products list එකක් state එකේ තියලා, child components වලින්:
        </p>
        <ul className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-disc list-inside">
          <li>ProductList - සියලු products display කරන්න</li>
          <li>ProductCard - එක එක product එකේ details සහ "Add to Cart" button</li>
          <li>Cart - Cart එකේ items සහ total price</li>
          <li>Add/Remove functionality implement කරන්න</li>
        </ul>
      </div>
    </div>
  )
}
]
},
4: {
  title: "Day 4: Lists & Forms (Videos 39-48)",
  description: "Arrays render කරන හැටි (Lists), Keys භාවිතා කරන හැටි, සහ Forms හැසිරවන හැටි ඉගෙන ගන්නවා.",
  checklist: [
    "Array data lists විදියට render කරන්න ඉගෙන ගන්න",
    "Key prop importance තේරුම් ගන්න",
    "Controlled components implement කරන්න",
    "Form validation කරන හැටි ඉගෙන ගන්න",
    "Multiple inputs handle කරන හැටි practice කරන්න"
  ],
  modules: [
    {
      title: "Rendering Lists",
      duration: "Videos 39-41",
      videoIds: ["v39", "v40", "v41"],
      resources: [
        { title: "Rendering Lists", url: "https://react.dev/learn/rendering-lists" },
        { title: "Array Methods", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">📋 Video 39-41: Dynamic Lists in React</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Real applications වල data arrays විදියට එනවා - users, products, posts වගේ. 
              මේ data lists විදියට render කරන්න `.map()` method එක use කරනවා.
            </p>
          </div>

          <CodeBlock title="🎯 Basic List Rendering" code={`// Simple array rendering
function FruitList() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  
  return (
    <div>
      <h2>My Favorite Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// Objects array rendering
function UserList() {
  const users = [
    { id: 1, name: "Nimal", age: 25, city: "Colombo" },
    { id: 2, name: "Sunil", age: 30, city: "Kandy" },
    { id: 3, name: "Kamala", age: 28, city: "Galle" }
  ];
  
  return (
    <div>
      <h2>User Directory</h2>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
        </div>
      ))}
    </div>
  );
}`} />

          <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">🔑 The Key Prop - ඉතාම වැදගත්!</h5>
            <p className="text-sm text-rose-700 dark:text-rose-400 mb-3">
              List render කරන කොට <strong>key prop අනිවාර්‍යයෙන්ම</strong> දෙන්න ඕන! 
              මේක නැතිව ඉන්න බැහැ - React error එකක් දෙනවා.
            </p>
            <CodeBlock title="Why Keys?" code={`// ❌ වැරදි - Key නෑ (Warning එනවා)
{items.map(item => (
  <div>{item.name}</div>
))}

// ❌ වැරදි - Index as key (හොඳ practice එකක් නෙවෙයි)
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}

// ✅ හරි - Unique ID use කරන්න
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}

// Key එක unique විය යුතුයි:
// ✅ Database IDs (item.id)
// ✅ UUIDs
// ❌ Array indices (items වෙනස් වෙනවා නම් problems එනවා)`} />
          </div>

          <CodeBlock title="🎨 Real Example: Product List" code={`function ProductList() {
  const products = [
    { 
      id: 101, 
      name: "Laptop", 
      price: 150000, 
      category: "Electronics",
      inStock: true 
    },
    { 
      id: 102, 
      name: "Phone", 
      price: 75000, 
      category: "Electronics",
      inStock: true 
    },
    { 
      id: 103, 
      name: "Book", 
      price: 1500, 
      category: "Books",
      inStock: false 
    }
  ];
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p className="price">Rs. {product.price.toLocaleString()}</p>
          <p className="category">Category: {product.category}</p>
          <span className={product.inStock ? "in-stock" : "out-of-stock"}>
            {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
          </span>
          <button disabled={!product.inStock}>
            {product.inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      ))}
    </div>
  );
}`} />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <h5 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3">🔍 Filtering Lists</h5>
              <CodeBlock title="Filter Before Mapping" code={`function FilteredList() {
  const items = [
    { id: 1, name: "Apple", type: "fruit" },
    { id: 2, name: "Carrot", type: "veg" },
    { id: 3, name: "Banana", type: "fruit" }
  ];
  
  // Filter කරලා render කරන්න
  const fruits = items.filter(
    item => item.type === "fruit"
  );
  
  return (
    <div>
      <h3>Fruits Only</h3>
      {fruits.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`} />
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">📊 Conditional Rendering</h5>
              <CodeBlock title="Show/Hide Based on Data" code={`function ConditionalList() {
  const items = [];
  
  // Empty array නම්
  if (items.length === 0) {
    return <p>No items to display</p>;
  }
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}`} />
            </div>
          </div>

          <CodeBlock title="🎮 Interactive List: Delete Items" code={`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build Project", done: false },
    { id: 3, text: "Deploy App", done: false }
  ]);
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  return (
    <div>
      <h2>My Todos ({todos.length})</h2>
      {todos.length === 0 ? (
        <p>No todos! Add some tasks.</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input 
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleDone(todo.id)}
              />
              <span style={{
                textDecoration: todo.done ? "line-through" : "none"
              }}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`} />

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Challenges</h5>
            <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
              <li><strong>Student List:</strong> Students array එකක් හදලා name, marks display කරන list එකක් හදන්න. 50ට වැඩි අය green, අඩු අය red color එකෙන්.</li>
              <li><strong>Movie Database:</strong> Movies array එකක් හදලා title, year, rating සහ genre display කරන cards හදන්න. Rating අනුව sort කරන්න පුළුවන් විදියට.</li>
              <li><strong>Contact List:</strong> Search functionality තියෙන contact list එකක් හදන්න. Input එකේ type කරද්දි real-time එකේ filter වෙන්න ඕන.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Understanding Keys",
      duration: "Videos 42-43",
      videoIds: ["v42", "v43"],
      resources: [
        { title: "Keys in React", url: "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-amber-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🔑 Video 42-43: Keys Deep Dive</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Keys ගැන වැඩිදුරටත් ඉගෙන ගමු - ඇයි keys වැදගත්, කොහොමද React keys use කරන්නේ, සහ common mistakes.
            </p>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border-l-4 border-indigo-500">
            <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🤔 Why Do We Need Keys?</h5>
            <p className="text-sm text-indigo-700 dark:text-indigo-400 mb-3">
              Keys React ට කියන්නේ කුමන item එක කුමන item එකද කියලා. 
              List එක වෙනස් වෙද්දි (add, remove, reorder) React හොඳින් track කරගන්න පුළුවන්.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h6 className="font-bold text-sm mb-2">✅ With Proper Keys</h6>
                <ul className="text-xs space-y-1 text-indigo-600 dark:text-indigo-400">
                  <li>✓ React efficiently updates DOM</li>
                  <li>✓ Component state preserved</li>
                  <li>✓ Animations work correctly</li>
                  <li>✓ Better performance</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-rose-200 dark:border-rose-700">
                <h6 className="font-bold text-sm mb-2">❌ Without Keys</h6>
                <ul className="text-xs space-y-1 text-rose-600 dark:text-rose-400">
                  <li>✗ Re-renders everything</li>
                  <li>✗ State bugs</li>
                  <li>✗ Broken animations</li>
                  <li>✗ Poor performance</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBlock title="🎯 Good vs Bad Keys" code={`const items = [
  { id: 'a1', name: 'Item 1' },
  { id: 'a2', name: 'Item 2' },
  { id: 'a3', name: 'Item 3' }
];

// ❌ BAD: Index as key (problems when reordering)
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}

// ❌ BAD: Non-unique keys
{items.map(item => (
  <div key="same-key">{item.name}</div>
))}

// ❌ BAD: Random keys (generates new key every render)
{items.map(item => (
  <div key={Math.random()}>{item.name}</div>
))}

// ✅ GOOD: Stable, unique IDs
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}

// ✅ GOOD: Composite key if no ID
{items.map((item, index) => (
  <div key={\`\${item.name}-\${index}\`}>{item.name}</div>
))}`} />

          <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">⚠️ Index as Key - ප්‍රශ්න</h5>
            <p className="text-sm text-rose-700 dark:text-rose-400 mb-3">
              Array indices keys විදියට use කරන්න එපා items reorder, add, remove වෙනවා නම්!
            </p>
            <CodeBlock title="Problem Example" code={`// Problem: Input values get mixed up
function TodoList() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build Project"
  ]);
  
  // ❌ Index as key - වැරදි!
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" />
          <span>{todo}</span>
        </div>
      ))}
    </div>
  );
}

// Item එකක් delete කරද්දි checkbox states අනිත් items වලට මාරු වෙනවා!
// Index key use කරන නිසා React confused වෙනවා.`} />
          </div>

          <CodeBlock title="✅ Correct Solution" code={`// Solution: Use unique IDs
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build Project", done: false }
  ]);
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  // ✅ Unique ID as key - හරියි!
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input 
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
}`} />

          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-lg border border-cyan-200 dark:border-cyan-800">
            <h5 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3">💡 When Can You Use Index?</h5>
            <p className="text-sm text-cyan-700 dark:text-cyan-400 mb-3">
              Index as key use කරන්න පුළුවන් මෙහෙම conditions වල:
            </p>
            <ul className="text-sm space-y-2 text-cyan-700 dark:text-cyan-400 list-disc list-inside">
              <li>Items static (never change)</li>
              <li>Items never reordered</li>
              <li>Items never filtered</li>
              <li>No user input associated with items</li>
            </ul>
            <CodeBlock title="Safe Usage" code={`// ✅ Static list - OK to use index
const months = ["Jan", "Feb", "Mar", ...];
{months.map((month, i) => (
  <option key={i} value={i}>{month}</option>
))}

// ✅ Display-only list - OK
const colors = ["Red", "Green", "Blue"];
{colors.map((color, i) => (
  <div key={i} style={{ background: color }} />
))}`} />
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice</h5>
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              <strong>Drag & Drop List:</strong> Items drag කරලා reorder කරන්න පුළුවන් list එකක් හදන්න. 
              Index key use කරද්දි වෙන problem එක සහ unique ID use කරද්දි හරියට වැඩ කරන එක test කරන්න.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Forms & Controlled Components",
      duration: "Videos 44-48",
      videoIds: ["v44", "v45", "v46", "v47", "v48"],
      resources: [
        { title: "React Forms", url: "https://react.dev/reference/react-dom/components/input" },
        { title: "Controlled Components", url: "https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">📝 Video 44-48: Mastering Forms</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Forms යනු user input එකතු කරන main ක්‍රමය. React වල forms handle කරන විදිය HTML වලට වඩා ටිකක් වෙනස්. 
              Controlled Components concept එක මාස්ටර් කරන්න මේ section එකෙන් ඉගෙන ගන්නවා.
            </p>
          </div>

          <CodeBlock title="🎯 Basic Form - Text Input" code={`function BasicForm() {
  const [name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload නවත්වන්න
    alert(\`Hello, \${name}!\`);
    setName(""); // Clear form
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </label>
      <button type="submit">Submit</button>
      
      {/* Real-time display */}
      <p>You typed: {name}</p>
    </form>
  );
}`} />

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🎛️ Controlled vs Uncontrolled</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h6 className="font-bold text-sm mb-2">✅ Controlled (Recommended)</h6>
                <CodeBlock title="React controls value" code={`// State එකේ value එක තියෙනවා
const [value, setValue] = useState("");

<input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`} />
                <p className="text-xs mt-2 text-blue-600 dark:text-blue-400">
                  React state එක "single source of truth"
                </p>
              </div>
              <div>
                <h6 className="font-bold text-sm mb-2">❌ Uncontrolled (Avoid)</h6>
                <CodeBlock title="DOM controls value" code={`// ref use කරනවා
const inputRef = useRef();

<input ref={inputRef} />

// Value එක access කරන්න
inputRef.current.value`} />
                <p className="text-xs mt-2 text-rose-600 dark:text-rose-400">
                  DOM එක "single source of truth"
                </p>
              </div>
            </div>
          </div>

          <CodeBlock title="📋 Multiple Input Types" code={`function MultiInputForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    gender: "",
    country: "Sri Lanka",
    newsletter: false,
    bio: ""
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Text Input */}
      <input 
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      
      {/* Email Input */}
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      
      {/* Number Input */}
      <input 
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      
      {/* Radio Buttons */}
      <div>
        <label>
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      
      {/* Select Dropdown */}
      <select 
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
      
      {/* Checkbox */}
      <label>
        <input 
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>
      
      {/* Textarea */}
      <textarea 
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Tell us about yourself"
        rows="4"
      />
      
      <button type="submit">Submit</button>
    </form>
  );
}`} />

          <CodeBlock title="✅ Form Validation" code={`function ValidationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Form is valid
    console.log("Form submitted:", formData);
    setErrors({});
    alert("Registration successful!");
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        {errors.username && (
          <span className="error">{errors.username}</span>
        )}
      </div>
      
      <div>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </div>
      
      <div>
        <input 
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && (
          <span className="error">{errors.password}</span>
        )}
      </div>
      
      <div>
        <input 
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      
      <button type="submit">Register</button>
    </form>
  );
}`} />

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Final Project Challenge</h5>
<p className="text-sm text-emerald-700 dark:text-emerald-400 mb-3">
<strong>Complete Registration Form:</strong> මේ features සියල්ල තියෙන registration form එකක් හදන්න:
</p>
<ul className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-disc list-inside">
<li>First Name, Last Name, Email, Phone, Password fields</li>
<li>Date of Birth (date picker)</li>
<li>Gender (radio buttons)</li>
<li>Country (dropdown)</li>
<li>Interests (multiple checkboxes)</li>
<li>Terms & Conditions (checkbox - required)</li>
<li>Real-time validation සහ error messages</li>
<li>Success message after submit</li>
</ul>
</div>
</div>
)
}
]
},
5: {
  title: "Day 5: Hooks & API Integration (Videos 49-58)",
  description: "useEffect hook එක use කරලා side effects handle කරන හැටි, external APIs වලින් data fetch කරන හැටි, සහ loading/error states manage කරන හැටි ඉගෙන ගන්නවා.",
  checklist: [
    "Component lifecycle concept එක තේරුම් ගන්න",
    "useEffect hook master කරන්න",
    "API calls කරන හැටි ඉගෙන ගන්න",
    "Async/Await use කරන හැටි practice කරන්න",
    "Loading සහ Error states handle කරන්න"
  ],
  modules: [
    {
      title: "Component Lifecycle",
      duration: "Videos 49-50",
      videoIds: ["v49", "v50"],
      resources: [
        { title: "useEffect Hook", url: "https://react.dev/reference/react/useEffect" },
        { title: "Lifecycle Diagram", url: "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🔄 Video 49-50: Component Lifecycle</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Component එකක lifecycle යනු එය "birth" සිට "death" දක්වා ඇති phases. 
              Component එකක් mount වෙනවා (පෙන්වනවා), update වෙනවා (වෙනස් වෙනවා), unmount වෙනවා (අතුරුදහන් වෙනවා).
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🎯 Three Main Phases</h5>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-sm text-green-600 mb-2">1️⃣ Mounting (Birth) - Component එක පෙන්වනවා</h6>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li>Component එක DOM එකට add වෙනවා</li>
                  <li>Initial render එක වෙනවා</li>
                  <li>State සහ props set වෙනවා</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-sm text-amber-600 mb-2">2️⃣ Updating - Component එක වෙනස් වෙනවා</h6>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li>State වෙනස් වෙනවා</li>
                  <li>Props වෙනස් වෙනවා</li>
                  <li>Re-render වෙනවා</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-sm text-rose-600 mb-2">3️⃣ Unmounting (Death) - Component එක යනවා</h6>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li>Component එක DOM එකෙන් remove වෙනවා</li>
                  <li>Cleanup කරන්න ඕන නම් මෙහේ කරනවා</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBlock title="🎯 Lifecycle Visualization" code={`// Component lifecycle example
function LifecycleDemo() {
  const [count, setCount] = useState(0);
  
  console.log("1. Component Rendering..."); // සෑම render එකකම
  
  // Mount වෙද්දි (first time only)
  useEffect(() => {
    console.log("2. Component MOUNTED! 🎉");
    
    // Cleanup - Unmount වෙද්දි
    return () => {
      console.log("3. Component UNMOUNTED! 👋");
    };
  }, []); // Empty array = mount වෙද්දි විතරක්
  
  // Update වෙද්දි (count වෙනස් වෙනකොට)
  useEffect(() => {
    console.log("4. Count UPDATED! Count is now:", count);
  }, [count]); // [count] = count වෙනස් වෙනකොට
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Console Output:
// 1. Component Rendering...
// 2. Component MOUNTED! 🎉
// (Button click කරද්දි)
// 1. Component Rendering...
// 4. Count UPDATED! Count is now: 1`} />

          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">💡 Real-World Use Cases</h5>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white dark:bg-slate-800 p-3 rounded border border-amber-200 dark:border-amber-700">
                <strong className="text-amber-700 dark:text-amber-300">Mount වෙද්දි:</strong>
                <ul className="mt-2 space-y-1 text-amber-600 dark:text-amber-400 list-disc list-inside">
                  <li>API data fetch කරන්න</li>
                  <li>Timers start කරන්න</li>
                  <li>Event listeners add කරන්න</li>
                  <li>Subscriptions setup කරන්න</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded border border-amber-200 dark:border-amber-700">
                <strong className="text-amber-700 dark:text-amber-300">Unmount වෙද්දි:</strong>
                <ul className="mt-2 space-y-1 text-amber-600 dark:text-amber-400 list-disc list-inside">
                  <li>Timers clear කරන්න</li>
                  <li>Event listeners remove කරන්න</li>
                  <li>Subscriptions cancel කරන්න</li>
                  <li>Memory leaks වළක්වන්න</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBlock title="⏰ Practical Example: Timer" code={`function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    console.log("Timer STARTED! ⏰");
    
    // Mount වෙද්දි timer එකක් start කරනවා
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // Cleanup - Unmount වෙද්දි timer එක stop කරනවා
    return () => {
      console.log("Timer STOPPED! ⏹️");
      clearInterval(interval);
    };
  }, []); // Empty array = once only
  
  return (
    <div>
      <h1>Timer: {seconds}s</h1>
    </div>
  );
}

// Component remove වෙද්දි automatically timer එක stop වෙනවා!`} />

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Challenge</h5>
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              <strong>Digital Clock:</strong> Component එකක් හදන්න මෙන්න features සමග:
            </p>
            <ul className="text-sm mt-2 space-y-1 text-emerald-700 dark:text-emerald-400 list-disc list-inside">
              <li>Current time එක display කරන්න (HH:MM:SS format)</li>
              <li>සෑම තත්පරයකටම auto-update වෙන්න ඕන</li>
              <li>Component unmount වෙද්දි timer එක cleanup කරන්න</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "useEffect Hook Deep Dive",
      duration: "Videos 51-53",
      videoIds: ["v51", "v52", "v53"],
      resources: [
        { title: "useEffect Reference", url: "https://react.dev/reference/react/useEffect" },
        { title: "Synchronizing with Effects", url: "https://react.dev/learn/synchronizing-with-effects" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">⚡ Video 51-53: useEffect Mastery</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              useEffect යනු React හි වඩාත්ම powerful hook එක. Side effects (API calls, subscriptions, timers) handle කරන්න මේක use කරනවා.
            </p>
          </div>

          <CodeBlock title="🎯 useEffect Syntax" code={`useEffect(() => {
  // Effect code මෙහේ
  // Mount වෙද්දි හෝ dependencies වෙනස් වෙද්දි run වෙනවා
  
  return () => {
    // Cleanup code මෙහේ (optional)
    // Unmount වෙද්දි හෝ next effect run වෙන්න කලින් run වෙනවා
  };
}, [dependencies]); // Dependency array මෙහේ`} />

          <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">🎭 Three Types of useEffect</h5>
            <div className="space-y-4">
              <CodeBlock title="1️⃣ No Dependency Array - සෑම render එකකම" code={`useEffect(() => {
  console.log("Runs EVERY render");
  // ⚠️ මේක avoid කරන්න - infinite loops වෙන්න පුළුවන්!
});`} />

              <CodeBlock title="2️⃣ Empty Array - Mount වෙද්දි විතරක්" code={`useEffect(() => {
  console.log("Runs ONCE after mount");
  
  // API calls, initial setup වගේ දේවල් මෙහේ
  fetchData();
  
}, []); // Empty array = once only`} />

              <CodeBlock title="3️⃣ With Dependencies - Dependencies වෙනස් වෙද්දි" code={`useEffect(() => {
  console.log("Runs when 'count' changes");
  
  // count වෙනස් වෙනකොට run වෙන code
  document.title = \`Count: \${count}\`;
  
}, [count]); // count වෙනස් වෙනකොට run වෙනවා`} />
            </div>
          </div>

          <CodeBlock title="🎮 Practical Examples" code={`// Example 1: Update document title
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return <button onClick={() => setCount(count + 1)}>+</button>;
}

// Example 2: Window resize listener
function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup - listener එක remove කරන්න
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Once only
  
  return <div>Window width: {width}px</div>;
}

// Example 3: Local Storage sync
function TodosWithStorage() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  
  // todos වෙනස් වෙනකොට localStorage එකේ save කරන්න
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  return <div>{/* Todo UI */}</div>;
}`} />

          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">⚠️ Common Mistakes</h5>
            <CodeBlock title="Mistake 1: Missing Dependencies" code={`// ❌ වැරදි - count dependency array එකේ නෑ
useEffect(() => {
  console.log(count);
}, []); // Warning: React Hook useEffect has a missing dependency

// ✅ හරි - dependencies add කරන්න
useEffect(() => {
  console.log(count);
}, [count]);`} />

            <CodeBlock title="Mistake 2: Infinite Loop" code={`// ❌ වැරදි - setState useEffect එකේ, dependency නැතිව
useEffect(() => {
  setCount(count + 1); // Infinite loop! 🔄
});

// ✅ හරි - Condition එකක් හෝ dependency array එක use කරන්න
useEffect(() => {
  if (count < 10) {
    setCount(count + 1);
  }
}, [count]);`} />

            <CodeBlock title="Mistake 3: Forgetting Cleanup" code={`// ❌ වැරදි - interval clear කරන්නේ නෑ (memory leak!)
useEffect(() => {
  setInterval(() => {
    console.log("Running...");
  }, 1000);
}, []);

// ✅ හරි - cleanup කරන්න
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);
  
  return () => clearInterval(interval);
}, []);`} />
          </div>

          <div className="bg-cyan-50 dark:bg-cyan-900/20 p-5 rounded-lg border border-cyan-200 dark:border-cyan-800">
            <h5 className="font-bold text-cyan-800 dark:text-cyan-300 mb-3">💡 Pro Tips</h5>
            <ul className="text-sm space-y-2 text-cyan-700 dark:text-cyan-400 list-disc list-inside">
              <li>Multiple useEffect hooks use කරන්න පුළුවන් - separation of concerns වලට හොඳයි</li>
              <li>Dependency array එකේ සියලු external values include කරන්න</li>
              <li>Cleanup functions අමතක කරන්න එපා (timers, listeners)</li>
              <li>useEffect ඇතුළේ async functions directly use කරන්න බැහැ - wrapper function එකක් use කරන්න</li>
            </ul>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Challenges</h5>
            <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
              <li><strong>Auto-save Form:</strong> Form data එක type කරද්දි 2 seconds වලට පස්සේ auto-save වෙන feature එකක් implement කරන්න</li>
              <li><strong>Dark Mode Toggle:</strong> localStorage use කරලා dark mode preference එක save කරන system එකක් හදන්න</li>
              <li><strong>Mouse Tracker:</strong> Mouse cursor එකේ position එක track කරලා display කරන component එකක් හදන්න</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Fetching Data from APIs",
      duration: "Videos 54-58",
      videoIds: ["v54", "v55", "v56", "v57", "v58"],
      resources: [
        { title: "Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
        { title: "JSONPlaceholder", url: "https://jsonplaceholder.typicode.com/" },
        { title: "Public APIs", url: "https://github.com/public-apis/public-apis" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 p-6 rounded-xl border-l-4 border-violet-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🌐 Video 54-58: API Integration</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Real applications වල data backend APIs වලින් එනවා. 
              React වල APIs වලින් data fetch කරලා display කරන හැටි, loading states, error handling මේ section එකෙන් ඉගෙන ගන්නවා.
            </p>
          </div>

          <CodeBlock title="🎯 Basic Fetch Example" code={`function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty array = fetch once
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>Users ({users.length})</h1>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}`} />

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">✨ Async/Await Syntax (Recommended)</h5>
            <CodeBlock title="Modern Approach" code={`function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // useEffect ඇතුළේ async function එකක් හදන්න
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="error">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Users ({users.length})</h1>
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}`} />
          </div>

          <CodeBlock title="🎨 Complete Example: Posts App" code={`function PostsApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        
        if (!response.ok) {
          throw new Error(\`HTTP error! Status: \${response.status}\`);
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  // Search functionality
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="spinner"></div>
          <p className="mt-4">Loading posts...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="error-container">
        <h2>❌ Error Loading Posts</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }
  
  return (
    <div className="container">
      <h1>Blog Posts ({filteredPosts.length})</h1>
      
      {/* Search Bar */}
      <input 
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      {/* Posts Grid */}
      <div className="posts-grid">
        {filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="post-footer">
                <span>Post #{post.id}</span>
                <span>User {post.userId}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`} />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border border-amber-200 dark:border-amber-800">
              <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">📝 POST Request Example</h5>
              <CodeBlock title="Creating Data" code={`const createPost = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'New Post',
          body: 'Post content',
          userId: 1
        })
      }
    );
    
    const data = await response.json();
    console.log('Created:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};`} />
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🗑️ DELETE Request Example</h5>
              <CodeBlock title="Deleting Data" code={`const deletePost = async (id) => {
  try {
    const response = await fetch(
      \`https://jsonplaceholder.typicode.com/posts/\${id}\`,
      {
        method: 'DELETE'
      }
    );
    
    if (response.ok) {
      console.log('Deleted!');
      // Update local state
      setPosts(posts.filter(p => p.id !== id));
    }
  } catch (error) {
    console.error('Error:', error);
  }
};`} />
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">⚠️ Common API Pitfalls</h5>
            <ul className="text-sm space-y-2 text-rose-700 dark:text-rose-400 list-disc list-inside">
              <li><strong>Not handling loading states:</strong> User ට progress පෙන්වන්න ඕන</li>
              <li><strong>Ignoring errors:</strong> Error messages user-friendly විදියට display කරන්න</li>
              <li><strong>Memory leaks:</strong> Component unmount වෙද්දි fetch cancel කරන්න අමතක වෙනවා</li>
              <li><strong>CORS issues:</strong> Backend එකේ CORS properly configure කරන්න ඕන</li>
            </ul>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Final Project</h5>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-3">
              <strong>Weather App:</strong> Weather API එකක් (OpenWeatherMap) use කරලා:
            </p>
            <ul className="text-sm space-y-1 text-emerald-700 dark:text-emerald-400 list-disc list-inside">
              <li>City name input කරන්න පුළුවන්</li>
              <li>Current weather display කරන්න (temperature, description, icon)</li>
              <li>Loading spinner එකක් display කරන්න</li>
              <li>Error messages proper විදියට handle කරන්න</li>
              <li>5-day forecast එකක් display කරන්න (bonus)</li>
            </ul>
          </div>
        </div>
      )
    }
  ]
},
6: {
  title: "Day 6: React Router & Navigation (Videos 59-66)",
  description: "Multi-page applications හදන හැටි, routes setup කරන හැටි, navigation implement කරන හැටි, සහ dynamic routing භාවිතා කරන හැටි ඉගෙන ගන්නවා.",
  checklist: [
    "React Router library install කරන්න",
    "Basic routing setup කරන්න",
    "Links සහ Navigation implement කරන්න",
    "URL parameters use කරන හැටි ඉගෙන ගන්න",
    "Nested routes සහ protected routes implement කරන්න"
  ],
  modules: [
    {
      title: "Installing React Router",
      duration: "Videos 59-60",
      videoIds: ["v59", "v60"],
      resources: [
        { title: "React Router Docs", url: "https://reactrouter.com/" },
        { title: "React Router Tutorial", url: "https://reactrouter.com/en/main/start/tutorial" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-blue-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🗺️ Video 59-60: React Router Setup</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              React Router යනු React වල multi-page applications හදන්න use කරන standard library එක. 
              Page reload වෙන්නේ නැතිව different pages අතර navigate කරන්න පුළුවන්!
            </p>
          </div>

          <MockScreenshot title="Installation" type="terminal">
            <div className="font-mono text-xs space-y-2 bg-slate-950 p-4">
              <div className="text-green-400"># Install React Router</div>
              <div className="text-blue-300">$ npm install react-router-dom</div>
              <div className="text-yellow-400 mt-3">✓ Installed successfully!</div>
            </div>
          </MockScreenshot>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🎯 What is React Router?</h5>
            <ul className="text-sm space-y-2 text-amber-700 dark:text-amber-400 list-disc list-inside">
              <li><strong>Client-Side Routing:</strong> Browser එකේම routes handle කරනවා (server requests නෑ)</li>
              <li><strong>SPA Experience:</strong> Single Page Application - page reload වෙන්නේ නෑ</li>
              <li><strong>URL Management:</strong> URL එක වෙනස් වෙනවා නමුත් page reload වෙන්නේ නෑ</li>
              <li><strong>Browser History:</strong> Back/Forward buttons වැඩ කරනවා</li>
            </ul>
          </div>

          <CodeBlock title="🎨 Basic Setup - main.jsx" code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// BrowserRouter එක App component එක wrap කරනවා
// මේක කරන්නේ main.jsx එකේ එක පාරක්`} />

          <CodeBlock title="🗺️ Basic Routes - App.jsx" code={`import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <h1>My Website</h1>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

// URL අනුව components render වෙනවා:
// localhost:5173/         → Home component
// localhost:5173/about    → About component
// localhost:5173/contact  → Contact component`} />

          <div className="grid md:grid-cols-3 gap-4">
            <CodeBlock title="📄 Home.jsx" code={`function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to homepage!</p>
    </div>
  );
}

export default Home;`} />

            <CodeBlock title="📄 About.jsx" code={`function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>Learn about our company</p>
    </div>
  );
}

export default About;`} />

            <CodeBlock title="📄 Contact.jsx" code={`function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Get in touch with us</p>
    </div>
  );
}

export default Contact;`} />
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">📁 Recommended Folder Structure</h5>
            <CodeBlock title="Project Structure" code={`src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx
└── main.jsx

// pages/ folder එකේ routes වල components තියන්න
// components/ folder එකේ reusable components තියන්න`} />
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Quick Task</h5>
            <ol className="text-sm space-y-2 text-emerald-700 dark:text-emerald-400 list-decimal list-inside">
              <li>React Router install කරන්න</li>
              <li>BrowserRouter setup කරන්න main.jsx එකේ</li>
              <li>Home, About, Contact pages 3ක් හදන්න</li>
              <li>App.jsx එකේ routes configure කරන්න</li>
              <li>Browser එකේ manually URLs type කරලා navigation test කරන්න</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Navigation & Links",
      duration: "Videos 61-62",
      videoIds: ["v61", "v62"],
      resources: [
        { title: "Link Component", url: "https://reactrouter.com/en/main/components/link" },
        { title: "NavLink Component", url: "https://reactrouter.com/en/main/components/nav-link" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🔗 Video 61-62: Navigation Links</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Pages අතර navigate කරන්න <code>&lt;a&gt;</code> tags use කරන්න එපා! 
              React Router හි <code>&lt;Link&gt;</code> සහ <code>&lt;NavLink&gt;</code> components use කරන්න.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border border-rose-200 dark:border-rose-700">
              <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">❌ Wrong Way - &lt;a&gt; tag</h5>
              <CodeBlock title="වැරදි" code={`// Page reload වෙනවා - slow!
<a href="/about">About</a>

// Problems:
// - Full page reload වෙනවා
// - State එක නැති වෙනවා
// - Slow user experience
// - React Router benefits නැති වෙනවා`} />
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-lg border border-emerald-200 dark:border-emerald-700">
              <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-3">✅ Right Way - &lt;Link&gt;</h5>
              <CodeBlock title="හරි" code={`import { Link } from 'react-router-dom';

// Page reload වෙන්නේ නෑ - fast!
<Link to="/about">About</Link>

// Benefits:
// ✓ No page reload
// ✓ State preserved
// ✓ Fast navigation
// ✓ Browser history works`} />
            </div>
          </div>

          <CodeBlock title="🎨 Creating a Navbar" code={`import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyWebsite</Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

// App.jsx එකේ use කරන්න:
// <Navbar />
// <Routes>...</Routes>`} />

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">✨ NavLink - Active Link Styling</h5>
            <p className="text-sm text-blue-700 dark:text-blue-400 mb-3">
              <code>NavLink</code> යනු special Link එකක්. Active link එකට automatic styles apply කරනවා!
            </p>
            <CodeBlock title="NavLink with Active Styles" code={`import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink 
        to="/"
        className={({ isActive }) => 
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      
      <NavLink 
        to="/about"
        className={({ isActive }) => 
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About
      </NavLink>
      
      <NavLink 
        to="/contact"
        className={({ isActive }) => 
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

// CSS එකේ:
// .nav-link { color: gray; }
// .nav-link.active { color: blue; font-weight: bold; }`} />
          </div>

          <CodeBlock title="🎮 Complete Navbar Example" code={`import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#2563eb' : '#64748b',
      textDecoration: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      backgroundColor: isActive ? '#dbeafe' : 'transparent'
    };
  };
  
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" style={navLinkStyles}>
          🚀 MyApp
        </NavLink>
      </div>
      
      <ul className="nav-menu">
        <li>
          <NavLink to="/" style={navLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={navLinkStyles}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navLinkStyles}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navLinkStyles}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;`} />

          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🔄 Programmatic Navigation</h5>
            <p className="text-sm text-amber-700 dark:text-amber-400 mb-3">
              Button click කරද්දි හෝ form submit කරද්දි navigate කරන්න <code>useNavigate</code> hook එක use කරන්න.
            </p>
            <CodeBlock title="useNavigate Hook" code={`import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Login logic...
    
    // Success නම් dashboard එකට යන්න
    navigate('/dashboard');
    
    // හෝ back යන්න නම්
    // navigate(-1);
    
    // හෝ forward යන්න නම්
    // navigate(1);
  };
  
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}`} />
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Practice Task</h5>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-3">
              <strong>Multi-Page Portfolio:</strong> Portfolio website එකක් හදන්න:
            </p>
            <ul className="text-sm space-y-1 text-emerald-700 dark:text-emerald-400 list-disc list-inside">
              <li>Navbar එකක් හදන්න NavLink use කරලා</li>
              <li>Home, About, Projects, Contact pages හදන්න</li>
              <li>Active link එකට special styling එකක් දෙන්න</li>
              <li>Footer එකක් add කරන්න සියලු pages වලටම</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Dynamic Routes & Parameters",
      duration: "Videos 63-66",
      videoIds: ["v63", "v64", "v65", "v66"],
      resources: [
        { title: "URL Parameters", url: "https://reactrouter.com/en/main/start/tutorial#url-params" },
        { title: "useParams Hook", url: "https://reactrouter.com/en/main/hooks/use-params" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🎯 Video 63-66: Dynamic Routing</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              URL එකේ parameters use කරලා dynamic pages හදන හැටි ඉගෙන ගන්නවා. 
              උදාහරණයක් විදියට: /products/1, /products/2, /users/john වගේ URLs.
            </p>
          </div>

          <CodeBlock title="🎯 URL Parameters Setup" code={`// App.jsx
import { Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Products routes */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      {/*              ↑ Dynamic parameter */}
      
      {/* User profile with username parameter */}
      <Route path="/users/:username" element={<UserProfile />} />
      
      {/* Blog post with multiple parameters */}
      <Route path="/blog/:year/:month/:slug" element={<BlogPost />} />
    </Routes>
  );
}

// URL Examples:
// /products/1        → ProductDetails (id = 1)
// /products/999      → ProductDetails (id = 999)
// /users/john        → UserProfile (username = john)
// /blog/2024/01/react-tutorial → BlogPost (year=2024, month=01, slug=react-tutorial)`} />

          <CodeBlock title="📖 Using useParams Hook" code={`import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetails() {
  // URL එකේ :id parameter එක ගන්න
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // API call with the ID
    fetch(\`https://api.example.com/products/\${id}\`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]); // id වෙනස් වෙද්දි re-fetch කරන්න
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Product ID: {id}</p>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;`} />

          <CodeBlock title="🎨 Real Example: Product Catalog" code={`// ProductList.jsx
import { Link } from 'react-router-dom';

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 150000 },
    { id: 2, name: "Phone", price: 75000 },
    { id: 3, name: "Tablet", price: 50000 }
  ];
  
  return (
    <div className="product-list">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Rs. {product.price}</p>
            
            {/* Link to dynamic route */}
            <Link to={\`/products/\${product.id}\`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// ProductDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock product data
  const allProducts = [
    { id: 1, name: "Laptop", price: 150000, description: "High performance laptop" },
    { id: 2, name: "Phone", price: 75000, description: "Latest smartphone" },
    { id: 3, name: "Tablet", price: 50000, description: "Portable tablet" }
  ];
  
  const product = allProducts.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/products')}>
          Back to Products
        </button>
      </div>
    );
  }
  
  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)}>← Back</button>
      
      <h1>{product.name}</h1>
      <p className="price">Rs. {product.price}</p>
      <p className="description">{product.description}</p>
      
      <button>Add to Cart</button>
    </div>
  );
}`} />

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🔍 Multiple Parameters</h5>
            <CodeBlock title="Blog Post Example" code={`// Route: /blog/:year/:month/:slug
<Route path="/blog/:year/:month/:slug" element={<BlogPost />} />

// BlogPost.jsx
function BlogPost() {
  const { year, month, slug } = useParams();
  
  return (
    <div>
      <h1>Blog Post</h1>
      <p>Year: {year}</p>
      <p>Month: {month}</p>
      <p>Slug: {slug}</p>
    </div>
  );
}

// URL: /blog/2024/01/react-tutorial
// Result: year=2024, month=01, slug=react-tutorial`} />
          </div>

          <CodeBlock title="❓ 404 Page - Not Found Route" code={`// App.jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      
      {/* Catch-all route - අන්තිමට තියන්න */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// NotFound.jsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}`} />

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">🎯 Final Challenge</h5>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-3">
              <strong>Movie Database App:</strong> OMDB API use කරලා:
            </p>
            <ul className="text-sm space-y-1 text-emerald-700 dark:text-emerald-400 list-disc list-inside">
              <li>/movies - Movie list එක display කරන්න</li>
              <li>/movies/:id - Single movie details</li>
              <li>Search functionality තියෙන navbar එකක්</li>
              <li>404 page එකක් implement කරන්න</li>
              <li>Back button සහ navigation buttons</li>
            </ul>
          </div>
        </div>
      )
    }
  ]
},
7: {
  title: "Day 7: Final Project & Deployment (Videos 67-71)",
  description: "ඉගෙන ගත්ත සියල්ල භාවිතා කරලා complete project එකක් හදලා, production build එක create කරලා, online deploy කරන හැටි ඉගෙන ගන්නවා.",
  checklist: [
    "Final project planning සහ setup",
    "All concepts integrate කරන්න",
    "Production build create කරන්න",
    "Firebase/Vercel/Netlify deploy කරන්න",
    "Project optimize සහ test කරන්න"
  ],
  modules: [
    {
      title: "Final Project Planning",
      duration: "Video 67",
      videoIds: ["v67"],
      resources: [
        { title: "Project Ideas", url: "https://github.com/florinpop17/app-ideas" },
        { title: "React Best Practices", url: "https://react.dev/learn/thinking-in-react" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-rose-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🎯 Video 67: Movie Search App Project</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              අන්තිම project එක විදියට Movie Search Application එකක් හදමු. 
              මෙහි React concepts සියල්ලම use වෙනවා - components, state, effects, routing, API calls!
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">🎬 Project Features</h5>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-sm mb-2">Core Features ✨</h6>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li>Search movies by title</li>
                  <li>Display results in grid</li>
                  <li>View movie details</li>
                  <li>Responsive design</li>
                  <li>Loading states</li>
                  <li>Error handling</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h6 className="font-bold text-sm mb-2">Technologies Used 🛠️</h6>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside">
                  <li>React (Vite)</li>
                  <li>React Router</li>
                  <li>OMDB API</li>
                  <li>Tailwind CSS / Custom CSS</li>
                  <li>useState, useEffect</li>
                  <li>Axios/Fetch</li>
                </ul>
              </div>
            </div>
          </div>

          <CodeBlock title="📁 Project Structure" code={`movie-search-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   └── Loading.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   └── NotFound.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── package.json
└── vite.config.js`} />

          <CodeBlock title="🔑 API Setup - .env" code={`# OMDB API Key (Get from http://www.omdbapi.com/apikey.aspx)
VITE_OMDB_API_KEY=your_api_key_here

# Base URL
VITE_API_BASE_URL=https://www.omdbapi.com/

# Note: Vite වල environment variables වලට VITE_ prefix එක ඕන!`} />

          <CodeBlock title="🌐 API Service - src/services/api.js" code={`const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      \`\${BASE_URL}?apikey=\${API_KEY}&s=\${query}\`
    );
    const data = await response.json();
    
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    
    return data.Search;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      \`\${BASE_URL}?apikey=\${API_KEY}&i=\${id}&plot=full\`
    );
    const data = await response.json();
    
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    
    return data;
  } catch (error) {
    throw error;
  }
};`} />

          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">💡 Development Tips</h5>
            <ul className="text-sm space-y-2 text-amber-700 dark:text-amber-400 list-disc list-inside">
              <li><strong>Start Simple:</strong> මුලින්ම basic functionality එක වැඩ කරවන්න, පස්සේ styling</li>
              <li><strong>Component Breakdown:</strong> Small, reusable components හදන්න</li>
              <li><strong>State Management:</strong> Parent component එකේ main state එක තියන්න</li>
              <li><strong>Error Handling:</strong> API failures සහ edge cases handle කරන්න</li>
              <li><strong>Loading States:</strong> User experience එක improve කරන්න loading indicators use කරන්න</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Building the UI",
      duration: "Videos 68-69",
      videoIds: ["v68", "v69"],
      resources: [
        { title: "OMDB API Docs", url: "http://www.omdbapi.com/" },
        { title: "React Icons", url: "https://react-icons.github.io/react-icons/" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-indigo-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🎨 Video 68-69: Building Components</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Movie Search App එකේ සියලු components හදමු. 
              Search functionality, movie cards, detail pages සහ routing implement කරමු.
            </p>
          </div>

          <CodeBlock title="🏠 Home Page - src/pages/Home.jsx" code={`import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import Loading from '../components/Loading';
import { searchMovies } from '../services/api';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const handleSearch = async (query) => {
    if (!query.trim()) return;
    
    try {
      setLoading(true);
      setError(null);
      setSearchPerformed(true);
      
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="home-page">
      <div className="hero">
        <h1>🎬 Movie Search</h1>
        <p>Search for any movie, anywhere, anytime</p>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="results-section">
        {loading && <Loading />}
        
        {error && (
          <div className="error-message">
            <h3>❌ Error</h3>
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && searchPerformed && movies.length === 0 && (
          <div className="no-results">
            <h3>No movies found</h3>
            <p>Try searching with different keywords</p>
          </div>
        )}
        
        {!loading && !error && movies.length > 0 && (
          <>
            <h2>Search Results ({movies.length})</h2>
            <MovieGrid movies={movies} />
          </>
        )}
        
        {!searchPerformed && (
          <div className="welcome-message">
            <h2>Welcome! 👋</h2>
            <p>Start by searching for your favorite movies</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;`} />

          <CodeBlock title="🔍 Search Bar - src/components/SearchBar.jsx" code={`import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        🔍 Search
      </button>
    </form>
  );
}

export default SearchBar;`} />

          <CodeBlock title="🎬 Movie Card - src/components/MovieCard.jsx" code={`import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const posterUrl = movie.Poster !== "N/A" 
    ? movie.Poster 
    : "https://via.placeholder.com/300x450?text=No+Poster";
  
  return (
    <Link to={\`/movie/\${movie.imdbID}\`} className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.Title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <div className="movie-meta">
          <span className="year">{movie.Year}</span>
          <span className="type">{movie.Type}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;`} />

          <CodeBlock title="📱 Movie Grid - src/components/MovieGrid.jsx" code={`import MovieCard from './MovieCard';

function MovieGrid({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;`} />

          <CodeBlock title="📄 Movie Details - src/pages/MovieDetails.jsx" code={`import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import Loading from '../components/Loading';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovie();
  }, [id]);
  
  if (loading) return <Loading />;
  
  if (error) {
    return (
      <div className="error-page">
        <h2>Error: {error}</h2>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }
  
  return (
    <div className="movie-details">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      
      <div className="details-container">
        <div className="poster-section">
          <img 
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"} 
            alt={movie.Title}
          />
        </div>
        
        <div className="info-section">
          <h1>{movie.Title}</h1>
          <p className="tagline">{movie.Year} • {movie.Rated} • {movie.Runtime}</p>
          
          <div className="rating">
            <span className="imdb-rating">⭐ {movie.imdbRating}/10</span>
            <span className="votes">({movie.imdbVotes} votes)</span>
          </div>
          
          <div className="genres">
            {movie.Genre.split(", ").map((genre, i) => (
              <span key={i} className="genre-tag">{genre}</span>
            ))}
          </div>
          
          <div className="plot">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          
          <div className="additional-info">
            <div className="info-row">
              <strong>Director:</strong>
              <span>{movie.Director}</span>
            </div>
            <div className="info-row">
              <strong>Cast:</strong>
              <span>{movie.Actors}</span>
            </div>
            <div className="info-row">
              <strong>Language:</strong>
              <span>{movie.Language}</span>
            </div>
            <div className="info-row">
              <strong>Country:</strong>
              <span>{movie.Country}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;`} />

          <CodeBlock title="⏳ Loading Component - src/components/Loading.jsx" code={`function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;

/* CSS for spinner:
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/`} />

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-2">✅ Implementation Checklist</h5>
            <ul className="text-sm space-y-1 text-emerald-700 dark:text-emerald-400 list-disc list-inside">
              <li>OMDB API key එක ගෙන .env file එකේ තියන්න</li>
              <li>සියලු components හදන්න</li>
              <li>Routes setup කරන්න App.jsx එකේ</li>
              <li>API calls test කරන්න</li>
              <li>Error handling සහ loading states add කරන්න</li>
              <li>CSS styling add කරන්න</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Production Build & Deployment",
      duration: "Videos 70-71",
      videoIds: ["v70", "v71"],
      resources: [
        { title: "Vite Build", url: "https://vitejs.dev/guide/build.html" },
        { title: "Firebase Hosting", url: "https://firebase.google.com/docs/hosting" },
        { title: "Vercel Deploy", url: "https://vercel.com/docs" },
        { title: "Netlify Deploy", url: "https://docs.netlify.com/" }
      ],
      notes: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-500">
            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">🚀 Video 70-71: Deploy Your App!</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              ඔයාගේ React app එක production build එකක් කරලා free hosting services use කරලා online deploy කරමු!
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
            <h5 className="font-bold text-blue-800 dark:text-blue-300 mb-3">📦 Step 1: Production Build</h5>
            <MockScreenshot title="Build Command" type="terminal">
              <div className="font-mono text-xs space-y-2 bg-slate-950 p-4">
                <div className="text-green-400"># Create production build</div>
                <div className="text-blue-300">$ npm run build</div>
                <div className="text-yellow-400 mt-3">
                  vite v7.3.0 building for production...<br/>
                  ✓ 1245 modules transformed.<br/>
                  dist/index.html                   0.45 kB<br/>
                  dist/assets/index-a3b4c5d6.css   15.23 kB<br/>
                  dist/assets/index-d7e8f9g0.js    145.67 kB<br/>
                  <br/>
                  ✓ built in 3.45s
                </div>
              </div>
            </MockScreenshot>
            <p className="text-sm text-blue-700 dark:text-blue-400 mt-3">
              <strong>dist/</strong> folder එක තියෙනවා - මේකේ optimize කරපු production files තියෙනවා
            </p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-lg border-l-4 border-amber-500">
            <h5 className="font-bold text-amber-800 dark:text-amber-300 mb-3">🔥 Option 1: Firebase Hosting (Recommended)</h5>
            <MockScreenshot title="Firebase Setup" type="terminal">
              <div className="font-mono text-xs space-y-2 bg-slate-950 p-4">
                <div className="text-green-400"># Install Firebase CLI</div>
                <div className="text-blue-300">$ npm install -g firebase-tools</div>
                <br/>
                <div className="text-green-400"># Login to Firebase</div>
                <div className="text-blue-300">$ firebase login</div>
                <br/>
                <div className="text-green-400"># Initialize Firebase</div>
                <div className="text-blue-300">$ firebase init</div>
                <div className="text-yellow-400">
                  ? Which Firebase features? › Hosting<br/>
                  ? What do you want to use as your public directory? › dist<br/>
                  ? Configure as a single-page app? › Yes<br/>
                  ? Set up automatic builds with GitHub? › No
                </div>
                <br/>
                <div className="text-green-400"># Deploy!</div>
                <div className="text-blue-300">$ firebase deploy</div>
                <div className="text-cyan-400 mt-2">
                  ✓ Deploy complete!<br/>
                  Hosting URL: https://your-app.web.app
                </div>
              </div>
            </MockScreenshot>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-700">
              <h5 className="font-bold text-purple-800 dark:text-purple-300 mb-3">⚡ Option 2: Vercel</h5>
              <ol className="text-sm space-y-2 text-purple-700 dark:text-purple-400 list-decimal list-inside">
                <li>vercel.com එකට යන්න</li>
                <li>"Add New Project" click කරන්න</li>
                <li>GitHub repository එක connect කරන්න</li>
                <li>"Deploy" click කරන්න</li>
                <li>✅ Done! Auto-deploy enabled</li>
              </ol>
              <p className="text-xs mt-3 text-purple-600 dark:text-purple-400">
                ⚡ Git push කරද්දි automatically deploy වෙනවා!
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg border border-teal-200 dark:border-teal-700">
              <h5 className="font-bold text-teal-800 dark:text-teal-300 mb-3">🌊 Option 3: Netlify</h5>
              <ol className="text-sm space-y-2 text-teal-700 dark:text-teal-400 list-decimal list-inside">
                <li>netlify.com එකට යන්න</li>
                <li>"Add new site" → "Import from Git"</li>
                <li>Repository එක select කරන්න</li>
                <li>Build command: <code>npm run build</code></li>
                <li>Publish directory: <code>dist</code></li>
                <li>"Deploy site" click කරන්න</li>
              </ol>
              <p className="text-xs mt-3 text-teal-600 dark:text-teal-400">
                🔄 Continuous deployment with Git!
              </p>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-900/20 p-5 rounded-lg border-l-4 border-rose-500">
            <h5 className="font-bold text-rose-800 dark:text-rose-300 mb-3">⚠️ Pre-Deployment Checklist</h5>
            <ul className="text-sm space-y-2 text-rose-700 dark:text-rose-400 list-disc list-inside">
              <li><strong>Environment Variables:</strong> .env file එකේ values hosting platform එකේ add කරන්න</li>
              <li><strong>API Keys:</strong> Production API keys use කරනවද බලන්න</li>
              <li><strong>Test Build:</strong> Local එකේ build එක test කරන්න (<code>npm run preview</code>)</li>
              <li><strong>Remove Console Logs:</strong> Unnecessary console.log statements ඉවත් කරන්න</li>
              <li><strong>404 Handling:</strong> Single-page app configuration හරියටද බලන්න</li>
              <li><strong>HTTPS:</strong> SSL certificate එක automatic ඇති නම් තිබෙනවද බලන්න</li>
            </ul>
          </div>

          <CodeBlock title="⚙️ firebase.json Configuration" code={`{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=7200"
          }
        ]
      }
    ]
  }
}`} />

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h5 className="font-bold text-indigo-800 dark:text-indigo-300 mb-3">🎨 Custom Domain (Optional)</h5>
            <CodeBlock title="Steps for Custom Domain" code={`# 1. Domain එකක් purchase කරන්න (Namecheap, GoDaddy, etc.)

# 2. Firebase Console එකේ:
#    - Hosting → Add custom domain
#    - ඔයාගේ domain name එක enter කරන්න

# 3. DNS Records add කරන්න domain provider එකේ:
#    Type: A
#    Name: @
#    Value: [Firebase IP]
#    
#    Type: A
#    Name: www
#    Value: [Firebase IP]

# 4. SSL certificate automatically issue වෙනවා (24h ඇතුළත)

# 5. Done! ඔයාගේ app එක custom domain එකෙන් access කරන්න පුළුවන්`} />
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl border-l-4 border-yellow-500">
            <h5 className="font-bold text-yellow-800 dark:text-yellow-300 mb-3 flex items-center gap-2">
              <span className="text-2xl">🎉</span> Congratulations!
            </h5>
            <p className="text-sm text-yellow-700 dark:text-yellow-400 leading-relaxed">
              ඔයා React development journey එක සාර්ථකව complete කරා! 71 videos cover කරලා, 
              components, state, hooks, routing, API integration, සහ deployment ඉගෙන ගත්තා. 
              දැන් ඔයා independent එකටම React projects build කරන්න ready! 🚀
            </p>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border-l-4 border-emerald-500">
            <h5 className="font-bold text-emerald-800 dark:text-emerald-300 mb-3">🎯 Next Steps - දැන් මොනවද කරන්නේ?</h5>
            <div className="space-y-3 text-sm text-emerald-700 dark:text-emerald-400">
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold">1️⃣</span>
                <div>
                  <strong>Practice More:</strong> තව projects හදන්න - Todo App, Weather App, E-commerce, Blog වගේ දේවල්
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold">2️⃣</span>
                <div>
                  <strong>Learn Advanced Concepts:</strong> Context API, useReducer, Custom Hooks, Performance Optimization
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold">3️⃣</span>
                <div>
                  <strong>Explore Libraries:</strong> Redux, React Query, Framer Motion, Material-UI වගේ popular libraries ඉගෙන ගන්න
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-600 font-bold">4️⃣</span>
                <div>
                  <strong>Build Portfolio:</strong> GitHub එකේ projects upload කරන්න, portfolio website එකක් හදන්න
                </div>
              </div>
              <div className="flex gap-3">
<span className="text-emerald-600 font-bold">5️⃣</span>
<div>
<strong>Contribute:</strong> Open source projects වලට contribute කරන්න, communities join වෙන්න
</div>
</div>
</div>
</div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
        <h5 className="font-bold text-xl mb-3 flex items-center gap-2">
          <span className="text-3xl">🏆</span> You Did It!
        </h5>
        <p className="text-sm leading-relaxed opacity-90">
          මේ journey එක easy එකක් නෙවෙයි, නමුත් ඔයා ඒක complete කරා! 
          දැන් ඔයා React developer කෙනෙක්. ඉගෙන ගන්න දිගටම, build කරන්න දිගටම, 
          improve වෙන්න දිගටම. The possibilities are endless! 🌟
        </p>
        <p className="text-sm mt-4 font-bold">
          Happy Coding! 👨‍💻👩‍💻
        </p>
      </div>
    </div>
  )
}
]
}





