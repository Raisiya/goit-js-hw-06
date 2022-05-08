const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputLength);

function onInputLength(event) {
    if (String(event.currentTarget.value.length) === input.dataset.length) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid')
    }
}


