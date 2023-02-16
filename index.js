const grid = document.querySelector('.grid');
const gridSize = document.getElementById('grid-size');
let squares = document.querySelectorAll('.square');

// Initialize a 16 x 16 grid

function initializeGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    updateSquareListeners();
}

// Add EventListener to every square in the grid

function updateSquareListeners() {
    squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', colorSquare);
    }
}

// Get number input from user

function inputNum() {
    let input = prompt('Please enter an integer from 1 to 100 to specify the number of squares on each side of the new grid:');
    if (input != null) {
        input = parseInt(input);
        if (isNaN(input) || input < 1 || input > 100) {
            alert('Please enter an integer from 1 to 100.');
        } else updateGrid(input); 
    }
}

// Update the grid size based on the user input

function updateGrid(num) {
    let newGridSize = num * num;
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = 'repeat('+num+', 1fr)';
    grid.style.gridTemplateRows = 'repeat('+num+', 1fr)';
    for (let i = 0; i < newGridSize; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
    updateSquareListeners();
}

function colorSquare(e) {
    e.target.style.backgroundColor = 'black';
}

initializeGrid();

