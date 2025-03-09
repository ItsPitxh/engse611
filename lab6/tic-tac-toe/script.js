const X_IMAGE_URL = 'img/xmark-solid.svg';
const O_IMAGE_URL = 'img/o-solid.svg';

function assignSpace(space, owner) {
  const image = document.createElement('img');
  
  // image.src = owner === 'x' ? X_IMAGE_URL : O_IMAGE_URL;
  if (owner === 'x') 
    {
    image.src = X_IMAGE_URL;
    image.style.cssText = "filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(80deg) brightness(119%) contrast(119%);";

  }
  else 
  {
    image.src = O_IMAGE_URL;
    image.style.cssText = "filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(325deg) brightness(119%) contrast(119%);";
  }
  space.appendChild(image);

  const index = parseInt(space.dataset.index);
  takenBoxes[index] = owner;
  const indexToRemove = freeBoxes.indexOf(space);
  freeBoxes.splice(indexToRemove, 1);
  space.removeEventListener('click', changeToX);
}

function changeToX(event) {
  assignSpace(event.currentTarget, 'x');

  if (isGameOver()) {
    displayWinner();
  } else {
    computerChooseO();
  }
}

function computerChooseO() {
  const allBoxes  = document.querySelectorAll('#grid div');
  const index = Math.floor(Math.random() * freeBoxes.length);
  const freeSpace = freeBoxes[index];

  assignSpace(freeSpace, 'o');

  if (isGameOver()) {
    displayWinner();
  }
}

function isGameOver() {
  return freeBoxes.length === 0 || getWinner() !== null;
}

function displayWinner() {
  const winner = getWinner();

  const resultContainer = document.querySelector('#results');
  const header = document.createElement('h1');
  if (winner === 'x') {
    header.textContent = 'You win!';
  } else if (winner === 'o') {
    header.textContent = 'Computer wins';
  } else {
    header.textContent = 'Tie';
  }
  resultContainer.appendChild(header);

  // Remove remaining event listeners
  for (const box of freeBoxes) {
    box.removeEventListener('click', changeToX);
  }
}

function checkBoxes(one, two, three) {
  if (takenBoxes[one] !== undefined &&
      takenBoxes[one] === takenBoxes[two] &&
      takenBoxes[two] === takenBoxes[three]) {
    return takenBoxes[one];
  }
  return null;
}

// Returns 'x', 'o', or null for no winner yet.
function getWinner() {
  for (let col = 0; col < 3; col++) {
    const offset = col * 3;
    // Check rows and columns.
    let result = checkBoxes(offset, 1 + offset, 2 + offset) ||
        checkBoxes(col, 3 + col, 6 + col);
    if (result) {
      return result;
    }
  }
  
  // Check diagonals
  return checkBoxes(0, 4, 8) || checkBoxes(2, 4, 6);
}

const freeBoxes = [];
// Map of box number -> 'x' or 'o'
const takenBoxes = {};
const boxes = document.querySelectorAll('#grid div');
for (const box of boxes) {
  box.addEventListener('click', changeToX);
  freeBoxes.push(box);
}
