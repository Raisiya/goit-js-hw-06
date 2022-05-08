
const buttonChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  const changeColor = getRandomHexColor()

  document.body.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}