//main.js

import {addNewForm} from './form.js';
import { updateTotalIngredientCost } from './update.js';

const addIngredientFormButton = document.getElementById('add-ingredient-form');

//Set the event listener for add new form botton
addIngredientFormButton.addEventListener('click',addNewForm);

//Set the initial form
addNewForm();

//Set the initial total cost
updateTotalIngredientCost();
