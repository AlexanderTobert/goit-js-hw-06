
const ulRefs = document.querySelectorAll('.item');
console.log('Number of categories:', ulRefs.length);

// const liRefs = document.querySelector('.item ul li');
// console.log(ulRefs);

for (let elem of ulRefs) {
    // console.log(elem);
    // const h2Refs = elem.querySelector('.item > h2');
    // const liRefs = elem.querySelectorAll('.item > ul > li');

    const h2Refs_El = elem.firstElementChild;
    const liRefs_El = elem.lastElementChild;
    // console.log(h2Refs);
    // h2Refs.textContent = "12345678"
    // console.log('Category:', h2Refs.textContent);
    // console.log('Elements:', liRefs.length);

    console.log('Category:', h2Refs_El.textContent);
    console.log('Elements:', liRefs_El.childElementCount);
  }

// console.log(liRefs);
