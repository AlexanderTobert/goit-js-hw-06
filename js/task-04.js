const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const counterRefs = document.querySelector('#value');

decBtn.addEventListener('click', () => {
    counterValue -= 1;
    counterRefs.textContent = counterValue;
})

incBtn.addEventListener('click', () => {
    counterValue += 1;
    counterRefs.textContent = counterValue;
})