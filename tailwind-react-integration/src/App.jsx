import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 p-4">
        {/* Header with logos */}
        <div className="text-center mb-12 pt-8">
          <div className="flex justify-center items-center gap-8 mb-6">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo w-24 h-24 hover:scale-110 transition-transform duration-300" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react w-24 h-24 hover:scale-110 transition-transform duration-300 animate-spin-slow" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Vite + React
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Tailwind CSS Integration Project
          </p>
        </div>

        {/* Main content grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: Interactive counter */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Interactive Counter
            </h2>
            
            <div className="card bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 mb-6">
              <div className="text-center mb-8">
                <div className="text-8xl font-bold text-blue-600 mb-4">
                  {count}
                </div>
                <p className="text-gray-600 mb-6">
                  Click the button to increment the counter
                </p>
                <button 
                  onClick={() => setCount((count) => count + 1)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  count is {count}
                </button>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => setCount(0)}
                  className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 mr-4"
                >
                  Reset Counter
                </button>
                <button 
                  onClick={() => setCount(count - 1)}
                  className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300"
                >
                  Decrease
                </button>
              </div>
            </div>
            
            <p className="text-gray-700 text-center">
              Edit <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">src/App.jsx</code> and save to test HMR
            </p>
          </div>

          {/* Right column: UserProfile component */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              User Profile Component
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              This component demonstrates responsive design, hover effects, and transitions using Tailwind CSS
            </p>
            
            {/* UserProfile component container */}
            <div className="flex justify-center items-center min-h-[400px]">
              <UserProfile />
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Features Demonstrated:</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Hover Effects</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Transitions</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Animations</span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">Shadow Effects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 mb-8">
          <p className="text-gray-600 mb-4">
            This project demonstrates Tailwind CSS integration with React
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://vite.dev/guide/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Vite Docs
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="https://react.dev/learn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              React Docs
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="https://tailwindcss.com/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              Tailwind Docs
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App