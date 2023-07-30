
const changeValue = document.querySelector('#font-size-control');
const changeSize = document.querySelector('#text');


changeValue.addEventListener('input', handleInput);

function handleInput(evt) {
    changeSize.style.fontSize = `${evt.currentTarget.value}px`;
}