const gridContainer = document.querySelector(".grid-container");
const regenBtn = document.querySelector(".regen-btn");
let gridSize;

regenBtn.addEventListener("click", () => {
    do {
        gridSize = parseInt(prompt("What should be the width and height of the grid be? (1-100)"));
    }
    while (isNaN(gridSize) || typeof gridSize !== "number" || gridSize <= 0 || gridSize > 100);

    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    initializeGrid(gridSize, gridSize);

});

function initializeGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                let r = random(0,255);
                let g = random(0,255);
                let b = random(0,255);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
            square.style.flexBasis = `calc(100%/${rows})`;
            gridContainer.append(square);
        }
    }
}

function random(min, max) {
    const num = Math.floor(Math.random()* (max - min + 1)) + min;
    return num;
}

initializeGrid(16, 16);
