//Functions for basic operations
function add(a, b) {
    return a + b;
};

function subtract (a, b) { 
    return a - b;
};

function multiply (a, b) {  
    return a * b;
};

function divide (a, b) { 
    return a / b;
};

//This function performs a mathematical operation on two numbers.
//It takes three arguments: an operator in the form of a string('+', '-', '*', '/'), and two numbers.
//Based on the operator provided, it calls the appropriate mathematical function (add, subtract, multiply, divide).
//If the operator is '/', it checks if the second number is zero before performing the division to prevent division by zero.
//If the operator is not one of the four expected operators, it returns an error message.
function operate(operator, num1, num2) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 == 0) {
                return "Error: Division by zero is not allowed. Please enter a valid number.";
            } else {
                result = divide(num1, num2);
            }
            break;
        default:
            return 0;
    }
    return Number(result.toFixed(2));
}

//Declare variables for calculator operations
let firstNumber = '';
let secondNumber = '';
let operator = '';

//Update the display function
function updateDisplay() {
    let display = document.getElementById('display');
    if (firstNumber === '' && secondNumber === '') {
        display.textContent = '0';
    } else {
        display.textContent = secondNumber === '' ? firstNumber : secondNumber;
    }
}

updateDisplay();

// Decimal button
const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    if (operator === '') {
        if (!firstNumber.includes('.')) {
            firstNumber += '.';
        }
    } else {
        if (!secondNumber.includes('.')) {
            secondNumber += '.';
        }
    }
    updateDisplay();
});

// Digit buttons
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator === '') {
            if (!firstNumber.includes('.') || firstNumber.split('.')[1].length < 2) {
                firstNumber += button.textContent;
            }
        } else {
            if (!secondNumber.includes('.') || secondNumber.split('.')[1].length < 2) {
                secondNumber += button.textContent;
            }
        }
        updateDisplay();
    });
});

//Operator buttons
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
            const result = operate(operator, Number(firstNumber), Number(secondNumber));
            firstNumber = result.toString();
            secondNumber = '';
            updateDisplay();
        }
        operator = button.textContent;
    });
});

//Equals button
document.querySelector('.equals').addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        const result = operate(operator, Number(firstNumber), Number(secondNumber));
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
        updateDisplay();
    }
});

//Clear button
document.querySelector('.clear').addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    updateDisplay();
});

window.addEventListener('keydown', (event) => {
    const key = event.key;

    //Check if key is a digit
    if (!isNaN(key)) {
        if (operator === '') {
            if (!firstNumber.includes('.') || firstNumber.split('.')[1].length < 2) {
                firstNumber += key;
            }
        } else {
            if (!secondNumber.includes('.') || secondNumber.split('.')[1].length < 2) {
                secondNumber += key;
            }
        }
    }

    //Check if key is an operator
    else if (['+', '-', '*', '/'].includes(key)) {
        if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
            const result = operate(operator, Number(firstNumber), Number(secondNumber));
            firstNumber = result.toString();
            secondNumber = '';
        }
        operator = key;
    }

    //Check if key is a decimal point
    else if (key === '.') {
        if (operator === '') {
            if (!firstNumber.includes('.')) {
                firstNumber += '.';
            }
        } else {
            if (!secondNumber.includes('.')) {
                secondNumber += '.';
            }
        }
    }

    //Check if key is Enter (for equals)
    else if (key === 'Enter') {
        if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
            const result = operate(operator, Number(firstNumber), Number(secondNumber));
            firstNumber = result.toString();
            secondNumber = '';
            operator = '';
        }
    }

    //Check if key is Escape (for clear)
    else if (key === 'Escape') {
        firstNumber = '';
        secondNumber = '';
        operator = '';
    }
    updateDisplay();
});