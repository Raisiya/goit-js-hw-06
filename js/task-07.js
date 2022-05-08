const inputControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputControl.addEventListener('input', onInputChange);

function onInputChange() {
    const size = inputControl.value;
    spanText.style.fontSize = `${size}px`;
};
