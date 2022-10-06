let firstOperand = "";
let secondOperand = "";
let value = 0;
let numMemory = 0;
let result = 0;
let hasOperator = false;
let operator = "";
let continuousOperation = false;
let hasDecimal = false;
let decimalLength = 0;

const mainDisplay = document.querySelector(".mainDisplay");
const secondaryDisplay = document.querySelector(".secondaryDisplay");
const operatorDisplay = document.querySelector(".operatorDisplay");
const resultDisplay = document.querySelector(".resultDisplay");

const numButtons = document.querySelectorAll(".numButton");
const operand = document.querySelectorAll(".operand");

const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");

const clearButton = document.getElementById("clearButton");
const deleteButton = document.getElementById("delButton");



clearButton.addEventListener("click", () => {
  updateAllDisplays("", "", "");
  firstOperand = secondOperand = "";
  numMemory = result = 0;
  hasOperator = false;
  resultDisplay.textContent = result;
});

decimalButton.addEventListener("click", () => {
  if (!hasDecimal) insertDecimal();
  hasDecimal = true;
});

numButtons.forEach((numButtons) => {
  numButtons.addEventListener("click", (e) => {
    if (mainDisplay.innerText.length < 10) getInput(Number(e.target.id));
  });
});

function getInput(number) {
  if (!hasOperator) {
    firstOperand += number;
    updateMainDisplay(firstOperand);
  } else {
    secondOperand += number;
    updateMainDisplay(secondOperand);
  }
}

operand.forEach((operand) => {
  operand.addEventListener("click", (e) => {
    getOperator(e.target.id);
  });
});

function getOperator(currentOperator) {
  hasDecimal = false;
  if (hasOperator) {
    calculate();
    firstOperand = result.toFixed(3);
    //secondOperand = "";
    operator = currentOperator;
    updateAllDisplays("", result.toFixed(3), operator);
  } else {
    hasOperator = true;
    operator = currentOperator;
    updateAllDisplays("", firstOperand, operator);
  }
}

equalButton.addEventListener("click", () => {
  if (hasOperator) {
    hasDecimal = false;
    calculate();
  }
});

function calculate() {
  firstOperand = Number(firstOperand);
  //secondOperand = Number(secondOperand);
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
  }
  hasOperator = false;
  firstOperand = parseFloat(result);
  secondOperand = "";
  currentOperator = "";
  updateAllDisplays(firstOperand, secondOperand, "");
  updateResultDisplay()
}

function insertDecimal() {
  if (hasOperator) {
    secondOperand += ".";
    updateMainDisplay(secondOperand);
  } else {
    firstOperand += ".";
    updateMainDisplay(firstOperand);
  }
}

function updateMainDisplay(value) {
  mainDisplay.textContent = value;
}

function updateSecondaryDisplay(value) {
  secondaryDisplay.textContent = value;
}

function updateOperatorDisplay(op) {
  operatorDisplay.textContent = op;
}

function updateResultDisplay() {
  resultDisplay.innerText = parseFloat(result.toFixed(3));
}

function updateAllDisplays(main, secondary, operator) {
  updateMainDisplay(main);
  updateSecondaryDisplay(secondary);
  updateOperatorDisplay(operator);
}
