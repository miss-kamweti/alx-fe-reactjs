import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to React Router Advanced Demo</h1>
      <div className="home-links">
        <Link to="/profile" className="home-link">Go to Profile</Link>
        <Link to="/profile/user/123" className="home-link">Go to Profile (User 123)</Link>
        <Link to="/blog" className="home-link">Go to Blog</Link>
      </div>
    </div>
  );
};

export default Home;