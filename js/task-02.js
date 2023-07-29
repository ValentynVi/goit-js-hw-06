const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
function createElements(arr) {
  const markup = arr.map(item => {
    // console.log(item);
    const li = document.createElement('li');
    li.textContent = `${item}`
    li.classList.add('item')
    console.log(li);
    return li;
  })
  list.append(...markup);
  console.log(list);

}

createElements(ingredients)