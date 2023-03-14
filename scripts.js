//variable with reference to the grid container
const gridContainer = document.getElementById('grid-container');

//create buttons
const resetButton = document.querySelector('#reset-grid');
const eraserButton = document.querySelector('#erasorButton');

//default grid size and color
let size = 50;
let color = "black";


//gives the button an onclick function to initiate the grid creation
resetButton.onclick = () => createGrid(size);

//this function lays out and fills the grid with divs
function createGrid(size) {
  deleteGrid();
  gridLayout(size, size);
  fillGrid(size);
  setColor("black");
}

//this function will apply a grid layout
function gridLayout(height, width) {
  gridContainer.style.gridTemplateColumns = `repeat(${width}, auto)`
  gridContainer.style.gridTemplateRows = `repeat(${height}, auto)`
}

//this function will fill a grid with divs
const fillGrid = (size) => {
  const numOfBlocks = size*size;
  for (let i=0; i<numOfBlocks; i++){
    let newDiv = document.createElement("div");
    newDiv.id = `card ${i}`;
    gridContainer.appendChild(newDiv);
    newDiv.onmouseover = () => {newDiv.style.backgroundColor = color};
    };
}

//removes all content within grid-container
function deleteGrid() {
  gridContainer.innerHTML = '';
}

function setColor(newColor) {
  color = newColor
}