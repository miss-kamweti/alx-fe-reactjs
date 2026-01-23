import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../../store/recipeStore';
import './EditRecipeForm.css';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id);
  
  const recipe = useRecipeStore((state) =>
    state.recipes.find(r => r.id === recipeId)
  );
  
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    prepTime: 30,
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description,
        ingredients: recipe.ingredients?.join(', ') || '',
        prepTime: recipe.prepTime || 30,
      });
    }
  }, [recipe]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (formData.prepTime <= 0) newErrors.prepTime = 'Preparation time must be positive';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm() || !recipe) return;
    
    const updatedRecipe = {
      ...recipe,
      ...formData,
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
    };
    
    updateRecipe(updatedRecipe);
    navigate(`/recipe/${recipeId}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'prepTime' ? parseInt(value) || 0 : value,
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (!recipe) {
    return (
      <div className="edit-recipe-form">
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')} className="btn btn-back">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="edit-recipe-form">
      <h2>Edit Recipe: {recipe.title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="ingredients">Ingredients *</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            className={errors.ingredients ? 'error' : ''}
          />
          <small>Separate ingredients with commas</small>
          {errors.ingredients && <span className="error-message">{errors.ingredients}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="prepTime">Preparation Time (minutes) *</label>
          <input
            type="number"
            id="prepTime"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            min="1"
            className={errors.prepTime ? 'error' : ''}
          />
          {errors.prepTime && <span className="error-message">{errors.prepTime}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-save">
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => navigate(`/recipe/${recipeId}`)}
            className="btn btn-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;