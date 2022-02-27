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
    case 'add':
      return add(num1, num2);
      break;
    case 'subtract':
      return subtract(num1, num2);
      break;
    case 'multiply':
      return multiply(num1, num2);
      break;
    case 'divide':
      return divide(num1, num2);
      break;
  }
}

const ops = document.querySelectorAll('.operator');
let displayValue = document.querySelector('.displayText');
const nums = document.querySelectorAll('.number');
let number1;

const numClicked = function() {
  console.log(typeof number1);
  
  let newDisplay = document.createTextNode(this.textContent);
  displayValue.appendChild(newDisplay);
}

const lockNum = function() {
  number1 = parseInt(displayValue.textContent, 10);
  displayValue.textContent = '';
  //console.log(typeof numberA);
}

for (i of ops) {
   i.addEventListener('click', lockNum);
 }

for (i of nums) {
  i.addEventListener('click', numClicked);
}