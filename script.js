// Count veriabol
let totalAttempts = 4;
let attempts = 0;
let win = 0;
let lost = 0;

// fainding elements
const form = document.querySelector("form");
const body = document.querySelector(".body");
const guessingNumber = form.querySelector("#guessingNumber");
const submitBtn = form.querySelector("#submitBtn");
const resultText = body.querySelector(".resultText");
const totalAttempt = body.querySelector(".rimainingAttempts");
const rimainingAttempts = document.createElement("h3");

const velo = form.addEventListener("submit", function (event) {
  event.preventDefault();
  let guessNumber = Number(guessingNumber.value);
  guessingNumber.value = "";
  if (attempts == 5) {
    guessingNumber.disabled = true;
    submitBtn.disabled = true;
  } else {
    checkNumber(guessNumber);
  }
});

function checkNumber(guessNumber) {
  const rendomNumber = getNumber(5);
  if (guessNumber == rendomNumber) {
    win++;
    resultText.innerHTML = `You Have Won`;
  } else {
    lost++;
    resultText.innerHTML = `You Have Lost: Rendom Number Was: ${rendomNumber}`;
  }
  totalAttempt.innerHTML = `Total Win: ${win} Total Lost: ${lost}`;
  rimainingAttempts.innerHTML = `Remaining Attempts: ${
    totalAttempts - attempts
  }`;
  body.appendChild(rimainingAttempts);
  attempts++;
}

function getNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

const hello = "hi";
