let num1;
let operator;
let num2;

let displayValue;

const display = document.querySelector(".display");

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        let buttonText = event.target.innerText;
        let buttonClass = event.target.className;

        if (buttonClass == "num") {
            if (num1) {
                operator = display.textContent;
                display.textContent = "";
            }
            display.textContent += buttonText;
        }

        if (buttonClass == "op") {
            num1 = display.textContent;

            display.textContent = "";
            display.textContent += buttonText;
        }

        if (buttonText == "C") {
            display.textContent = display.textContent.slice(0, -1);
        }

        if (buttonText == "AC") {
            display.textContent = "";
            
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
        }

        if (buttonText == "=") {
            num2 = display.textContent;

            if (num1 && num2 && operator) {
                console.log("Here!");

                num1 = parseInt(num1);
                num2 = parseInt(num2);

                console.log(display.textContent = operate(num1, operator, num2));
            }
        }
    })
});


function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "/":
            return divide(a, b);
    }
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a * b;
};