const grid = document.querySelector('.grid');
const gridSize = document.getElementById('grid-size');

// Initialize a 16 x 16 grid

function initializeGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
}


function colorSquare(e) {
    e.target.style.backgroundColor = 'black';
}


initializeGrid();

// Add EventListener to every square in the grid

const squares = document.querySelectorAll('.square');
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', colorSquare);
}
