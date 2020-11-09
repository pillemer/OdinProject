let buttons = document.querySelectorAll('button')

buttons.forEach( (button) => { 
    button.addEventListener('click', () => {
        // under this is place for buttons pressed
            number button clicked:
                save number and display
        







        // above this
    })
})

// calculator functions

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
