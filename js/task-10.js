function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const amountRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes)
destroyBtnRef.addEventListener('click', destroyBoxes)

// let amount = 0;


function createBoxes(amount) {
  amount = amountRef.value;
  const boxTable = [];
  for (let i = 0; i < amount; i++) {
    const boxElement = `<div style="background-color: ${getRandomHexColor()}; height: ${30 + i * 10 + 'px'}; width: ${30 + i * 10 + 'px'}"></div>`;

    console.log(boxElement);
    boxTable.push(boxElement);

    //document.createElement
  }
  console.log(boxTable);
  boxesRef.innerHTML = boxTable.join('');
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  amountRef.value = '';
}
