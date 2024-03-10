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

//Declare variables for calculator operations
let firstNumber = '';
let secondNumber = '';
let operator = '';

//This function performs a mathematical operation on two numbers.
//It takes three arguments: an operator in the form of a string('+', '-', '*', '/'), and two numbers.
//Based on the operator provided, it calls the appropriate mathematical function (add, subtract, multiply, divide).
//If the operator is '/', it checks if the second number is zero before performing the division to prevent division by zero.
//If the operator is not one of the four expected operators, it returns an error message.
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 == 0) {
                return "Error: Division by zero is not allowed. Please enter a valid number.";
            }
            return divide(num1, num2);
        default:
            return "Error: Invalid operator. Please enter a valid operator.";
    }
}