let num2El = document.getElementById("p2");
let num1El = document.getElementById("p1");

let num1 = 0;
let num2 = 0;

function inc1() {
  num1 += 1;
  num1El.textContent = num1;
  console.log("The number was increased");
}

function inc2() {
  num2 += 1;
  num2El.textContent = num2;
  console.log("The number was increased");
}
