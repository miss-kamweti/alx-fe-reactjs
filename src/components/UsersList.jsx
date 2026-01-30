import React from 'react';
import PropTypes from 'prop-types';

const UsersList = ({ users, error, loading, onLoadMore, hasMore, searchPerformed }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600">Searching...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-600 text-2xl mb-2">⚠️</div>
        <h3 className="text-red-800 font-semibold mb-2">Search Failed</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!searchPerformed) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
        <div className="text-gray-400 text-4xl mb-4">🔍</div>
        <h3 className="text-gray-600 text-lg">Enter search criteria to find GitHub users</h3>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
        <div className="text-yellow-600 text-2xl mb-2">😕</div>
        <h3 className="text-yellow-800 font-semibold mb-2">No users found</h3>
        <p className="text-yellow-600">Try different search criteria</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
            <div className="p-5">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{user.name || user.login}</h3>
                  <p className="text-gray-500 text-sm">@{user.login}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                {user.location && (
                  <div className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>{user.location}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <span className="mr-2">📂</span>
                  <span>{user.public_repos} repos</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">👥</span>
                  <span>{user.followers} followers</span>
                </div>
              </div>
              
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded hover:bg-gray-200 transition duration-200"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={onLoadMore}
            className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func,
  hasMore: PropTypes.bool,
  searchPerformed: PropTypes.bool.isRequired,
};

export default UsersList;