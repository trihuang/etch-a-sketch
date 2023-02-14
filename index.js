const grid = document.querySelector(".grid");

// Initialize a 16 x 16 grid

function initializeGrid() {
    for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
}

initializeGrid();