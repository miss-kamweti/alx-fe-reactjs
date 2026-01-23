import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../../store/recipeStore';
import './FavoritesList.css';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  
  const favoriteRecipes = recipes.filter(recipe => 
    favorites.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    return (
      <div className="favorites-list">
        <h2>⭐ My Favorites</h2>
        <p>No favorite recipes yet. Click the heart icon on any recipe to add it here!</p>
      </div>
    );
  }

  return (
    <div className="favorites-list">
      <h2>⭐ My Favorites ({favoriteRecipes.length})</h2>
      <div className="favorites-grid">
        {favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="favorite-card">
            <div className="favorite-header">
              <h3>{recipe.title}</h3>
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className="btn btn-remove-favorite"
                title="Remove from favorites"
              >
                ❌
              </button>
            </div>
            <p>{recipe.description}</p>
            <div className="favorite-meta">
              <span>⏱️ {recipe.prepTime} min</span>
            </div>
            <Link to={`/recipe/${recipe.id}`} className="btn btn-view">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;