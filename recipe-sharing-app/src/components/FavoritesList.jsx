import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite);
  
  const favoriteRecipes = recipes.filter(recipe => 
    favorites.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>⭐ My Favorites</h2>
        <p>No favorite recipes yet. Click the heart icon on any recipe to add it here!</p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>⭐ My Favorites ({favoriteRecipes.length})</h2>
      <div style={{ display: 'grid', gap: '15px' }}>
        {favoriteRecipes.map(recipe => (
          <div 
            key={recipe.id} 
            style={{ 
              border: '1px solid #ffd700', 
              padding: '15px', 
              borderRadius: '5px',
              backgroundColor: '#fff9e6'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0 }}>
                <Link to={`/recipe/${recipe.id}`} style={{ color: '#333', textDecoration: 'none' }}>
                  {recipe.title}
                </Link>
              </h3>
              <button
                onClick={() => toggleFavorite(recipe.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#ff6b6b'
                }}
                title="Remove from favorites"
              >
                ❤️
              </button>
            </div>
            <p style={{ margin: '10px 0' }}>{recipe.description}</p>
            <div style={{ fontSize: '14px', color: '#666' }}>
              ⏱️ {recipe.prepTime} minutes
            </div>
            <div style={{ marginTop: '10px' }}>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '3px',
                  fontSize: '14px'
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;