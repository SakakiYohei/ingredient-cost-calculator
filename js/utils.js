//utils.js

//return calculated unit price
export function calculateUnitPrice(formElement) {
    const priceInput = formElement.querySelector('.price');
    const amountInput = formElement.querySelector('.amount');
    const price = parseFloat(priceInput.value) || 0;
    const amount = parseFloat(amountInput.value) || 0;
  
    if (amount === 0) {
      return 0;
    } else {
      const unitPrice = price / amount;
      return unitPrice;
    }
  }

//Return calculated ingredient cost
export function calculateIngredientCost(formElement) {
    const usageInput = formElement.querySelector('.usage');
    const usage = parseFloat(usageInput.value) || 0;
    const unitPrice = calculateUnitPrice(formElement);
    const ingredientCost = unitPrice * usage;
    
    return ingredientCost;
  }

//Return calculated total ingredient cost
export function calculateTotalIngredientCost(){
    const ingredientForms = document.querySelectorAll('.ingredient-form');
    let totalCost =0 ;
  
    ingredientForms.forEach(form => {
      const ingredientCost = calculateIngredientCost(form);
      totalCost += ingredientCost;
    })
    return totalCost;
  }
