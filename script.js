"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20; // state variable - available in the code and not only in the DOM
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}; // create function instead of repeating self

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //// When there is no input
  if (!guess) {
    displayMessage("No number entered!⛔️");

    //// when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("h1").textContent = "🏆..YOU WIN!..🏆";
    document.querySelector(".check").disabled = true;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //// When guess is wrong
  } else if (guess !== secretNumber && guess < 21 && guess > 0) {
    if (score > 5) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high!" : "📉 Too low!"; // turnery operator
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score = score - 5;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("👾 Try again");
      document.querySelector("h1").textContent = "☠️ GAME OVER ☠️";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").disabled = true;
      document.querySelector("body").style.backgroundColor = "#861a1a";
    }
    ////  When guess in not within the rule set
  } else if (guess < 1 || guess > 20) {
    displayMessage("😵‍💫 Between 1-20");
  }
});

//// Reset the game       //// anonymous handler function because function has no name
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  score = 20;
  document.querySelector(".score").textContent = score;

  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("h1").textContent = "Guess My Number!";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".check").disabled = false;
});

///////////     before refactoring code   //////////

// /// When guess is too high
// } else if (guess > secretNumber && guess < 21) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "📈 Too high!";
//     score = score - 5;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "👾 Try again";
//     document.querySelector("h1").textContent = "☠️ GAME OVER ☠️";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector(".check").disabled = true;
//     document.querySelector("body").style.backgroundColor = "#861a1a";
//   }

//   //// When guess is too low
// } else if (guess < secretNumber && guess > 0) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "📉 Too low!";
//     score = score - 5;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "👾 Try again";
//     document.querySelector("h1").textContent = "☠️ GAME OVER ☠️";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector(".check").disabled = true;
//     document.querySelector("body").style.backgroundColor = "#861a1a";
//   }
