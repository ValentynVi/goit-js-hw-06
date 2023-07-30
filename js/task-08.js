const form = document.querySelector('.login-form');
console.dir(form);

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields!');
    } else {
        const object = { email: email.value, password: password.value };
        console.log(object);
    }

    form.reset();
}