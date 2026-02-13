import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    ingredients: '',
    steps: '',  // Changed from 'instructions' to 'steps' as required
    image: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'title':
        return !value.trim() ? 'Title is required' : '';
      case 'summary':
        return !value.trim() ? 'Summary is required' : '';
      case 'ingredients':
        if (!value.trim()) return 'Ingredients are required';
        const ingredientsList = value.split('\n').filter(i => i.trim());
        return ingredientsList.length < 2 ? 'Please add at least 2 ingredients (one per line)' : '';
      case 'steps':  // Updated to 'steps'
        if (!value.trim()) return 'Steps are required';
        const stepsList = value.split('\n').filter(i => i.trim());
        return stepsList.length < 2 ? 'Please add at least 2 steps (one per line)' : '';
      case 'image':
        return !value.trim() ? 'Image URL is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;  // Using target.value as required
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;  // Using target.value as required
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Recipe submitted:', formData);
      alert('Recipe submitted successfully!');
      navigate('/');
    }
  };

  const hasError = (fieldName) => touched[fieldName] && errors[fieldName];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 sm:mb-6 text-sm sm:text-base"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Add New Recipe
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Title Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Recipe Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                  hasError('title') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., Spaghetti Carbonara"
              />
              {hasError('title') && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Summary Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Summary <span className="text-red-500">*</span>
              </label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="3"
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                  hasError('summary') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Brief description of your recipe..."
              />
              {hasError('summary') && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.summary}</p>
              )}
            </div>

            {/* Ingredients Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Ingredients <span className="text-red-500">*</span>
                <span className="text-xs text-gray-500 ml-2">(one per line, at least 2)</span>
              </label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="5"
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                  hasError('ingredients') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="200g spaghetti&#10;100g pancetta&#10;2 large eggs"
              />
              {hasError('ingredients') && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Steps Field - Updated from 'instructions' to 'steps' */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Preparation Steps <span className="text-red-500">*</span>
                <span className="text-xs text-gray-500 ml-2">(one per line, at least 2)</span>
              </label>
              <textarea
                name="steps"  // Changed to 'steps'
                value={formData.steps}  // Changed to 'steps'
                onChange={handleChange}
                onBlur={handleBlur}
                rows="5"
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                  hasError('steps') ? 'border-red-500' : 'border-gray-300'  // Changed to 'steps'
                }`}
                placeholder="Boil pasta in salted water&#10;Fry pancetta until crispy&#10;Mix eggs and cheese"
              />
              {hasError('steps') && (  // Changed to 'steps'
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.steps}</p>
              )}
            </div>

            {/* Image URL Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Image URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${
                  hasError('image') ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="https://example.com/image.jpg"
              />
              {hasError('image') && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.image}</p>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6">
              <Link
                to="/"
                className="w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-center text-sm sm:text-base"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
              >
                Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;