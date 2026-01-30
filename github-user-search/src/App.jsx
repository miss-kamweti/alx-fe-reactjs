import React, { useState } from 'react';
import Search from './components/Search';

function App() {
  const [isAdvanced, setIsAdvanced] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">GitHub User Search</h1>
              <p className="text-gray-600 mt-2">Find GitHub users and explore their profiles</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => setIsAdvanced(!isAdvanced)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
              >
                {isAdvanced ? 'Basic Search' : 'Advanced Search'}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                {isAdvanced ? 'Advanced Search Mode' : 'Basic Search Mode'}
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                {isAdvanced 
                  ? 'Search GitHub users by username, location, and minimum repository count.'
                  : 'Search GitHub users by username only.'}
              </div>
            </div>
          </div>
        </div>

        <Search isAdvanced={isAdvanced} />

        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>Built with React and GitHub API • Not affiliated with GitHub</p>
          <p className="mt-1">Search rate limited by GitHub API (60 requests per hour)</p>
        </footer>
      </main>
    </div>
  );
}

export default App;