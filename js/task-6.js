function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector(`#boxes`);
const createBatton = document.querySelector(`[data-create]`);
const destroyButton = document.querySelector(`[data-destroy]`);
const input = document.querySelector('input[type="number"]');

function createBoxes() {  
  const amount = Number(input.value);
  
  boxContainer.innerHTML = '';

  if (amount >= 1 && amount <= 100) {

    for (let i = 0; i < amount; i++) {
    
      const box = document.createElement('div');
    
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
    
      box.style.backgroundColor = getRandomHexColor();
      boxContainer.appendChild(box);
    }
    input.value = '';
  }
  }

function destroyBoxes() {
  boxContainer.innerHTML = '';
  }

createBatton.addEventListener(`click`, createBoxes);
destroyButton.addEventListener(`click`, destroyBoxes);