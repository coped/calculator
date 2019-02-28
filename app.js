// For number and operator buttons
const numbers = [
    { button: document.getElementById("0"), value: "0" },
    { button: document.getElementById("1"), value: "1" },
    { button: document.getElementById("2"), value: "2" },
    { button: document.getElementById("3"), value: "3" },
    { button: document.getElementById("4"), value: "4" },
    { button: document.getElementById("5"), value: "5" },
    { button: document.getElementById("6"), value: "6" },
    { button: document.getElementById("7"), value: "7" },
    { button: document.getElementById("8"), value: "8" },
    { button: document.getElementById("9"), value: "9" },
    { button: document.getElementById("."), value: "." },
    { button: document.getElementById("negative"), value: "-" },
]
numbers.forEach(number => number.button.addEventListener("click", () => {
    display.textContent += number.value;
}));

const operators = [
    { button: document.getElementById("add"), value: " + " },
    { button: document.getElementById("subtract"), value: " − " },
    { button: document.getElementById("multiply"), value: " * " },
    { button: document.getElementById("divide"), value: " / " },
]
operators.forEach(operator => operator.button.addEventListener("click", () => {
    // Auto evaluate first two numbers at input of second operator
    input = display.textContent.trim().split(" ");
    if (input[1] === "+" || input[1] === "−" || input[1] === "*" || input[1] === "/") {
        if (input[2] !== true) {
            display.textContent = (operate(Number(input[0]), input[1], Number(input[2])));
        }
    }
    display.textContent += operator.value;
}));

// For equals, clear, and delete buttons
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