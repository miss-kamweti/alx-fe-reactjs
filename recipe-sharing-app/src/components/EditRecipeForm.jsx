import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );
  
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    prepTime: 30
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients ? recipe.ingredients.join(', ') : '',
        prepTime: recipe.prepTime || 30
      });
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe) {
      const updatedRecipe = {
        ...recipe,
        ...formData,
        ingredients: formData.ingredients.split(',').map(item => item.trim())
      };
      updateRecipe(updatedRecipe);
      navigate(`/recipe/${recipeId}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'prepTime' ? parseInt(value) || 0 : value
    }));
  };

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>Edit Recipe: {recipe.title}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', height: '100px' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Ingredients (comma separated):
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', height: '80px' }}
            placeholder="flour, sugar, eggs, milk"
            required
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Preparation Time (minutes):
          </label>
          <input
            type="number"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
            min="1"
            required
          />
        </div>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Save Changes
          </button>
          <button 
            type="button" 
            onClick={() => navigate(`/recipe/${recipeId}`)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;