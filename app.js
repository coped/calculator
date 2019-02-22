// For operands
document.getElementById('0').addEventListener('click', () => {
    display.textContent += '0';
});
document.getElementById('1').addEventListener('click', () => {
    display.textContent += '1';
});
document.getElementById('2').addEventListener('click', () => {
    display.textContent += '2';
});
document.getElementById('3').addEventListener('click', () => {
    display.textContent += '3';
});
document.getElementById('4').addEventListener('click', () => {
    display.textContent += '4';
});
document.getElementById('5').addEventListener('click', () => {
    display.textContent += '5';
});
document.getElementById('6').addEventListener('click', () => {
    display.textContent += '6';
});
document.getElementById('7').addEventListener('click', () => {
    display.textContent += '7';
});
document.getElementById('8').addEventListener('click', () => {
    display.textContent += '8';
});
document.getElementById('9').addEventListener('click', () => {
    display.textContent += '9';
});
document.getElementById('.').addEventListener('click', () => {
    display.textContent += '.';
});
// For operators
document.getElementById('+').addEventListener('click', () => {
    display.textContent += ' + ';
});
document.getElementById('-').addEventListener('click', () => {
    display.textContent += ' - ';
});
document.getElementById('*').addEventListener('click', () => {
    display.textContent += ' * ';
});
document.getElementById('/').addEventListener('click', () => {
    display.textContent += ' / ';
});
// Equals button logic
document.getElementById('equals').addEventListener('click', () => {
    input = display.textContent.split(' ');
    display.textContent = operate(Number(input[0]), Number(input[2]), input[1]);
});
// Clear button logic
document.getElementById('clear').addEventListener('click', () => {
    display.textContent = '';
});
// Auto evaluate at |operand operator operand| case
let operatorButtons = Array.from(document.querySelectorAll('.operator'));
operatorButtons.forEach(button => button.addEventListener('click', () => {
    let input = display.textContent.split('');
    console.log(input);
}))
// Delete button logic
document.getElementById('delete').addEventListener('click', () => {
    let input = display.textContent.split('');
    if (input[input.length - 2] === '+' || input[input.length - 2] === '-' || input[input.length - 2] === '*' || input[input.length - 2] === '/') {
        input.splice(input.length - 3, 3);
    } else if (input[input.length - 1 === ' ']) {
        input.splice(input.length - 2, 2);
    } else {
        input.splice(input.length - 1 ,1);
    }
    display.textContent = input.join('');
});
// Logic for operations
const operation = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        if (b === 0) {
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
        case '-':
            return operation.subtract(a, b);
        case '*':
            return operation.multiply(a, b);
        case '/':
            return operation.divide(a, b);
        default:
            return 'Syntax Error';
    }
}