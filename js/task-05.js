const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    if (inputRef.value === '') {
        spanRef.textContent = "Anonymous";
        return;
} spanRef.textContent = inputRef.value;
})
