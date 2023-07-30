function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  btnChangeColor: document.querySelector('.change-color'),
  spanAddText: document.querySelector('.color'),
  body: document.querySelector('body'),
}
// const btnChangeColor = document.querySelector('.change-color');
// const spanAddText = document.querySelector('.color');
// const body = document.querySelector('body')

elements.btnChangeColor.addEventListener('click', handleClick);

function handleClick() {
  elements.spanAddText.textContent = getRandomHexColor();
  elements.body.style.backgroundColor = `${elements.spanAddText.textContent}`;

}




