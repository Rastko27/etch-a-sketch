const button = document.querySelector(".btn");
let n;
button.addEventListener("click", () => {
    n = prompt("Enter grid size:", 16);
    if(n !== null && !isNaN(n) && n > 0 && n<=100) { // Check if n is valid
        makeGrid();
    }
    else{
        alert("Please enter a valid grid size.");
    }
});

const container = document.querySelector(".container");
function makeGrid(){
    container.innerHTML = ""; // Clears grid
    let gridSize = 700/n;
    let i,j;
    for(i=0;i<n;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(j=0;j<n;j++){
            const gridSingle = document.createElement("div");
            gridSingle.classList.add("grid-single");
            gridSingle.style.width = gridSize + "px";
            gridSingle.style.height = gridSize + "px";
            row.appendChild(gridSingle);
            gridSingle.addEventListener("mouseover", () => {
                gridSingle.style.opacity = "0.5";
            });
        }
    }
}