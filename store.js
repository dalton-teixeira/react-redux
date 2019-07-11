import { createStore } from 'redux';
import rootReducer from './reducers/root';

const initialState = {
	recipes: [{
		name: 'omelette',
	}],
	ingredientes: [{
		recipe: 'omelette',
		name: 'Egg',
		quantity: 2
	}]
}

const store = createStore(rootReducer, initialState);

window.store = store;
export default store;
