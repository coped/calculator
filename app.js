function populateDisplay() {
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
}

populateDisplay();

document.getElementById('equals').addEventListener('click', () => {
    input = display.textContent.split(' ');
    display.textContent = operate(input[0], input[2], input[1]);
});

document.getElementById('clear').addEventListener('click', () => {
    display.textContent = '';
});

const operation = {
    add: function(a, b) {
        return Number(a) + Number(b);
    },

    subtract: function(a, b) {
        return Number(a) - Number(b);
    },

    multiply: function(a, b) {
        return Number(a) * Number(b);
    },

    divide: function(a, b) {
        return Number(a) / Number(b);
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
            return 'foobar';
    }
}