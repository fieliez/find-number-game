"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number entered!⛔️";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guess > secretNumber && guess < 21) {
    document.querySelector(".message").textContent = "📈 Too high!";
  } else if (guess < secretNumber && guess > 0) {
    document.querySelector(".message").textContent = "📉 Too low!";
  } else if (guess < 1 || guess > 20) {
    document.querySelector(".message").textContent = "😓 Between 1-20 silly";
  }
});
