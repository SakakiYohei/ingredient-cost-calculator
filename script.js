const ingredientFormTemplate = document.getElementById('ingredient-form-template').content;
const ingredientFormsContainer = document.getElementById('ingredient-forms-container');
const addIngredientFormButton = document.getElementById('add-ingredient-form');
let formCount = 0;

//update usage unit 
function updateUnitDisplay(formElement) {
  const unitDisplay = formElement.querySelector('.unit-display');
  const selectUnit = formElement.querySelector('.select-unit');
  unitDisplay.textContent = selectUnit.value;
}

//return calculated unit price
function calculateUnitPrice(formElement) {
  const priceInput = formElement.querySelector('.price');
  const amountInput = formElement.querySelector('.amount');
  const price = parseFloat(priceInput.value) || 0;
  const amount = parseFloat(amountInput.value) || 0;

  if (amount === 0) {
    return 0;
  } else {
    const unitPrice = price / amount;
    return unitPrice
  }
}

//update unit price
function updateUnitPrice(formElement){
  const unitPrice = calculateUnitPrice(formElement);
  const unitPriceDisplay = formElement.querySelector('.unit-price-display');
  unitPriceDisplay.textContent = `単価: ${unitPrice.toFixed(2)}円`;
}

//Return calculated ingredient cost
function calculateIngredientCost(formElement) {
  const usageInput = formElement.querySelector('.usage');
  const usage = parseFloat(usageInput.value) || 0;
  const unitPrice = calculateUnitPrice(formElement);
  const ingredientCost = unitPrice * usage;
  
  return ingredientCost;
}

//Update ingredient cost
function updateIngredientCost(formElement) {
  const ingredientCost = calculateIngredientCost(formElement);
  const ingredientCostDisplay = formElement.querySelector('.ingredient-cost');
  ingredientCostDisplay.textContent = `材料費: ${ingredientCost.toFixed(2)}円`;
}

function addNewForm() {
  const newForm = ingredientFormTemplate.cloneNode(true);
  const formElement = newForm.querySelector('.ingredient-form');

  const selectUnit = formElement.querySelector('.select-unit');
  const priceInput = formElement.querySelector('.price');
  const amountInput = formElement.querySelector('.amount');
  const usageInput = formElement.querySelector('.usage');

  const elementsToUpdate = [formElement,selectUnit,priceInput,amountInput,usageInput];

  //Add data-index attributes to form elements
  for (let i = 0 ; i < elementsToUpdate.length ; i++ ) {
    elementsToUpdate[i].dataset.index = formCount;
  }

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

  formCount++;
}

//Calculate total ingredient cost
function calculateTotalIngredientCost(){
  const ingredientForms = document.querySelectorAll('.ingredient-form');
  let totalCost =0 ;

  ingredientForms.forEach(form => {
    const ingredientCost = calculateIngredientCost(form);
    totalCost += ingredientCost;
  })
  return totalCost;
}

//Update total ingredient cost
function updateTotalIngredientCost(){
  const totalIngredientCostDisplay = document.getElementById('total-ingredient-cost-display');
  const totalCost = calculateTotalIngredientCost()
  totalIngredientCostDisplay.textContent = `合計: ${totalCost}円`
}

//Set the event listener for add new form botton
addIngredientFormButton.addEventListener('click',addNewForm);

//Set the initial form
addNewForm();

//Set the initial total cost
updateTotalIngredientCost();


