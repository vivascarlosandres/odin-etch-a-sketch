// Get the grid container element and new grid button
const gridContainer = document.getElementById('grid-container');
const newGridButton = document.getElementById('new-grid-button');
const numSquaresInput = document.getElementById('num-squares-input');

// Create the initial grid
createGrid(16);

// Add click event listener to the new grid button
newGridButton.addEventListener('click', () => {
  // Get the new number of squares per side from the user input
  const numSquares = numSquaresInput.valueAsNumber;

  // Remove the existing grid squares from the grid container
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Create the new grid with the specified number of squares per side
  createGrid(numSquares);

  // Set the grid container to display as a new grid
  gridContainer.style.gridTemplateColumns = `repeat(${numSquares}, 50px)`;
  gridContainer.style.gridTemplateRows = `repeat(${numSquares}, 50px)`;
});

// Function to create the grid with the specified number of squares per side
function createGrid(numSquares) {
  // Create the grid squares and append them to the grid container
  for (let i = 0; i < numSquares * numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    gridContainer.appendChild(square);
  }

  // Add mouseover event listener to the grid squares
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    let passes = 0;
    square.addEventListener('mouseover', () => {
      passes++;
      if (passes <= 10) {
        // Set a random RGB color for the square
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const alpha = 1;
        square.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  
        // Add 10% blackness to the square
        const currentColor = getComputedStyle(square).backgroundColor;
        const currentRGB = currentColor.slice(4, -1).split(',').map(Number);
        const blackness = passes * 0.1;
        const newRGB = currentRGB.map((color, index) => index === 3 ? 1 - blackness : color * (1 - blackness));
        square.style.backgroundColor = `rgba(${newRGB.join(',')})`;
      } else {
        // Make the square completely black
        square.style.backgroundColor = 'black';
      }
    });
  });
}
