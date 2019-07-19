import store from './store';
import loadUI from './ui';
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients';

loadUI();
store.subscribe(()=> console.log("Store Changed"));
store.subscribe(() => console.log(store.getState()));

//setInterval(()=> store.dispatch({ type: 'ACTION' }), 500);
store.dispatch({ type: 'ACTION' });
store.dispatch(addRecipe('Pancakes'));
store.dispatch(addIngredient('Pancakes', 'Egg', 3 ));
