"use strict";
const RollDicebtn = document.querySelector(".btn--roll");
const Holdbtn = document.querySelector(".btn--hold");
const NewGameBtn = document.querySelector(".btn--new");
const diceImg = document.querySelector(".dice");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// GLOBAL STATE VARIABLES
let activePlayer, currentscore, score, playing;

//Starting conditions
const init = function () {
  activePlayer = 0;
  currentscore = 0;
  score = [0, 0];
  playing = true;

  diceImg.classList.add("hidden");

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};

init();

//Switch Player function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

//Roll dice function
RollDicebtn.addEventListener("click", function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceImg.classList.remove("hidden");
    diceImg.src = `./assets/dice-${dice}.png`;

    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

// HOLD BUTTON
Holdbtn.addEventListener("click", function () {
  if (playing) {
    //1.Add current score to the active player's score's array
    score[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2.Check if the current score is >= 100
    if (score[activePlayer] >= 100) {
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      diceImg.classList.add("hidden");
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

// NEW GAME BUTTON
NewGameBtn.addEventListener("click", function () {
  init();
});
