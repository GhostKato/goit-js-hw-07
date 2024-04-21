function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

function randomBackgroundColor() {

  document.body.style.backgroundColor = getRandomHexColor();  
  span.textContent = getRandomHexColor();
}

button.addEventListener("click", randomBackgroundColor);