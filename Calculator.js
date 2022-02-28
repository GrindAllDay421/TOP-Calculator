const add = function(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2) {
  return num1 - num2;
}

const multiply = function(num1, num2) {
  return num1 * num2;
}

const divide = function(num1, num2) {
  return num1 / num2;
}

const operate = function(operator, num1, num2) {
  switch(operator) {
    case '+':
      return add(num1, num2);
      console.log('test');
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '*':
      return multiply(num1, num2);
      break;
    case '/':
      return divide(num1, num2);
      break;
  }
}

const ops = document.querySelectorAll('.operator');
let displayValue = document.querySelector('.displayText');
const nums = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
let opSelected = false;
let number1;
let number2;
let currentOp;
let result;

const numClicked = function() {
  if (opSelected === true) {
    displayValue.textContent = '';
    opSelected = false;
  }
  let newDisplay = document.createTextNode(this.textContent);
  displayValue.appendChild(newDisplay);
}

const lockNum = function() {
  number1 = Number(displayValue.textContent);
  opSelected = true;
  currentOp = this.textContent;
}

equals.addEventListener('click', () => {
  number2 = Number(displayValue.textContent);
  number1 = operate(currentOp, number1, number2);
  displayValue.textContent = number1;
});

for (i of ops) {
   i.addEventListener('click', lockNum);
 }

for (i of nums) {
  i.addEventListener('click', numClicked);
}