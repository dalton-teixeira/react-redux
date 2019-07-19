import { ADD_INGREDIENT } from '../constants/actionTypes';
export const addIngredient = (recipe, name, quantity) => ({
  type: ADD_INGREDIENT,
  name: name,
  quantity: quantity,
  recipe: recipe
});
