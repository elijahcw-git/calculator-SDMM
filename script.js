let firstOperand = "";
let secondOperand = "";
let value = 0;
let numMemory = 0;
let result = 0;
let hasOperator = false;
let operator = "";
let continuousOperation = false;
let hasDecimal = false;

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
const memorySaveButton = document.getElementById("memory-save");
const memoryRecallButton = document.getElementById("memory-recall");
const memoryClearButton = document.getElementById("memory-clear");
const memoryScreen = document.getElementById("memory");

memorySaveButton.addEventListener("click", () => {
  memory.textContent = secondaryDisplay.textContent;
  numMemory = Number(memory.textContent);
});

memoryRecallButton.addEventListener("click", () => {
  if (!numMemory) return;
  mainDisplay.textContent = numMemory;
  secondOperand = numMemory;
});

memoryClearButton.addEventListener("click", () => {
  memory.textContent = "No Memory";
  numMemory = 0;
});

clearButton.addEventListener("click", () => {
  updateAllDisplays("", "", "");
  firstOperand = secondOperand = "";
  result = 0;
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
  debugger;
  if (!hasOperator && !result) {
    firstOperand += number;
    updateSecondaryDisplay(firstOperand);
  } else {
    secondOperand += String(number);
    updateMainDisplay(secondOperand);
  }
}

operand.forEach((operand) => {
  operand.addEventListener("click", (e) => {
    getOperator(e.target.id);
  });
});

function getOperator(currentOperator) {
  debugger;

  hasDecimal = false;
  if (hasOperator) {
    calculate();
    secondOperand = 0;
    updateMainDisplay("");
  }

  hasOperator = true;
  operator = currentOperator;
  updateOperatorDisplay(operator);
}

equalButton.addEventListener("click", () => {
  debugger;
  if (hasOperator) {
    calculate();
    secondOperand = 0;
    updateOperatorDisplay("");
    mainDisplay.textContent = "";
  }
});

function calculate() {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
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
  operator = "";
  firstOperand = result;
  updateSecondaryDisplay(firstOperand);
  updateMainDisplay(secondOperand);
  updateResultDisplay();
}

function insertDecimal() {
  debugger
  if (hasOperator) {
    secondOperand += ".";
    updateMainDisplay(secondOperand);
  } else {
    firstOperand += ".";
    updateSecondaryDisplay(firstOperand);
  }
}

function updateMainDisplay(value) {
  const number = Number(value);
  mainDisplay.textContent = parseFloat(number.toFixed(3));
}

function updateSecondaryDisplay(value) {
  const number = Number(value);
  secondaryDisplay.textContent = parseFloat(number.toFixed(3));
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
