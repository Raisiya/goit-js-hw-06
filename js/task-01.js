const categoriesItemsEl = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesItemsEl.length}`)

const nameCategory = document.querySelectorAll('.item');

nameCategory.forEach((el) => {
    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
});