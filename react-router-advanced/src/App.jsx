import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/profile/user/123">Profile (Dynamic)</Link>
          <Link to="/blog">Blog</Link>
          {isAuthenticated ? (
            <button onClick={() => setIsAuthenticated(false)} className="logout-btn">
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        <div className="auth-status">
          Status: {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          
          {/* Protected route with nested routes */}
          <Route path="/profile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } />
          
          {/* Dynamic route with userId parameter and nested routes */}
          <Route path="/profile/user/:userId" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } />
          
          {/* Blog routes with dynamic post IDs */}
          <Route path="/blog" element={<Blog />}>
            <Route index element={<div>Select a post from the sidebar</div>} />
            <Route path=":id" element={<BlogPost />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;