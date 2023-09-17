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

function operate(operation) {
  const numEl1 = document.querySelector("#p-1");
  const numEl2 = document.querySelector("#p-2");
  const resultEl = document.querySelector("#p-3");

  const num1 = parseInt(numEl1.textContent);
  const num2 = parseInt(numEl2.textContent);

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      console.log("Numbers were added");
      break;
    case "subtract":
      result = num1 - num2;
      console.log("Numbers were subtracted");
      break;
    case "divide":
      result = num1 / num2;
      console.log("Numbers were divided");
      break;
    case "multiply":
      result = num1 * num2;
      console.log("Numbers were multiplied");
      break;
    default:
      console.log("Invalid operation");
      return;
  }
  resultEl.textContent = result;  // Update the result paragraph
}