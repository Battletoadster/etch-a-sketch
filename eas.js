const gridContainer = document.querySelector(".grid-container");

function initializeGrid(rows, cols){
    for(let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            gridContainer.append(square);
        }
    }
}

initializeGrid(16,16);