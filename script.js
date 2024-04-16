// Magic eight ball

// HTML Variables
let inputEl = document.getElementById("question-Input");
let outputEl = document.getElementById("output-answer");
let shakeGif = document.getElementById("eightBallShake");

// Event listener
document.getElementById("shakeBtn").addEventListener("click", shakeBall);

// Function

// play gif then disappear after 2 seconds
function shakeBall() {
  // Random output
  let randNum = Math.floor(Math.random() * 5 + 1);
  console.log(randNum);

  outputEl.innerHTML = "----";

  shakeGif.innerHTML = "<img src='img/8-ball-gif.gif' width='200px' />";
  setTimeout(() => {
    shakeGif.innerHTML = "<p id='eightBallShake'></p>";
  }, 2000);

  setTimeout(() => {}, 2000);
  // If the input has an answer or not
  if (inputEl.value == "") {
    setTimeout(() => {
      outputEl.innerHTML = "Please ask a question...";
    }, 2000);
  } else if (
    inputEl.value.toLowerCase() == "does a magic 8 ball actually work" ||
    inputEl.value.toLowerCase() == "does a magic eight ball actually work" ||
    inputEl.value.toLowerCase() == "does a magic eightball actually work"
  ) {
    setTimeout(() => {
      outputEl.innerHTML = "How dare you doubt me!";
    }, 2000);
  } else if (inputEl.value.toLowerCase() == "Is javascript awesome") {
    setTimeout(() => {
      outputEl.innerHTML = "Javascript is epic";
    }, 2000);
  } else {
    // choosing a random yes/no answer
    setTimeout(() => {
      if (randNum == 1) {
        outputEl.innerHTML = "Without a Doubt";
      } else if (randNum == 2) {
        outputEl.innerHTML = "As I see it, yes.";
      } else if (randNum == 3) {
        outputEl.innerHTML = "Don't count on it";
      } else if (randNum == 4) {
        outputEl.innerHTML = "Outlook not so good";
      } else if (randNum == 5) {
        outputEl.innerHTML = "Concentrate and ask again";
      }
    }, 2000);
  }
}
