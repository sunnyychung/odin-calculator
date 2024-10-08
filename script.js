let num1;
let operator;
let num2;

let displayValue;

const display = document.querySelector(".result");
const operation = document.querySelector(".operation");

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        let buttonText = event.target.innerText;
        let buttonClass = event.target.className;

        if (buttonClass == "num") {
            if (num1 && !operator) {
                operator = display.textContent;
                display.textContent = "";
            }

            display.textContent += buttonText;
        }

        if (buttonClass == "op") {
            if (!num1) {
                num1 = display.textContent;
            }
            if (num1 && operator) {
                num2 = display.textContent;
                display.textContent = calculate(num1, num2, operator);

                num1 = display.textContent;
                operator = undefined;
                num2 = undefined;
            }

            display.textContent = "";
            display.textContent += buttonText;
        }

        if (buttonText == "C") {
            display.textContent = display.textContent.slice(0, -1);
        }

        if (buttonText == "AC") {
            allClear();
        }

        if (buttonText == "=") {
            num2 = display.textContent;

            if ((num1 == 0 || num2 == 0) && operator == "÷") {
                display.textContent = "MATH ERROR";
                setTimeout(allClear, 2000);
            }
            else if (num1 && num2 && operator) {
                display.textContent = calculate(num1, num2, operator);
                
                num1 = display.textContent;
                operator = undefined;
                num2 = undefined;
            }
            else {
                display.textContent = "SYNTAX ERROR";
            }
        }

        if (buttonText == "." && !display.textContent.includes("."))  {
            display.textContent += ".";
        }

        if (buttonText == "%" && display.textContent) {
            display.textContent = percentage(display.textContent);
        }

        operation.textContent = num1 ? num1 : "";
        operation.textContent += num2 ? num2 : "";
        operation.textContent += operator ? operator : "";
        
    })
});

function calculate(num1, num2, operator) {
    num1.includes(".") ? Math.round(num1 * 100) / 100 : num1;
    num2.includes(".") ? Math.round(num2 * 100) / 100 : num2;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    operator = operator.replace(/\./g, "");

    return operate(num1, operator, num2);
}

function allClear() {
    display.textContent = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
}

function percentage(num) {
    return num.replace(/\%/g, "") / 100;
}


function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
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
    return a / b;
};