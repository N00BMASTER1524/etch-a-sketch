// Function to create the grid
function createGrid(numSquares) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear the existing grid

    const squareSize = 960 / numSquares; // Size of each square
    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Hover effect: change background color on mouseover
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

// Initially create a 16x16 grid
createGrid(16);

// Event listener for the "Change Grid Size" button
document.getElementById('changeGridButton').addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter the number of squares per side (max 100):'));
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(newSize);
    }
});
