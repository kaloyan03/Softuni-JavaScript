import * as requester from '../api/requester.js';
import * as url from '../api/urls.js';

export const getAllRecipies = () => requester.get(url.loadAllRecipiesUrl); 
export const getRecipe = (recipeId) => requester.get(url.loadRecipeUrl(recipeId)); 