// const list = document.getElementById('categories');

const list = document.querySelector('#categories');
const items = [...list.children];
let totalCategories = items.length;
console.log(`Number of categories: ${totalCategories}`);

function getElements(arr) {
    arr.forEach(item => {
        const categoryTitle = item.querySelector('h2').textContent;
        const categoryElements = item.querySelectorAll('ul li');
        const totalElements = categoryElements.length;
        console.log(`Category: ${categoryTitle}`);
        console.log(`Elements: ${totalElements}`);

    })
}
getElements(items);



