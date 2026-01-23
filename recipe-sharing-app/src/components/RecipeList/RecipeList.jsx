import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../../store/recipeStore';
import './RecipeList.css';

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, filterRecipes } = useRecipeStore();
  
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      {displayRecipes.length === 0 ? (
        <p>No recipes found. Add a new recipe!</p>
      ) : (
        <div className="recipes-grid">
          {displayRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="recipe-meta">
                <span>⏱️ {recipe.prepTime} min</span>
                <span>⭐ {recipe.isFavorite ? 'Favorited' : 'Not favorited'}</span>
              </div>
              <div className="recipe-actions">
                <Link to={`/recipe/${recipe.id}`} className="btn btn-view">
                  View Details
                </Link>
                <Link to={`/edit/${recipe.id}`} className="btn btn-edit">
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;