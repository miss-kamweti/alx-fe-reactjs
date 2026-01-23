import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../../store/recipeStore';
import './RecommendationsList.css';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <h2>💡 Recommendations</h2>
        <p>No recommendations available. Try adding some recipes to your favorites!</p>
      </div>
    );
  }

  return (
    <div className="recommendations-list">
      <h2>💡 Recommended For You</h2>
      <div className="recommendations-grid">
        {recommendations.map((recipe) => (
          <div key={recipe.id} className="recommendation-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recommendation-meta">
              <span>⏱️ {recipe.prepTime} min</span>
              <span>⭐ {recipe.isFavorite ? 'Favorited' : 'Not favorited'}</span>
            </div>
            <Link to={`/recipe/${recipe.id}`} className="btn btn-view">
              Try This Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;