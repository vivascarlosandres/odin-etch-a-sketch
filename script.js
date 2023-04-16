// Get the grid container element
const gridContainer = document.getElementById('grid-container');

// Create 256 grid squares and append them to the grid container
for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('grid-square');
  gridContainer.appendChild(square);
}

// Set the grid container to display as a 16x16 grid
gridContainer.style.gridTemplateColumns = 'repeat(16, 50px)';
gridContainer.style.gridTemplateRows = 'repeat(16, 50px)';