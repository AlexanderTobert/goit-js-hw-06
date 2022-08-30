const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const liElem = document.createElement("li");
  liElem.textContent = ingredient;
  // console.log(liElem);
  liElem.classList.add("item");
  ulRef.appendChild(liElem);
}