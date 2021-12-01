const baseUrl = 'http://localhost:3030'; 

export const loadAllRecipiesUrl = `${baseUrl}/jsonstore/cookbook/recipes`;
export const loadRecipeUrl = (recipeId) => `${baseUrl}/jsonstore/cookbook/details/${recipeId}`;