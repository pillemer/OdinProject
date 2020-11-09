/* 
Main issues left to tackle:
- can't switch operators after selecting one as it will reset the values
- can't deal with undefined values at all... (divide by 0)
TODO:
- add a decimal point button
- add a backspace button
- add keyboard support
- make it look pretty
*/


function getHistory() {
    return document.querySelector('#history-value').innerHTML;
}
function getOutput() {
    return document.querySelector('#output-value').innerHTML;
}
function setHistory(operand) {
    document.querySelector('#history-value').innerHTML = operand;
}
function setOutput(operand) {
    document.querySelector('#output-value').innerHTML = operand;
}
function getOperator() {
    return document.querySelector('#operator-value').innerHTML;
} // unused?
function setOperator(operator) {
    document.querySelector('#operator-value').innerHTML = operator;
}

let activeOperator = null;
let evaluated = false;

// operator buttons
const operators = document.querySelectorAll('.operator')
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        x = getHistory();
        y = getOutput();
        switch (operator.id) {
            case 'clear':
                // clears the screen
                setHistory('');
                setOutput('');
                setOperator('');
                break;
            case 'equals':
                if ((activeOperator != null) && (x != '') && (y != '')) {
                    console.log(`operator= ${activeOperator}, x=${x}, y=${y}`)
                    calculation = calculate(activeOperator, x, y)
                    setOutput(calculation)
                    setHistory('')
                    setOperator('');
                activeOperator = null;
                }
                break;
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
                if ((activeOperator != null) && (x != '') && (y != '')) {
                    calculation = calculate(activeOperator, x, y)
                    setOutput(calculation)
                    evaluated = true;
                    setHistory('')
                    setOperator(operator.innerHTML)
                    activeOperator = operator.id;
                    break;
                }
                setOperator(operator.innerHTML)
                activeOperator = operator.id;
                setHistory(y);
                setOutput('');
                evaluated = false;
                break;
        }
    })
})

// number buttons
const numbers = document.querySelectorAll('.number')
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        currentNumber = getOutput();
        if (evaluated) {
            setHistory(currentNumber);
            currentNumber = '';
        }
        if (currentNumber.length > 18) {
            return;
        }
        if (currentNumber == 0) {
            currentNumber = currentNumber.substring(1)
        }
        currentNumber += number.id
        setOutput(currentNumber)
        

    })
})


// calculation function
function calculate(operator, x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    switch (operator) {
        case 'divide':
            if (y==0) {
                return 'Computer says "NO"'
            }
            else {return x / y};
            break;
        case 'multiply':
            return x * y;
            break;
        case 'subtract':
            return x - y;
            break;
        case 'add':
            return x + y;
            break;
    }
}