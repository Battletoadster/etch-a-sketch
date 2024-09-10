const gridContainer = document.querySelector(".grid-container");
const regenBtn = document.querySelector(".regen-btn");
const colorBtn = document.querySelector(".color-btn");
const greyscaleBtn = document.querySelector(".grey-btn");
let gridSize;

function initializeGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", blackMode);
            square.style.flexBasis = `calc(100%/${rows})`;
            gridContainer.append(square);
        }
    }
}

regenBtn.addEventListener("click", () => {
    do {
        gridSize = parseInt(prompt("What should be the width and height of the grid be? (1-100)"));
    }
    while (isNaN(gridSize) || typeof gridSize !== "number" || gridSize <= 0 || gridSize > 100);

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    initializeGrid(gridSize, gridSize);

});

colorBtn.addEventListener("click", () => {
    squares = document.querySelectorAll("div.square");
    for (const square of squares) {
        square.removeEventListener("mouseover", blackMode);
        square.addEventListener("mouseover", colorMode);
    }
});

greyscaleBtn.addEventListener("click", () => {
    squares = document.querySelectorAll("div.square");
    for (const square of squares) {
        square.removeEventListener("mouseover", colorMode);
        square.addEventListener("mouseover", blackMode);
    }
})

function blackMode(event) {
    let opacity = parseFloat(window.getComputedStyle(event.target).opacity);
    if ((opacity - 0.1) >= 0) {
        event.target.style.opacity = (opacity-0.2).toString();
    } else {
        event.target.style.opacity = "0";
    }
}

function colorMode(event) {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}



function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

initializeGrid(16, 16);

// square.addEventListener("mouseover", () => {
//     let r = random(0,255);
//     let g = random(0,255);
//     let b = random(0,255);
//     square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// });