const input = document.querySelector('input[data-length="6"]');
const style = document.querySelector('style');
console.dir(style);
console.dir(input.dataset.length);

input.addEventListener('blur', handleBlur);

function handleBlur(evt) {

    if (evt.currentTarget.value.length === Number(input.dataset.length)) {
        evt.currentTarget.classList.add('valid');
    } else {
        evt.currentTarget.classList.remove('valid');

        evt.currentTarget.classList.add('invalid');

    }

}