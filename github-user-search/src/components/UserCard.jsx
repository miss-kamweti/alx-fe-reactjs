import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user, error, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-600 text-2xl mb-2">⚠️</div>
        <h3 className="text-red-800 font-semibold mb-2">Looks like we can't find the user</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full border-4 border-gray-100"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{user.name || user.login}</h2>
          <p className="text-gray-600">@{user.login}</p>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">📍</span>
          <span className="text-gray-700">{user.location || 'No location specified'}</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">📂</span>
          <span className="text-gray-700">
            {user.public_repos} public repositories
          </span>
        </div>
        
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">👥</span>
          <span className="text-gray-700">
            {user.followers} followers • {user.following} following
          </span>
        </div>
      </div>
      
      <div className="mt-6">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          View GitHub Profile
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default UserCard;