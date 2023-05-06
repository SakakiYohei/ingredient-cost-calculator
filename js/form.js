//form.js

import {updateUnitDisplay,updateIngredientCost,updateUnitPrice,updateTotalIngredientCost} from "./update.js";

const ingredientFormTemplate = document.getElementById('ingredient-form-template').content;
const ingredientFormsContainer = document.getElementById('ingredient-forms-container');

//Add new form and set event listener
export function addNewForm() {
    const newForm = ingredientFormTemplate.cloneNode(true);
    const formElement = newForm.querySelector('.ingredient-form');
    const selectUnit = formElement.querySelector('.select-unit');
    const priceInput = formElement.querySelector('.price');
    const amountInput = formElement.querySelector('.amount');
    const usageInput = formElement.querySelector('.usage');
  
    selectUnit.addEventListener('change',()=>updateUnitDisplay(formElement));
  
    priceInput.addEventListener('input',()=>{
      updateUnitPrice(formElement);
      updateIngredientCost(formElement);
      updateTotalIngredientCost();
    });
  
    amountInput.addEventListener('input',()=>{
      updateUnitPrice(formElement);
      updateIngredientCost(formElement);
      updateTotalIngredientCost();
    });
  
    usageInput.addEventListener('input',()=>{
      updateIngredientCost(formElement);
      updateTotalIngredientCost();
    });
  
    //Set the initial unit value, unit price, and ingredient cost for the new form
    updateUnitDisplay(formElement);
    updateUnitPrice(formElement);
    updateIngredientCost(formElement);
  
    ingredientFormsContainer.appendChild(newForm);
  
  }