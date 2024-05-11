const container = document.querySelector(".container");
let i,j;
for(i=0;i<15;i++){
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for(j=0;j<15;j++){
        const gridSingle = document.createElement("div");
        gridSingle.classList.add("grid-single");
        row.appendChild(gridSingle);
    }
}
const gridSingles = document.querySelectorAll(".grid-single");
gridSingles.forEach(gridSingle => {
    gridSingle.addEventListener("mouseover", () => {
        gridSingle.style.opacity = "0.5";
    });
})