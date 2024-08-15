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
                if (num1.includes(".") || num2.includes(".")) {
                    Math.round(myNumber * 100) / 100;
                }

                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                operator = operator.replace(/\./g, "");


                display.textContent = operate(num1, operator, num2);
                
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

        if (buttonText == "%") {
            display.textContent += ".";
        }
    })
});

function allClear() {
    display.textContent = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
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