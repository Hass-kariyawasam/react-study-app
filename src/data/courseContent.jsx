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
  city: "Colombo"// Method 1: එක එක pass කරන්න
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
    description: "දත්ත ලැයිස්තු (Lists) පෙන්වීම සහ User Input ලබා ගැනීම.",
    checklist: [
      "Rendering Lists (Videos 39-41)",
      "Key Prop වැදගත්කම (Videos 42-43)",
      "Forms & Inputs (Videos 44-48)"
    ],
    modules: [
      {
        title: "Rendering Lists",
        duration: "Videos 39-43",
        notes: (
          <div className="space-y-4">
            <p className="text-sm">Array එකක් පෙන්වන්න <code>.map()</code> භාවිතා කරන්න. අනිවාර්යයෙන්ම <code>key</code> එකක් දෙන්න.</p>
            <CodeBlock title="List Map" code={`{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}`} />
          </div>
        )
      },
      {
        title: "Forms",
        duration: "Videos 44-48",
        notes: (
          <div className="space-y-4">
            <p className="text-sm">Input එකක අගය State එකට සම්බන්ධ කරන්න (Controlled Components).</p>
            <CodeBlock title="Form Input" code={`const [text, setText] = useState("");

<input 
  value={text} 
  onChange={(e) => setText(e.target.value)} 
/>`} />
          </div>
        )
      }
    ]
  },
  5: {
    title: "Day 5: Hooks & Effects (Videos 49-58)",
    description: "Component Lifecycle සහ API හරහා දත්ත ලබා ගැනීම.",
    checklist: [
      "useEffect හැඳින්වීම (Videos 49-53)",
      "API Calls (Fetch/Axios) (Videos 54-56)",
      "Async/Await භාවිතය (Videos 57-58)"
    ],
    modules: [
      {
        title: "useEffect",
        duration: "Videos 49-53",
        notes: (
          <div className="space-y-4">
            <p className="text-sm">Component එක Load වෙනකොට වැඩක් කරන්න මේක ඕන.</p>
            <CodeBlock title="useEffect" code={`useEffect(() => {
  console.log("Page Loaded!");
}, []); // [] = Run once`} />
          </div>
        )
      },
      {
        title: "Data Fetching",
        duration: "Videos 54-58",
        notes: (
          <CodeBlock title="Fetch API" code={`useEffect(() => {
  fetch("https://api.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);`} />
        )
      }
    ]
  },
  6: {
    title: "Day 6: React Router (Videos 59-66)",
    description: "පිටු කිහිපයක් සහිත වෙබ් අඩවියක් සෑදීම (Routing).",
    checklist: [
      "React Router Install (Videos 59-60)",
      "Routes සැකසීම (Videos 61-62)",
      "Dynamic Links (Videos 63-66)"
    ],
    modules: [
      {
        title: "Router Setup",
        duration: "Videos 59-62",
        resources: [{ title: "React Router", url: "https://reactrouter.com/" }],
        notes: (
          <CodeBlock title="App.jsx" code={`import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>`} />
        )
      },
      {
        title: "Dynamic Routes",
        duration: "Videos 63-66",
        notes: (
          <p className="text-sm">Use <code>useParams</code> hook to get ID from URL (e.g. /user/1).</p>
        )
      }
    ]
  },
  7: {
    title: "Day 7: Final Project & Deploy (Videos 67-71)",
    description: "සම්පූර්ණ දැනුම භාවිතා කර Movie App එක සෑදීම සහ අන්තර්ජාලයට දැමීම.",
    checklist: [
      "Project Setup (Video 67)",
      "Movie API සම්බන්ධ කිරීම (Videos 68-69)",
      "Firebase Hosting (Videos 70-71)"
    ],
    modules: [
      {
        title: "Movie App Project",
        duration: "Videos 67-69",
        notes: (
          <div className="space-y-4">
            <p className="text-sm">මෙතෙක් ඉගෙන ගත් State, Effects, Lists, Router සියල්ල එකතු කර Movie App එක හදමු.</p>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded border border-emerald-500">
              <strong>Features:</strong> Search Movies, View Details, Responsive Grid.
            </div>
          </div>
        )
      },
      {
        title: "Deployment",
        duration: "Videos 70-71",
        notes: (
          <div className="space-y-4">
            <h4 className="font-bold">Firebase Hosting Commands</h4>
            <CodeBlock title="Terminal" code={`npm run build
firebase login
firebase init
firebase deploy`} />
          </div>
        )
      }
    ]
  }
};