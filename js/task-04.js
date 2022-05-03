let counterValue = 0;
 
const btnValue = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

function handlBtnDecrementClick() {
    counterValue -= 1;
    return (btnValue.textContent = counterValue);
};

function handlBtnIncrementClick() {
    counterValue += 1;
    return (btnValue.textContent = counterValue);
};

btnDecrement.addEventListener('click', handlBtnDecrementClick);
btnIncrement.addEventListener('click', handlBtnIncrementClick); 