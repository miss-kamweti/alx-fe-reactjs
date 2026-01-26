import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite);
  
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List {searchTerm && `(Search: "${searchTerm}")`}</h2>
      
      {displayRecipes.length === 0 ? (
        <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
          {searchTerm ? 'No recipes match your search.' : 'No recipes yet. Add your first recipe!'}
        </div>
      ) : (
        displayRecipes.map(recipe => (
          <div 
            key={recipe.id} 
            style={{ 
              border: '1px solid #ddd', 
              padding: '15px', 
              margin: '10px 0',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
              position: 'relative'
            }}
          >
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
              <button
                onClick={() => toggleFavorite(recipe.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: recipe.isFavorite ? '#ff6b6b' : '#ccc'
                }}
                title={recipe.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                {recipe.isFavorite ? '❤️' : '🤍'}
              </button>
            </div>
            
            <h3>
              <Link to={`/recipe/${recipe.id}`} style={{ color: '#333', textDecoration: 'none' }}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
            
            <div style={{ margin: '10px 0' }}>
              <strong>Ingredients:</strong>
              <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div style={{ margin: '10px 0' }}>
              <strong>Prep Time:</strong> {recipe.prepTime} minutes
            </div>
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <Link 
                to={`/edit/${recipe.id}`}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '3px'
                }}
              >
                Edit
              </Link>
              <DeleteRecipeButton recipeId={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;