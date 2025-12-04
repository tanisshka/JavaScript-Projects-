"use strict";
const questions = [
  {
    question: "What is 12 × 8?",
    options: ["72", "96", "84", "108"],
    correctAnswer: "96",
  },
  {
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "14"],
    correctAnswer: "12",
  },
  {
    question: "What is 5² + 7²?",
    options: ["49", "74", "89", "25"],
    correctAnswer: "74",
  },
  {
    question: "Solve: 45 ÷ 9",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5",
  },
  {
    question: "What is the value of π (approx)?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    correctAnswer: "3.14",
  },
  {
    question: "What is 30% of 200?",
    options: ["40", "50", "60", "70"],
    correctAnswer: "60",
  },
  {
    question: "Simplify: 3(4 + 5)",
    options: ["18", "27", "12", "36"],
    correctAnswer: "27",
  },
  {
    question: "What is 7³?",
    options: ["343", "49", "240", "512"],
    correctAnswer: "343",
  },
  {
    question: "Solve: 100 – 37",
    options: ["73", "63", "57", "67"],
    correctAnswer: "63",
  },
  {
    question: "Which is a prime number?",
    options: ["21", "33", "17", "27"],
    correctAnswer: "17",
  },
];

let question_content = document.querySelector(".question");
let options = Array.from(document.querySelectorAll(".ans-btn"));
let next_button = document.querySelector("#next-btn");
let tracker_id = document.getElementById("tracker");

let currentQuestionIndex = 0;
let score = 0;

//Set question
function setQuestion() {
  //Change the question content
  question_content.innerHTML = questions[currentQuestionIndex].question;
  //Change the options content
  options.forEach((btn, i) => {
    btn.innerHTML = questions[currentQuestionIndex].options[i];
    btn.disabled = false;
    btn.classList.remove("correct", "wrong");
  });

  //Update the tracker
  tracker_id.innerText = `${currentQuestionIndex + 1} of ${questions.length}`;
}
setQuestion();

//Handle user action
function handleUserClick(e) {
  const selectedBtn = e.target;
  const selectedAnswer = selectedBtn.textContent;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  console.log(selectedAnswer);
  console.log(correctAnswer);
  if (selectedAnswer === correctAnswer) {
    score++;
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("wrong");
  }
  options.forEach((btn) => (btn.disabled = true));
  document.getElementById("next-btn").classList.remove("hide");
}

options.forEach((btn) => {
  btn.addEventListener("click", handleUserClick);
});

//NextQuestion
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setQuestion();
  } else {
    const quizBox = document.getElementById("quizBox");
    quizBox.innerHTML = `
  <h2>Your score: ${score} / ${questions.length}</h2>
  <button class="play-again-btn" onclick="location.reload()">Play Again</button>
`;
  }
}
next_button.addEventListener("click", nextQuestion);
