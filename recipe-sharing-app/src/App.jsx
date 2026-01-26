import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#4CAF50' }}>🍳 Recipe Sharing App</h1>
          <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
            <Link 
              to="/" 
              style={{ 
                padding: '8px 15px', 
                background: '#4CAF50', 
                color: 'white', 
                textDecoration: 'none',
                borderRadius: '5px'
              }}
            >
              Home
            </Link>
            <Link 
              to="/add" 
              style={{ 
                padding: '8px 15px', 
                background: '#2196F3', 
                color: 'white', 
                textDecoration: 'none',
                borderRadius: '5px'
              }}
            >
              Add Recipe
            </Link>
          </nav>
          
          <SearchBar />
        </header>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          <main>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/add" element={<AddRecipeForm />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/edit/:id" element={<EditRecipeForm />} />
            </Routes>
          </main>
          
          <aside>
            <FavoritesList />
            <div style={{ marginTop: '30px' }}>
              <RecommendationsList />
            </div>
          </aside>
        </div>
        
        <footer style={{ 
          marginTop: '50px', 
          paddingTop: '20px', 
          borderTop: '1px solid #ddd',
          textAlign: 'center',
          color: '#666'
        }}>
          <p>© 2024 Recipe Sharing App | Built with React & Zustand</p>
          <p style={{ fontSize: '14px', marginTop: '5px' }}>
            Features: Search, Favorites, Recommendations, CRUD Operations
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;