//variable with reference to the grid container
const gridContainer = document.getElementById('grid-container');
const gridButton = document.querySelector('#create-grid');
let size = 4;


gridButton.onclick = () => createGrid(size);


function createGrid(size) {
  gridLayout(size, size);
  fillGrid(size, "lavender");
}

const gridLayout = (height, width) => {
  gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${height}, 1fr)`
}

const fillGrid = (size, color) => {
  const numOfBlocks = size*size;
  for (let i=0; i<numOfBlocks; i++){
    let newDiv = document.createElement("div");
    newDiv.id = `card ${i}`;
    newDiv.innerText = `card ${i}`;
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "1px black solid";
    gridContainer.appendChild(newDiv);
    };
}