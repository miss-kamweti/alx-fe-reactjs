import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // Initial recipes
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish', ingredients: ['spaghetti', 'eggs', 'pancetta', 'parmesan'], prepTime: 30, isFavorite: false },
    { id: 2, title: 'Chicken Curry', description: 'Spicy Indian chicken curry', ingredients: ['chicken', 'curry powder', 'coconut milk'], prepTime: 45, isFavorite: false },
    { id: 3, title: 'Caesar Salad', description: 'Fresh salad with Caesar dressing', ingredients: ['romaine', 'croutons', 'parmesan', 'dressing'], prepTime: 15, isFavorite: false },
  ],
  
  // Search and filter states
  searchTerm: '',
  filteredRecipes: [],
  
  // Favorites and recommendations
  favorites: [],
  recommendations: [],
  
  // Recipe CRUD actions
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now(), isFavorite: false }] 
  })),
  
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  setRecipes: (recipes) => set({ recipes }),
  
  // Search and filter actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    const state = get();
    state.filterRecipes();
  },
  
  filterRecipes: () => set((state) => {
    if (!state.searchTerm.trim()) {
      return { filteredRecipes: state.recipes };
    }
    
    const term = state.searchTerm.toLowerCase();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(term)
      )
    );
    
    return { filteredRecipes: filtered };
  }),
  
  // Favorites actions
  toggleFavorite: (recipeId) => set((state) => {
    const isFavorite = state.favorites.includes(recipeId);
    const updatedFavorites = isFavorite
      ? state.favorites.filter(id => id !== recipeId)
      : [...state.favorites, recipeId];
    
    // Update recipe's favorite status
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === recipeId ? { ...recipe, isFavorite: !isFavorite } : recipe
    );
    
    // Generate new recommendations when favorites change
    const recommendations = updatedRecipes.filter(recipe =>
      !updatedFavorites.includes(recipe.id) && 
      Math.random() > 0.7
    ).slice(0, 3);
    
    return {
      favorites: updatedFavorites,
      recipes: updatedRecipes,
      recommendations
    };
  }),
  
  // Initialize recommendations
  generateRecommendations: () => set((state) => {
    const recommendations = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id))
      .filter(() => Math.random() > 0.7)
      .slice(0, 3);
    
    return { recommendations };
  }),
}));

export default useRecipeStore;