const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    playRound(1);
  });

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    playRound(2);
  });

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    playRound(3);
  });


let wins = 0
let ties = 0
let loses = 0
updateScore(wins, ties, loses)

//  functions

function updateScore(wins, ties, loses) {
    document.getElementById("ties").innerHTML = "Ties: " + ties;
    document.getElementById("loses").innerHTML = "Loses: " + loses;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
}

function anounceWinner() {
    if (wins > loses) {
    document.getElementById("round").innerHTML = 'YOU WIN!'
    }
    else {
    document.getElementById("round").innerHTML = 'YOU LOSE!'
    }
    wins = 0
    ties = 0
    loses = 0
}

function parseSelection(selectionNumber) {
    let options = ['', 'Rock', 'Paper', 'Scissors']
return options[selectionNumber]
}

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3) + 1
    return parseSelection(computerSelection)
}

function versus(playerMove, computerMove){
    let outcomes = {
    'RockPaper': 'Lose',
    'RockScissors': 'Win',
    'PaperRock': 'Win',
    'PaperScissors': 'Lose',
    'ScissorsRock': 'Lose',
    'ScissorsPaper': 'Win'
    }
    if (playerMove == computerMove) {
        return('Tie! you both chose ' + playerMove)
    }        
    else {
        return(outcomes[playerMove + computerMove] + '! you chose ' + playerMove + ', and computer chose ' + computerMove + '.')
    }
}

function playRound(playerSelection) {
    const playerMove = parseSelection(playerSelection)
    const computerMove = computerPlay()
    result = (versus(playerMove, computerMove))
    document.getElementById("round").innerHTML = result
    if (result.includes('Tie')) {
        ties++
    }                
    if (result.includes('Win')) {
        wins++
    }                
    if (result.includes('Lose')) {
        loses++
    }
    updateScore(wins, ties, loses)
    if ((wins == 5) || (loses == 5)) {
        anounceWinner();
    }
}

