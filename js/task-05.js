const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


// 1 метод

// inputRef.addEventListener('input', () => {
//     if (inputRef.value === '') {
//         spanRef.textContent = "Anonymous";
//         return;
// } spanRef.textContent = inputRef.value;
// })

//2 метод
// inputRef.addEventListener('input', () => {
//     inputRef.value === '' ? spanRef.textContent = "Anonymous" : spanRef.textContent = inputRef.value;
// })

//3 метод
inputRef.addEventListener('input', () => {
    console.log(inputRef.value)
    spanRef.textContent = inputRef.value || "Anonymous";
})