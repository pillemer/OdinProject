let currentBoard = [['X', 'X', ''],
                    ['O', 'X', 'O'],
                    ['X', 'O', 'O']];


const displayGrid = (() => {
    const gridBox = document.querySelector('.grid');
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gridCell = document.createElement('button');
            gridCell.setAttribute('data-index', `${i},${j}`); 
            console.log(`creating a new button i=${i}, j=${j}`)
            gridCell.addEventListener('click', () => {
                console.log(`put the action taken when clicking a box here.`)
            });
            gridCell.innerHTML = currentBoard[i][j];
            gridBox.appendChild(gridCell)
        }
    }
})();


