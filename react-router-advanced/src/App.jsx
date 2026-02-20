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
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/profile/user/123">Profile with ID</Link>
          <Link to="/blog">Blog</Link>
          {!isAuthenticated ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={() => setIsAuthenticated(false)} className="logout-btn">
              Logout
            </button>
          )}
        </nav>

        <div className="auth-status">
          Status: {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          
          {/* Dynamic Routes */}
          <Route path="/profile" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="details" replace />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          
          <Route path="/profile/user/:userId" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="details" replace />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Blog Routes */}
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