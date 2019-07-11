import store from './store';
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients';

store.subscribe(()=> console.log("Store Changed"));
store.subscribe(() => console.log(store.getState()));

//setInterval(()=> store.dispatch({ type: 'ACTION' }), 500);
store.dispatch({ type: 'ACTION' });
store.dispatch(addRecipe('Pancakes'));
store.dispatch(addIngredient('Pancakes', 'Egg', 3 ));
