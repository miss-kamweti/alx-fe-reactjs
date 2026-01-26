import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>💡 Recommendations</h2>
        <p>Add some recipes to your favorites to get personalized recommendations!</p>
      </div>
    );
  }

  return (
    <div>
      <h2>💡 Recommended For You</h2>
      <div style={{ display: 'grid', gap: '15px' }}>
        {recommendations.map(recipe => (
          <div 
            key={recipe.id} 
            style={{ 
              border: '1px solid #4CAF50', 
              padding: '15px', 
              borderRadius: '5px',
              backgroundColor: '#e8f5e9'
            }}
          >
            <h3 style={{ margin: 0 }}>
              <Link to={`/recipe/${recipe.id}`} style={{ color: '#333', textDecoration: 'none' }}>
                {recipe.title}
              </Link>
            </h3>
            <p style={{ margin: '10px 0' }}>{recipe.description}</p>
            <div style={{ fontSize: '14px', color: '#666' }}>
              ⏱️ {recipe.prepTime} minutes
            </div>
            <div style={{ marginTop: '10px' }}>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '3px',
                  fontSize: '14px'
                }}
              >
                Try This Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;