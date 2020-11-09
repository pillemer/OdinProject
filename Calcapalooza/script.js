// variables
const buttons = document.querySelectorAll('button');
const disp = document.querySelector('.display');
let currentOperator = 'add';
let firstNumber = 0;
let secondNumber = 0;
let prevKey = '';


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className == 'number') {
            // button is a number
            secondNumber += parseInt(button.id)
            disp.innerHTML = secondNumber;
        }
        else {
            // button is an operator
            switch (button.id) {
            case 'divide':
            case 'multiply':
                console.log('multipressed.')
                if (secondNumber == '') {
                    console.log('second is zero.')
                    secondNumber = 1;
                }
                currentOperator = button.id;
                firstNumber = operate(currentOperator, firstNumber, secondNumber)
                secondNumber = ''
                disp.innerHTML = firstNumber;
            case 'subtract':
                if (secondNumber == '') {
                    secondNumber = 0;
                }
                currentOperator = button.id;
                break;
            case 'add':
                currentOperator = button.id
                button.isDepressed = true;
                firstNumber = (operate(currentOperator, firstNumber, secondNumber));
                secondNumber = 0;
                disp.innerHTML = firstNumber;
                break;

            case 'result':
                if (firstNumber)
                break;

            case 'clear':
                currentOperator = 'add';
                firstNumber = 0;
                secondNumber = 0;
                prevKey = '';
                disp.innerHTML = firstNumber;
                break;

            }
        }



    









        // console.log('operator: ' +currentOperator)
        // console.log('first: '+firstNumber)
        // console.log('second: '+secondNumber)
        // console.log(disp.innerHTML[0])

        // if (button.className == 'number') {
        //     if (disp.innerHTML[0] == 0) {
        //         disp.innerHTML = disp.innerHTML.substring(1);
        //     }
        //     if (first) {
        //         firstNumber += button.id
        //         disp.innerHTML = firstNumber
        //     } 
        //     else { 
        //         secondNumber += button.id
        //         disp.innerHTML = secondNumber
        //     }
            
        // }
        // else {
        //     ans = operate(currentOperator, parseInt(firstNumber), parseInt(secondNumber));
        //     disp.innerHTML = ans;
        //     firstNumber = disp.innerHTML; 
        //     secondNumber = '';
        //     switch (button.id) {
        //         case 'result':
        //             currentOperator = 'add'
        //             first = true;
        //             break;
        //         case 'add':
        //         case 'subtract':
        //         case 'multiply':
        //         case 'divide':
        //             currentOperator = button.id;
        //             first = !first;
        //             break;
        //         case 'clear':
        //             currentOperator = 'add'
        //             firstNumber = '' 
        //             secondNumber = ''
        //             disp.innerHTML = ''
        //             first = true;
        //             break;   
        //     }
        // }
        console.log('**pressed** '+ button.id)
        console.log('operator: ' +currentOperator)
        console.log('first: '+firstNumber)
        console.log('second: '+secondNumber)
        console.log('display: '+disp.innerHTML)
    });
  });




function operate(operator) {
    if (arguments.length < 3) {
        return 'not enough arguments'
    }
    for (let i in arguments) {
        if (arguments[i] == ''){
            arguments[i] = 0;
        }
    }
    x = parseFloat(arguments[1]);
    y = parseFloat(arguments[2]);
    if (operator == 'add') {
        return x + y;
    }
    if (operator == 'subtract') {
        return x - y;
    }
    if (operator == 'multiply') {
        return x * y;
    }
    if (operator == 'divide') {
        if (y == 0) {
            return 'Computer says: "No."'
        };
        return x / y;
    }
    
}
