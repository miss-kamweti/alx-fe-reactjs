import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';

const githubService = {
  fetchUserData: async (username) => {
    try {
      const response = await axios.get(`${API_URL}/users/${username}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error('User not found');
      }
      throw new Error('Failed to fetch user data');
    }
  },

  searchUsers: async (query, location, minRepos, page = 1) => {
    try {
      let searchQuery = `${query}+in:login,in:name`;
      
      if (location) {
        searchQuery += `+location:${location}`;
      }
      
      if (minRepos) {
        searchQuery += `+repos:>${minRepos}`;
      }

      const response = await axios.get(`${API_URL}/search/users`, {
        params: {
          q: searchQuery,
          per_page: 30,
          page: page
        }
      });

      // Get detailed info for each user
      const users = await Promise.all(
        response.data.items.map(async (user) => {
          const userDetails = await axios.get(`${API_URL}/users/${user.login}`);
          return userDetails.data;
        })
      );

      return {
        users: users,
        total_count: response.data.total_count,
        page: page
      };
    } catch (error) {
      console.error('Search error:', error);
      throw new Error('Failed to search users');
    }
  }
};

export default githubService;