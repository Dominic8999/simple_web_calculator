// Increase
function inc1() {
  var num1El = document.querySelector("#p-1");
  var num1 = parseInt(num1El.textContent);
  num1 += 1;
  num1El.textContent = num1;
  console.log("The number was increased by +1");
}

function inc2() {
  var num2El = document.querySelector("#p-2");
  var num2 = parseInt(num2El.textContent);
  num2 += 1;
  num2El.textContent = num2;
  console.log("The number was increased by +1");
}

// Decrease
function dec1() {
  var num1decEl = document.querySelector("#p-1");
  var num1dec = parseInt(num1decEl.textContent);
  num1dec -= 1;
  num1decEl.textContent = num1dec;
  console.log("The number was decreased by -1");
}
function dec2() {
  var num2decEl = document.querySelector("#p-2");
  var num2dec = parseInt(num2decEl.textContent);
  num2dec -= 1;
  num2decEl.textContent = num2dec;
  console.log("The number was decreased by -1");
}

// reset 
function reset1() {
  var num1resetEl = document.querySelector("#p-1");
  var num1reset = 0;
  num1resetEl.textContent = num1reset;
  console.log("The first number was reset");
}
