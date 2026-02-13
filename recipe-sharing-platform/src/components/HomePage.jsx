import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  // Add fallback image if recipe image fails to load
  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/600x400/e2e8f0/1e293b?text=Recipe';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Recipe Sharing Platform
        </h1>
        
        {/* Fixed grid with md breakpoint */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link 
              to={`/recipe/${recipe.id}`} 
              key={recipe.id}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                  onError={handleImageError}
                />
                <div className="p-6 flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600">
                    {recipe.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;