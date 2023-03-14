//variable with reference to the grid container
const gridContainer = document.getElementById('grid-container');

//create buttons
const resetButton = document.querySelector('#reset-grid');
const eraserButton = document.querySelector('#eraser-mode');
const drawButton = document.querySelector("#draw-mode");
const sizeOption = document.querySelector("#size")

//default grid size and color
let size = 64;
let color = "black";


//assign button functions
resetButton.onclick = () => createGrid();
eraserButton.onclick = () => setColor("white");
drawButton.onclick = () => setColor("black");


//this function lays out and fills the grid with divs
function createGrid() {
  const selectedSize = [].filter
          .call(sizeOption, option => option.selected)
          .map(option => option.value);
  size = selectedSize;
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
//initialize the grid on loading
createGrid(size);

function setColor(newColor) {
  color = newColor
}