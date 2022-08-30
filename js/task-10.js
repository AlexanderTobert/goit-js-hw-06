function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const amountRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes)
destroyBtnRef.addEventListener('click', destroyBoxes)

let amount = 0;

const handleClick = (event) => {
  // console.log(event.currentTarget.value);
  amount = parseInt(event.currentTarget.value);

  console.dir(amount);
  console.log(typeof (amount));
}

amountRef.addEventListener('input', handleClick)

const boxTable = [];

function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    const boxElement = `<div style="backgroun-color: ${getRandomHexColor()}; height: 30 + ${i * 10}; weight: 30 + ${i * 10} px"></div>`;
    boxTable.push(boxElement)
  }
}

function destroyBoxes(){
  boxTable.splice(boxTable.length);
}

boxesRef.innerHTML = boxTable.join('');