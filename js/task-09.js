// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonChangeColor: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

const onChangeColor = () => {
  const changeColor = getRandomHexColor()
  document.body.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
}
refs.buttonChangeColor.addEventListener('click', onChangeColor);

