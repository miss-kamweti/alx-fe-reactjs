
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm/AddRecipeForm.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>🍳 Recipe Sharing App</h1>
          <nav className="app-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add" className="nav-link">Add Recipe</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/favorites" element={
              <div>
                <h2>My Favorites</h2>
                <p>Favorite recipes will appear here.</p>
              </div>
            } />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>© 2024 Recipe Sharing App | Built with React & Zustand</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
