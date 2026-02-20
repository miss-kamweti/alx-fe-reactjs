import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
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
          <Link to="/" className="nav-brand">Router Demo</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/profile/user/123">Profile (ID:123)</Link>
            <Link to="/blog">Blog</Link>
            {!isAuthenticated ? (
              <Link to="/login">Login</Link>
            ) : (
              <button onClick={() => setIsAuthenticated(false)} className="logout-btn">
                Logout
              </button>
            )}
          </div>
        </nav>

        <div className={`auth-status ${isAuthenticated ? 'authenticated' : 'unauthenticated'}`}>
          Status: {isAuthenticated ? '✅ Authenticated' : '🔒 Not Authenticated'}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          
          {/* Protected Routes with nesting */}
          <Route path="/profile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="details" replace />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          
          {/* Dynamic route with userId parameter */}
          <Route path="/profile/user/:userId" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="details" replace />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Blog routes with dynamic post IDs */}
          <Route path="/blog" element={<Blog />}>
            <Route index element={
              <div className="blog-placeholder">
                <h3>Welcome to the Blog</h3>
                <p>Select a post from the sidebar to read</p>
              </div>
            } />
            <Route path=":id" element={<BlogPost />} />
          </Route>

          {/* 404 route */}
          <Route path="*" element={
            <div className="not-found">
              <h2>404 - Page Not Found</h2>
              <p>The page you're looking for doesn't exist.</p>
              <Link to="/" className="home-link">Go to Home</Link>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;