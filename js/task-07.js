const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

// console.dir(spanRef);

// spanRef.style.fontSize = inputRef.value + "px";
// inputRef.addEventListener('input', () => {
//     // console.log(inputRef.value);
//     spanRef.style.fontSize = inputRef.value + "px";
// })


const ref = function () {
    spanRef.style.fontSize = inputRef.value + "px";
}
ref();

inputRef.addEventListener('input', () => { 
    ref();
})