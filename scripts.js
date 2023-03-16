//variable with reference to the grid container
const gridContainer = document.getElementById('grid-container');

//create buttons
const resetButton = document.querySelector('#reset-grid');
const drawButton = document.querySelector("#draw-mode");
const rainbowButton = document.querySelector('#rainbow-mode');
const eraserButton = document.querySelector('#eraser-mode');
const sizeOption = document.querySelector("#size")

//default grid size and color
let size = 64;
let colorMode = "black";


//assign button functions
resetButton.onclick = () => createGrid();
eraserButton.onclick = () => colorMode = "erasor";
drawButton.onclick = () => colorMode = "black";
rainbowButton.onclick = () => colorMode = "rainbow";


//this function lays out and fills the grid with divs
function createGrid() {
  const selectedSize = [].filter
          .call(sizeOption, option => option.selected)
          .map(option => option.value);
  size = selectedSize;
  deleteGrid();
  gridLayout(size, size);
  fillGrid(size);
  selectColor("black");
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
    newDiv.onmouseover = () => {newDiv.style.backgroundColor = selectColor(colorMode)};
    };
}
//removes all content within grid-container
function deleteGrid() {
  gridContainer.innerHTML = '';
}
//initialize the grid on loading
createGrid(size);

function selectColor(mode) {

  switch (mode){
    case "black":
      return "black";
    case "erasor":
      return "white";
    case "rainbow": 
      return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
    default:
      return "black";
  }

}