let firstNum = "";
let secondNum = "";
let numMemory = 0;
let hasOperand = false;
let firstOperator = "";
let secondOperator = "";
let buttonVal = "";

const firstDisplay = document.querySelector(".firstDisplay");
const secondDisplay = document.querySelector(".secondDisplay");

const numButtons = document.querySelectorAll(".numButton");
const operand = document.querySelectorAll(".operand");

const equalButton = document.getElementById("equal");
const decimalButton = document.getElementById("decimal");

const clearButton = document.getElementById('clearButton') 
const deleteButton = document.getElementById('delButton') 

numButtons.forEach((numButtons) => {
  numButtons.addEventListener("click", (e) => {
    getInput(Number(e.target.id));
  });
});

operand.forEach((operand) => {
  operand.addEventListener("click", (e) => {
    getOperand(e.target.id);
  });
});

function getInput(number) {
  if (!hasOperand) {
    firstNum += Number(number);
    firstDisplay.textContent = firstNum;
  } else {
    secondNum += Number(number);
    firstDisplay.textContent = secondNum;
  }
}

equalButton.addEventListener("click", () => {
  calculate(firstNum, secondNum, firstOperator);
});

function getOperand(operator) {
  hasOperand = true;
  secondDisplay.textContent = firstNum;
  firstOperator = operator;
  firstDisplay.innerText = operator;
}

function calculate(firstNum, secondNum, operator) {
  let result = 0;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      firstDisplay.textContent = result;
      return result;
    case "-":
      result = firstNum - secondNum;
      firstDisplay.textContent = result;
      return result;
    case "*":
      result = firstNum * secondNum;
      firstDisplay.textContent = result;
      return result;
    case "/":
      result = firstNum / secondNum;
      firstDisplay.textContent = result;
      return result;
  } 
}
