# Etch-a-Sketch Web Application

A simple and interactive Etch-a-Sketch web application that allows users to create grid-based drawings.

## How to Use

1. **Open the `index.html` file in your web browser.**
2. **Click the "Start" button to begin.**
3. **Enter the desired grid size (between 1 and 100) when prompted.**
4. **Move your mouse over the grid to draw. Each grid cell's opacity will increase as you hover over it.**

### Instructions

- **Start Button**: Click to prompt for grid size and generate the grid.
- **Grid Drawing**: Move the mouse over the grid cells to draw. Each cell will gradually darken as you hover over it.

## Features

- **Dynamic Grid Size**: Users can specify the grid size, creating a flexible drawing canvas.
- **Gradual Opacity Increase**: Each grid cell darkens progressively with repeated mouseovers.

## Implementation

The core functionality is implemented in the `script.js` file, which handles user input, grid generation, and drawing interactions.

### Main Functions

1. **Grid Generation**:
    - `makeGrid()`: Creates a grid based on the user-specified size. Each grid cell is interactive and changes opacity on mouseover.

2. **User Interaction**:
    - `button.addEventListener("click", ...)`: Prompts the user for grid size and initiates grid creation.
    - `gridSingle.addEventListener("mouseover", ...)`: Increases the opacity of each grid cell as the mouse hovers over it.

### Example

```javascript
// Generate a 16x16 grid and interact with it
button.addEventListener("click", () => {
    n = prompt("Enter grid size:", 16);
    if(n !== null && !isNaN(n) && n > 0 && n <= 100) {
        makeGrid();
    } else {
        alert("Please enter a valid grid size.");
    }
});

## Running the Application

To use the Etch-a-Sketch, open the `index.html` file in a web browser. Click the "Start" button, enter the grid size, and start drawing by moving your mouse over the grid.

### Example

1. **Open `index.html` in your web browser**:
    - The start button and container will be displayed.
2. **Start the application**:
    - Click the "Start" button and enter `16` as the grid size. The grid will appear.
3. **Draw on the grid**:
    - Move your mouse over the grid cells to gradually increase their opacity.

### Credits

Etch-a-Sketch Web App built by Rastko Strbac.
