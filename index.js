function updateNumber(elementId, operation) {
  let numEl = document.querySelector(elementId);
  let num = parseInt(numEl.textContent);

  if (operation === "inc") {
    num += 1;
  } else if (operation === "dec") {
    num -= 1;
  } else if (operation === "reset") {
    num = 0;
  }

  numEl.textContent = num;
  console.log("The number was updated");
}

function inc1() {
  updateNumber("#p-1", "inc");
}

function inc2() {
  updateNumber("#p-2", "inc");
}

function dec1() {
  updateNumber("#p-1", "dec");
}

function dec2() {
  updateNumber("#p-2", "dec");
}

function reset1() {
  updateNumber("#p-1", "reset");
}

function reset2() {
  updateNumber("#p-2", "reset");
}

function add() {
  let numEl1 = document.querySelector("#p-1");
  let numEl2 = document.querySelector("#p-2");
  let resultEl = document.querySelector("#p-3");

  let num1 = parseInt(numEl1.textContent);
  let num2 = parseInt(numEl2.textContent);

  let result = num1 + num2;

  resultEl.textContent = result;  // Update the result paragraph
  console.log("Numbers were added");
}

function substract() {
  let numEl1 = document.querySelector("#p-1");
  let numEl2 = document.querySelector("#p-2");
  let resultEl = document.querySelector("#p-3");

  let num1 = parseInt(numEl1.textContent);
  let num2 = parseInt(numEl2.textContent);

  let result = num1 - num2;

  resultEl.textContent = result;  // Update the result paragraph
  console.log("Numbers were added");
}

function divide() {
  let numEl1 = document.querySelector("#p-1");
  let numEl2 = document.querySelector("#p-2");
  let resultEl = document.querySelector("#p-3");

  let num1 = parseInt(numEl1.textContent);
  let num2 = parseInt(numEl2.textContent);

  let result = num1 / num2;

  resultEl.textContent = result;  // Update the result paragraph
  console.log("Numbers were added");
}

function multiply() {
  let numEl1 = document.querySelector("#p-1");
  let numEl2 = document.querySelector("#p-2");
  let resultEl = document.querySelector("#p-3");

  let num1 = parseInt(numEl1.textContent);
  let num2 = parseInt(numEl2.textContent);

  let result = num1 * num2;

  resultEl.textContent = result;  // Update the result paragraph
  console.log("Numbers were added");
}