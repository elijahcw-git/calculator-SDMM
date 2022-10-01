const screen = document.querySelector(".screen");
const numButtons = document.querySelectorAll(".numButton");
const operand = document.querySelectorAll(".operand");
const onButton = document.getElementById("onButton");
const offButton = document.getElementById("offButton");
const delButton = document.getElementById("delButton");

let num1 = num2 = 0;

onButton.addEventListener("click", () => {
  console.log("on");
});

offButton.addEventListener("click", () => {
  console.log("off");
  screen.textContent = "";
});

screen.addEventListener("click", (e) => {
  e.target.textContent = "";
});

delButton.addEventListener("click", (e) => {
  screen.textContent = "";
});

numButtons.forEach((numButtons) => {
  numButtons.addEventListener("click", (e) => {
    if (screen.textContent.length <= 10)
      screen.textContent += e.target.textContent;
  });
});

operand.forEach((operand) => {
  operand.addEventListener("click", (e) => {
        getNums(num1, num2)
    
  });
});

function calculate(num1, operand, num2)
{
    let result = 0;


    switch (operand){
        case '+':
            result = num1 + num2;
            return result;
        case '-':
            result = num1 - num2;
            return result;
        case 'x':
            result = num1 * num2;
            return result;
        case '/':
            result = num1 / num2;
            return result;        
    }
    if (operand === '='){
        screen.textContent = result;
    }
}
