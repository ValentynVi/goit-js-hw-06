
const buttons = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
}

const counter = document.querySelector('#value');
let counterValue = 0;

buttons.decrement.addEventListener("click", handlerDecrement);
buttons.increment.addEventListener("click", handlerIncrement);

function handlerIncrement() {
    counterValue += 1;
    counter.textContent = counterValue;
}

function handlerDecrement() {
    counterValue -= 1;
    counter.textContent = counterValue;

}


