import React, { useState, useEffect } from 'react';
import useRecipeStore from '../../store/recipeStore';
import './SearchBar.css';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const [inputValue, setInputValue] = useState('');
  
  // Debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [inputValue, setSearchTerm]);

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search recipes by title, description, or ingredients..."
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar;