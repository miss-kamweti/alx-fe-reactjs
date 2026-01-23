import React, { useState } from 'react';
import useRecipeStore from '../../store/recipeStore';
import './AddRecipeForm.css';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    prepTime: 30,
  });
  
  const [errors, setErrors] = useState({});

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
    
    if (!validateForm()) return;
    
    const newRecipe = {
      ...formData,
      ingredients: formData.ingredients.split(',').map(item => item.trim()),
    };
    
    addRecipe(newRecipe);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      prepTime: 30,
    });
    setErrors({});
    
    alert('Recipe added successfully!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'prepTime' ? parseInt(value) || 0 : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter recipe title"
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
            placeholder="Enter recipe description"
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
            placeholder="Enter ingredients separated by commas"
            rows="3"
            className={errors.ingredients ? 'error' : ''}
          />
          <small>Separate ingredients with commas (e.g., flour, sugar, eggs)</small>
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

        <button type="submit" className="btn btn-submit">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;