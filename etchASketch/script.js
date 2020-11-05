const gridSize = 16;

function createGrid(gridSize) {
    const grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (i=1; i <= gridSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.backgroundColor = 'white';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';})
        grid.appendChild(cell);
    }
    const container = document.querySelector('.container');
    container.appendChild(grid);
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
  resetGrid();
});

function resetGrid() {
    cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

createGrid(gridSize);