//variable with reference to the grid container
const gridContainer = document.getElementById('grid-container');
const gridButton = document.querySelector('#create-grid');
let size = 4;

//a button to initiate the grid creation
gridButton.onclick = () => createGrid(size);

//this function lays out and fills the grid with divs
function createGrid(size) {
  gridLayout(size, size);
  fillGrid(size, "lavender");
}

//this function will apply a grid layout
const gridLayout = (height, width) => {
  gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${height}, 1fr)`
}

//this function will fill a grid with divs
const fillGrid = (size, color) => {
  const numOfBlocks = size*size;
  for (let i=0; i<numOfBlocks; i++){
    let newDiv = document.createElement("div");
    newDiv.id = `card ${i}`;
    newDiv.innerText = `card ${i}`;
    newDiv.style.border = "1px black solid";
    gridContainer.appendChild(newDiv);
    };
}