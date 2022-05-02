const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(ingredient => {
  const itemList = document.createElement('li');
  itemList.textContent = ingredient;
  itemList.classList.add('item');
  return itemList;
});
const ingredientsLists = document.querySelector('#ingredients');

ingredientsLists.append(...ingredientsList);
