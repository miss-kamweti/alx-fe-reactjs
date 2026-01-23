import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../../store/recipeStore';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore((state) =>
    state.recipes.find(r => r.id === recipeId)
  );
  
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')} className="btn btn-back">
          Back to Home
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite(recipeId);
  };

  return (
    <div className="recipe-details">
      <button onClick={() => navigate('/')} className="btn btn-back">
        ← Back to Recipes
      </button>
      
      <div className="recipe-header">
        <h1>{recipe.title}</h1>
        <div className="recipe-actions">
          <button
            onClick={handleToggleFavorite}
            className={`btn ${recipe.isFavorite ? 'btn-unfavorite' : 'btn-favorite'}`}
          >
            {recipe.isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </button>
          <button onClick={() => navigate(`/edit/${recipe.id}`)} className="btn btn-edit">
            Edit Recipe
          </button>
          <button onClick={handleDelete} className="btn btn-delete">
            Delete Recipe
          </button>
        </div>
      </div>
      
      <div className="recipe-meta">
        <span>⏱️ Preparation Time: {recipe.prepTime} minutes</span>
        <span>⭐ {recipe.isFavorite ? 'Added to Favorites' : 'Not in favorites'}</span>
      </div>
      
      <div className="recipe-section">
        <h3>Description</h3>
        <p>{recipe.description}</p>
      </div>
      
      <div className="recipe-section">
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;