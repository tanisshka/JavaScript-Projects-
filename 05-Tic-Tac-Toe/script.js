// Sounds
let music = new Audio("./assets/music.mp3");
let turn_music = new Audio("./assets/ting.mp3");
let gameover_music = new Audio("./assets/gameover.mp3");

//DOM Elements
let boxes = document.querySelectorAll(".box");
let boxtexts = document.querySelectorAll(".boxtext");
let info = document.querySelector(".info");
let reset = document.querySelector("#button");

//Game State
let gameover = false;
let turn = "X";

// Convert Nodelist to Array
const arr = Array.from(boxes);
const arr1 = Array.from(boxtexts);

// Change turn
const changeTurn = () => (turn === "X" ? "O" : "X");

// Check Win 
const checkWin = () => {
  let boxText = document.getElementsByClassName("boxtext");

  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let row of winPatterns) {
    if (
      boxText[row[0]].innerText !== "" &&
      boxText[row[0]].innerText === boxText[row[1]].innerText &&
      boxText[row[1]].innerText === boxText[row[2]].innerText
    ) {
      gameover = true;
      return row; // return winning pattern
    }
  }

  return null;
};

// Game Logic
arr.forEach((box, index) => {
  let boxtext = box.querySelector(".boxtext");

  box.addEventListener("click", () => {
    if (boxtext.innerText === "" && !gameover) {
      boxtext.innerText = turn;
      turn_music.play();

      // Check win
      const winRow = checkWin();

      if (winRow) {
        winRow.forEach((i) => {
          arr[i].classList.add("winning-box");
        });

        info.innerHTML = `<span class="win-text">${turn} WON!</span>`;
        gameover_music.play();
        return;
      }

      // Check tie
      const filled = arr1.filter((b) => b.innerText !== "").length === 9;
      if (filled) {
        info.innerHTML = `<span class="tie-text">It's a TIE!</span>`;
        gameover = true;
        return;
      }

      // Switch turn
      turn = changeTurn();
      info.innerText = `Turn of ${turn}`;
    }
  });
});

//Reset Game
reset.addEventListener("click", () => {
  arr1.forEach((box) => {
    box.innerText = "";
  });
  arr.forEach((b) => b.classList.remove("winning-box"));

  turn = "X";
  gameover = false;

  info.innerText = `Turn of ${turn}`;
});

