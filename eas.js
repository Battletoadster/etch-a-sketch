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
                square.classList.add("colored");
            });
            square.style.flexBasis = `calc(100%/${rows})`;
            gridContainer.append(square);
        }
    }
}

initializeGrid(16, 16);
