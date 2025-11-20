const questions = [
  {
    question: "Qual é a função do método 'parseInt()' no JavaScript?",
    answers: [
      { text: "Converte uma string em um número inteiro.", correct: true },
      { text: "Converte um número inteiro em string.", correct: false },
      { text: "Retorna um número aleatório entre 0 e 1.", correct: false },
      { text: "Arredonda um número para o inteiro mais próximo.", correct: false }
    ]
  },
  {
    question: "Qual palavra-chave é usada para declarar uma constante?",
    answers: [
      { text: "const", correct: true },
      { text: "let", correct: false },
      { text: "var", correct: false },
      { text: "static", correct: false }
    ]
  },
  {
    question: "Qual método adiciona um novo elemento ao final de um array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "concat()", correct: false }
    ]
  },
  
  {
  question: "Qual método é usado para selecionar um elemento pelo ID no JavaScript?",
  answers: [
    { text: "document.getElementById()", correct: true },
    { text: "document.querySelectorAll()", correct: false },
    { text: "document.getElementsByClassName()", correct: false },
    { text: "document.createElement()", correct: false }
  ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Reiniciar";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
