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
                Arrow functions (=>) යනු JavaScript හි functions ලියන නවීන ක්‍රමයයි. React වල components හදන්න මේක බෙහෙවින් වැදගත්. 
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
};