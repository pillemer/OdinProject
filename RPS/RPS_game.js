function parseSelection(selectionNumber) {
    let options = ['', 'Rock', 'Paper', 'Scissors']
return options[selectionNumber]
}

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3) + 1
    return parseSelection(computerSelection)
}

function playRound(playerMove, computerMove){
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

function Game(playerSelection) {

    let wins = 0
    let ties = 0
    let loses = 0
        const playerMove = parseSelection(playerSelection)
        const computerMove = computerPlay()
        result = (playRound(playerMove, computerMove))
        console.log(result)
        if (result.includes('Tie')) {
            ties++
        }                
        if (result.includes('Win')) {
            wins++
        }                
        if (result.includes('Lose')) {
            loses++
        }
        console.log(rounds)
    }
    console.log('So far, you have ' + wins + ' wins, ' + loses + ' loses and ' + ties + ' ties.')
