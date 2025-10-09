console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
const formElement = event.target.elements;
const math_a = {"numberA"
  numberA : formElement.numberA.value,
};
const math_b = {"numberB"
  numberB : formElement.numberB.value,
};
numberA = numberB.value
event.target.reset();



  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
