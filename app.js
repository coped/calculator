// For number buttons
const numbers = [
    {element: document.getElementById('0'), value: '0'},
    {element: document.getElementById('1'), value: '1'},
    {element: document.getElementById('2'), value: '2'},
    {element: document.getElementById('3'), value: '3'},
    {element: document.getElementById('4'), value: '4'},
    {element: document.getElementById('5'), value: '5'},
    {element: document.getElementById('6'), value: '6'},
    {element: document.getElementById('7'), value: '7'},
    {element: document.getElementById('8'), value: '8'},
    {element: document.getElementById('9'), value: '9'},
    {element: document.getElementById('.'), value: '.'},
    {element: document.getElementById('negative'), value: '-'},
]
numbers.forEach(number => number.element.addEventListener('click', () => {
    display.textContent += number.value;
}));

// For operators
const operators = [
    {element: document.getElementById('add'), value: ' + '},
    {element: document.getElementById('subtract'), value: ' − '},
    {element: document.getElementById('multiply'), value: ' * '},
    {element: document.getElementById('divide'), value: ' / '},

]
operators.forEach(operator => operator.element.addEventListener('click', () => {
    input = display.textContent.split(' ');
    console.log(input);
    if (input[1] === '+' || input[1] === '−' || input[1] === '*' || input[1] === '/') {
        display.textContent = operate(Number(input[0]), Number(input[2]), input[1]);
    }
    display.textContent += operator.value;
}));

// Equals button logic
document.getElementById('equals').addEventListener('click', () => {
    input = display.textContent.split(' ');
    display.textContent = operate(Number(input[0]), Number(input[2]), input[1]);
});
// Clear button logic
document.getElementById('clear').addEventListener('click', () => {
    display.textContent = '';
});
// Auto evaluate at "number operator number" case
// Delete button logic
document.getElementById('delete').addEventListener('click', () => {
    let input = display.textContent.split('');
    if (input[input.length - 2] === '+' || input[input.length - 2] === '-' || input[input.length - 2] === '*' || input[input.length - 2] === '/') {
        input.splice(input.length - 3, 3);
    } else if (input[input.length - 1 === ' ']) {
        input.splice(input.length - 2, 2);
    } else {
        input.splice(input.length - 1, 1);
    }
    display.textContent = input.join('');
});
// Logic for operations
const operation = {
    add: function (a, b) {
        return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    },

    multiply: function (a, b) {
        return a * b;
    },

    divide: function (a, b) {
        if (b === '0') {
            alert('C\'mon, you know better.');
            return;
        } else {
            return a / b;
        }
    },
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return operation.add(a, b);
        case '−':
            return operation.subtract(a, b);
        case '*':
            return operation.multiply(a, b);
        case '/':
            return operation.divide(a, b);
        default:
            return 'Syntax Error';
    }
}