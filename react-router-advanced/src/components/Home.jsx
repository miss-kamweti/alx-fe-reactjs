import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Advanced Routing Demo</h1>
      <p>This application demonstrates various routing techniques:</p>
      <ul>
        <li>Nested Routes</li>
        <li>Dynamic Routes</li>
        <li>Protected Routes</li>
      </ul>
      <div className="links">
        <Link to="/profile" className="button">Go to Profile</Link>
        <Link to="/blog" className="button">View Blog</Link>
      </div>
    </div>
  );
};

export default Home;