const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const ingredientRef = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");

ulRef.insertAdjacentHTML("afterbegin", ingredientRef);

// for (const ingredient of ingredients) {
//   const liElem = document.createElement("li");
//   liElem.textContent = ingredient;
//   // console.log(liElem);
//   liElem.classList.add("item");
//   ulRef.appendChild(liElem);
// }