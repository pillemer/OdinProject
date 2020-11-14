

const displayGrid = (() => {
    const gridBox = document.querySelector('.grid');
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gridCell = document.createElement('button');
            gridCell.setAttribute('class', 'gridCell');
            gridCell.setAttribute('id', `${i}${j}`); 
            gridCell.addEventListener('click', () => {
                board.placeMark(`${i}${j}`, 'X');
            });
            gridBox.appendChild(gridCell)
        }
    }
})();

const gameBoard = () => {
    const gridCells = document.querySelectorAll('.gridCell')
    let board = [['', '', ''],
                ['', '', ''],
                ['', '', '']];

    const state = () => {
        console.log(board)
    }

    const placeMark = (index, marker) => {
        let i = index[0];
        let j = index[1];
        board[i][j] = marker;
        for (let i = 0; i < gridCells.length; i++) {
            if (gridCells[i].id == index) {
                gridCells[i].innerHTML = marker;
            }
        }
    }

    return {state, placeMark}
}

const board = gameBoard();