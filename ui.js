import $ from 'jquery';
import store from './store';

export default function loadUI(){
  $('#app').append(`
    <div class="recipes">
      <h2>Recipes:</h2>
      <ul></ul>
    </div>`);  
}
