

function inc1() {
  var num1El = document.querySelector("#p-1");
  var num1 = parseInt(num1El.textContent);
  num1 += 1;
  num1El.textContent = num1;
  console.log("The number was increased");
}

function inc2() {
  let num2El = document.getElementById("p2");
  var num2 = parseInt(num2El.textContent);
  num2 += 1;
  num2El.textContent = num2;
  console.log("The number was increased");
}
