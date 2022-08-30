function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetRef = document.querySelector(".widget");
const spanRef = widgetRef.querySelector(".color");

widgetRef.addEventListener('click', () => { 
  const bgnColor = getRandomHexColor()
  document.body.style.backgroundColor = bgnColor;
  spanRef.textContent = bgnColor;
})