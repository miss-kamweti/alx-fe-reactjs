import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useRecipeStore from './store/recipeStore';

// Components
const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  
  const handleAddRecipe = () => {
    const newRecipe = {
      title: `New Recipe ${recipes.length + 1}`,
      description: `Description for recipe ${recipes.length + 1}`,
      ingredients: ['ingredient 1', 'ingredient 2'],
      prepTime: 30
    };
    addRecipe(newRecipe);
  };

  return (
    <div>
      <h2>Recipe List</h2>
      <button onClick={handleAddRecipe} style={{ marginBottom: '20px', padding: '10px 20px' }}>
        Add Sample Recipe
      </button>
      <div style={{ display: 'grid', gap: '20px' }}>
        {recipes.map(recipe => (
          <div key={recipe.id} style={{ 
            padding: '20px', 
            border: '1px solid #ddd', 
            borderRadius: '8px',
            backgroundColor: 'white'
          }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>
            <div>
              <strong>Ingredients:</strong>
              <ul>
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [ingredients, setIngredients] = React.useState('');
  const [prepTime, setPrepTime] = React.useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      description,
      ingredients: ingredients.split(',').map(i => i.trim()),
      prepTime: parseInt(prepTime)
    };
    addRecipe(newRecipe);
    alert('Recipe added!');
    setTitle('');
    setDescription('');
    setIngredients('');
    setPrepTime(30);
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', height: '100px' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Ingredients (comma separated):</label>
          <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px', height: '80px' }}
            placeholder="flour, sugar, eggs, milk"
            required
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label>Preparation Time (minutes):</label>
          <input 
            type="number" 
            value={prepTime} 
            onChange={(e) => setPrepTime(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            min="1"
            required
          />
        </div>
        
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
          Add Recipe
        </button>
      </form>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div style={{ 
        padding: '20px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        minHeight: '100vh'
      }}>
        <header style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '2rem',
          borderRadius: '15px',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🍳 Recipe Sharing App</h1>
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '25px' }}>
              Home
            </Link>
            <Link to="/add" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '25px' }}>
              Add Recipe
            </Link>
            <Link to="/favorites" style={{ color: 'white', textDecoration: 'none', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '25px' }}>
              Favorites
            </Link>
          </nav>
        </header>

        <main style={{ 
          background: 'white', 
          borderRadius: '15px', 
          padding: '2rem',
          boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
          minHeight: '400px'
        }}>
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

        <footer style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', color: '#666' }}>
          <p>© 2024 Recipe Sharing App | Built with React & Zustand</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;