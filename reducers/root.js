import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';

const rootReducer = combineReducers({
			recipes: recipesReducer,
			ingredientes: ingredientsReducer});
};

export default rootReducer;
