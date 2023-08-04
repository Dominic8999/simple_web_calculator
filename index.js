// Increase
function inc1() {
  var num1El = document.querySelector("#p-1");
  var num1 = parseInt(num1El.textContent);
  num1 += 1;
  num1El.textContent = num1;
  console.log("The number was increased");
}

function inc2() {
  var num2El = document.querySelector("#p-2");
  var num2 = parseInt(num2El.textContent);
  num2 += 1;
  num2El.textContent = num2;
  console.log("The number was increased");
}

// Decrease
function dec1() {
  var num1decEl = document.querySelector("#p-1");
  var num1dec = parseInt(num1decEl.textContent);
  num1dec -= 1;
  num1decEl.textContent = num1dec;
  console.log("The number was decreased by 1");
}
function dec2() {
  var num2decEl = document.querySelector("#p-2");
  var num2dec = parseInt(num2decEl.textContent);
  num2dec -= 1;
  num2decEl.textContent = num2dec;
  console.log("The number was decreased by 1");
}