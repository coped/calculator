// To give buttons their function
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener("click", () => {
    operatorList = ["+", "−", "*", "/"];
    input = display.textContent.trim().split(" ");

    switch (button.classList[1]) {
        case "numbers":
            return display.textContent += event.target.innerText;
        case "operators":
            // Auto evaluate first two numbers at input of second operator
            if (operatorList.includes(input[1]) && input[2]) {
                 display.textContent = Math.floor((operate(Number(input[0]), input[1], Number(input[2]))) * 10000) / 10000;
            }
            if (operatorList.includes(input[1]) && !input[2]) {
                display.textContent = `${input[0]} ${event.target.innerText} `;
            } else {
            display.textContent += ` ${event.target.innerText} `;
            }
            break;
    }

    switch (button.id) {
        case "negative":
            return display.textContent += "-";
        case "equals":
            if (!input[2]) {
                display.textContent;
            } else {
                display.textContent = Math.floor((operate(Number(input[0]), input[1], Number(input[2]))) * 10000) / 10000;
            }
            break;
        case "clear":
            return display.textContent = "";
        case "delete":
            untrimmedInput = display.textContent.split("");
            // Because operators are surrounded by spaces
            if (operatorList.includes(input[input.length - 1])) {
                untrimmedInput.splice(untrimmedInput.length - 3, 3);
            } else {
                untrimmedInput.splice(untrimmedInput.length - 1, 1);
            }
        
            display.textContent = untrimmedInput.join("");
            break;
    }
}));

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
        if (b == "0") {
            return "C'mon, you know better.";
        } else {
            return a / b;
        }
    }
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
    }
}