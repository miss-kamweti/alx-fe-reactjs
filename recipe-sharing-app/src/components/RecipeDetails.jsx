import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  
  const toggleFavorite = useRecipeStore(state => state.toggleFavorite);

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Recipe not found!</h2>
        <button onClick={() => navigate('/')}>Back to Recipes</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate('/')}
        style={{ marginBottom: '20px', padding: '5px 10px' }}
      >
        ← Back to Recipes
      </button>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{recipe.title}</h1>
        <button
          onClick={() => toggleFavorite(recipe.id)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '30px',
            cursor: 'pointer',
            color: recipe.isFavorite ? '#ff6b6b' : '#ccc'
          }}
          title={recipe.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {recipe.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <p style={{ fontSize: '18px', margin: '20px 0' }}>{recipe.description}</p>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index} style={{ margin: '5px 0', fontSize: '16px' }}>{ingredient}</li>
          ))}
        </ul>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Preparation Time</h3>
        <p style={{ fontSize: '16px' }}>{recipe.prepTime} minutes</p>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Status</h3>
        <p style={{ fontSize: '16px' }}>
          {recipe.isFavorite ? '⭐ Added to favorites' : 'Not in favorites'}
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
        <Link 
          to={`/edit/${recipe.id}`}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Edit Recipe
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;