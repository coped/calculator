// Applying functionality to number and operator buttons
const numbers = Array.from(document.querySelectorAll('.numbers'))
numbers.forEach(number => number.addEventListener("click", () => {
    display.textContent += event.target.innerText;
}));

const operators = Array.from(document.querySelectorAll('.operators'))
operators.forEach(operator => operator.addEventListener("click", () => {
    // Auto evaluate first two numbers at input of second operator
    input = display.textContent.trim().split(" ");
    if (input[1] === "+" || input[1] === "−" || input[1] === "*" || input[1] === "/") {
        if (input[2] !== true) {
            display.textContent = (operate(Number(input[0]), input[1], Number(input[2])));
        }
    }
    display.textContent += ` ${event.target.innerText} `;
}));

// Applying functionality to equals, clear, and delete buttons
document.getElementById("equals").addEventListener("click", () => {
    input = display.textContent.split(" ");
    display.textContent = Math.floor((operate(Number(input[0]), input[1], Number(input[2]))) * 10000) / 10000;
});

document.getElementById("clear").addEventListener("click", () => {
    display.textContent = "";
});

document.getElementById("delete").addEventListener("click", () => {
    let input = display.textContent.trim().split(" ");
    last = input.length - 1;
    let displayContent = display.textContent.split("");

    if (input[last] === "+" || input[last] === "−" || input[last] === "*" || input[last] === "/") {
        // Because operators are surrounded by spaces
        displayContent.splice(displayContent.length - 3, 3);
    } else {
        displayContent.splice(displayContent.length - 1, 1);
    }

    display.textContent = displayContent.join("");
});

// Logic for operations
const operations = {
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
        if (b === "0") {
            alert("C'mon, you know better.");
            return;
        } else {
            return a / b;
        }
    },
}

function operate(a, operator, b) {
    switch (operator) {
        case "+":
            return operations.add(a, b);
        case "−":
            return operations.subtract(a, b);
        case "*":
            return operations.multiply(a, b);
        case "/":
            return operations.divide(a, b);
        default:
            return "Syntax Error";
    }
}