import React, { useState } from "react";

// Main App component
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0); // State to manage a counter

  // Function to increment the counter
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          Welcome to Your React App!
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          This is a simple TypeScript React application, ready for GitHub Pages.
          Click the buttons below to see the counter in action!
        </p>

        <div className="flex items-center justify-center space-x-6 mb-8">
          <button
            onClick={decrement}
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-all duration-200 transform hover:-translate-y-1"
          >
            Decrement
          </button>
          <span className="text-5xl font-bold text-indigo-700 select-none">
            {count}
          </span>
          <button
            onClick={increment}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-200 transform hover:-translate-y-1"
          >
            Increment
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default App;
