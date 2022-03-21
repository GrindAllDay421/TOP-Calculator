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
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

const ops = document.querySelectorAll('.operator');
let displayValue = document.querySelector('.displayText');
const nums = document.querySelectorAll('.number');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
let opSelected = false;
let equationReady = false;
let number1;
let number2;
let currentOp;

const numClicked = function() {
  if (opSelected === true) {
    displayValue.textContent = '';
    equationReady = true;
    opSelected = false;
  }
  let newDisplay = document.createTextNode(this.textContent);
  displayValue.appendChild(newDisplay);
}

const operatorClick = function() {
  opSelected = true;

  if(number1 === undefined) {
    number1 = Number(displayValue.textContent);
    currentOp = this.textContent;
  } else if(equationReady === true) {
    number2 = Number(displayValue.textContent);

    if(number2 === 0 && currentOp === '/') {
      displayValue.textContent = 'nope';
    } else {
    number1 = operate(currentOp, number1, number2);
    displayValue.textContent = number1;
    number2 = undefined;
    equationReady = false;
    currentOp = this.textContent;
    }
  }
  
  if(number2 === undefined && currentOp === undefined) {
    currentOp = this.textContent;
  } 
}

clear.addEventListener('click', () => {
  number1 = undefined;
  number2 = undefined;
  currentOp = undefined;
  displayValue.textContent = '';
  opSelected = false;
  equationReady = false;
});

equals.addEventListener('click', () => {
  if(equationReady === true) {
    number2 = Number(displayValue.textContent);

    if(number2 === 0 && currentOp === '/') {
      displayValue.textContent = 'nope';
    } else {
    number1 = operate(currentOp, number1, number2);
    displayValue.textContent = number1;
    number2 = undefined;
    currentOp = undefined;
    opSelected = false;
    equationReady = false;
    }
  }
});

for (i of ops) {
   i.addEventListener('click', operatorClick);
 }

for (i of nums) {
  i.addEventListener('click', numClicked);
}