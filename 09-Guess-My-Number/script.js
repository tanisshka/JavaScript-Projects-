"use strict";
let message_content = document.querySelector(".message");
let score_content = document.querySelector(".score");
let highscore_content = document.querySelector(".highscore");
let guess = document.querySelector(".guess");
let btnCheck = document.querySelector(".check");
let number = document.querySelector(".number");
let btnAgain=document.querySelector(".again");
let randomNo = Math.floor(Math.random() * 20) + 1;
console.log(randomNo);
let score = 20;
let highscore = 0;


score_content.innerHTML = 20;
highscore_content.innerHTML = 0;

const displaymessage = function (message) {
  message_content.textContent = message;
};

btnCheck.addEventListener("click", function () {
  const guess_value = Number(guess.value);
  if (!guess_value) {
    displaymessage("⛔No Number");
  } else if (guess_value !== randomNo) {
    if (score > 1) {
      if (guess_value > randomNo) {
        displaymessage("📈Too High");
        score--;
        score_content.innerHTML = score;
      } else {
        displaymessage("📉Too Low");
        score--;
        score_content.innerHTML = score;
      }
    }else{
        score=0;
        score_content.innerHTML=score;
        displaymessage("You lost the game!")
    }
  }
  else{
    displaymessage('🎉Correct Number');
    document.querySelector('body').style.background='#60b347';
    number.style.width='30rem';
    number.textContent=randomNo;
    if(score>highscore){
        highscore=score;
        highscore_content.textContent=highscore;
    }
  }
});


btnAgain.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor="#222";
    number.style.width='15rem';
    displaymessage('Start guessing');
    score=20;
    score_content.textContent=score;
    guess.value=null;
    number.textContent="?";
    randomNo=Math.floor(Math.random()*20+1)

})
