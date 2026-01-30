import React, { useState } from 'react';
import githubService from '../services/githubService';
import UsersList from './UsersList';
import PropTypes from 'prop-types';

const Search = ({ isAdvanced = false }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const handleAdvancedSearch = async (e, loadMorePage = false) => {
    if (e) e.preventDefault();
    const currentPage = loadMorePage ? page + 1 : 1;
    
    if (!username.trim() && !location.trim()) {
      setError('Please enter at least one search criteria (username or location)');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await githubService.searchUsers(
        username || '',
        location,
        minRepos,
        currentPage
      );

      if (loadMorePage) {
        setUsers(prev => [...prev, ...result.users]);
        setPage(currentPage);
      } else {
        setUsers(result.users);
        setPage(1);
        setSearchPerformed(true);
      }
      
      setTotalResults(result.total_count);
      setHasMore(result.users.length > 0 && result.users.length < result.total_count);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    handleAdvancedSearch(null, true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <form onSubmit={handleAdvancedSearch} className="mb-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className={!isAdvanced ? 'col-span-full' : ''}>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                {isAdvanced ? 'Username (optional)' : 'GitHub Username *'}
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                required={!isAdvanced}
              />
            </div>

            {isAdvanced && (
              <>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location (optional)
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-2">
                    Min Repos (optional)
                  </label>
                  <input
                    type="number"
                    id="minRepos"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    placeholder="Minimum repos"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                </div>
              </>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Searching...' : 'Search Users'}
          </button>

          {totalResults > 0 && (
            <div className="mt-4 text-center text-sm text-gray-600">
              Found {totalResults} users
            </div>
          )}
        </div>
      </form>

      <UsersList
        users={users}
        error={error}
        loading={loading}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
        searchPerformed={searchPerformed}
      />
    </div>
  );
};

Search.propTypes = {
  isAdvanced: PropTypes.bool,
};

export default Search;