const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
    const minLength = parseInt(inputRef.dataset.length);
    // console.log(minLength);
    // console.log(inputRef.value.length);

    if (inputRef.value.length === minLength) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
    } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
}
})
