//update.js

import {calculateUnitPrice,calculateIngredientCost,calculateTotalIngredientCost} from './utils.js';

//update usage unit 
export function updateUnitDisplay(formElement) {
    const unitDisplay = formElement.querySelector('.unit-display');
    const selectUnit = formElement.querySelector('.select-unit');
    unitDisplay.textContent = selectUnit.value;
  }

//update unit price
export function updateUnitPrice(formElement){
    const unitPrice = calculateUnitPrice(formElement);
    const unitPriceDisplay = formElement.querySelector('.unit-price-display');
    unitPriceDisplay.textContent = `単価: ${unitPrice.toFixed(2)}円`;
  }

//Update ingredient cost
export function updateIngredientCost(formElement) {
    const ingredientCost = calculateIngredientCost(formElement);
    const ingredientCostDisplay = formElement.querySelector('.ingredient-cost');
    ingredientCostDisplay.textContent = `材料費: ${ingredientCost.toFixed(2)}円`;
  }

//Update total ingredient cost
export function updateTotalIngredientCost(){
    const totalIngredientCostDisplay = document.getElementById('total-ingredient-cost-display');
    const totalCost = calculateTotalIngredientCost();
    totalIngredientCostDisplay.textContent = `合計: ${totalCost.toFixed(2)}円`
  }

  