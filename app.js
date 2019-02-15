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
        return a / b;
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