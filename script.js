const questions = [
    {
        question: "Qual é a função do método 'parseInt()' no JavaScript?",
        answers: [
            { text: "Converte uma string em um número inteiro.", correct: true },
            { text: "Arredonda um número para o inteiro mais próximo.", correct: false },
            { text: "Retorna um número aleatório entre 0 e 1.", correct: false },
            { text: "Converte um número inteiro em string.", correct: false }
        ]
    },
    {
        question: "Qual palavra-chave é usada para declarar uma constante?",
        answers: [
            { text: "let", correct: false },
            { text: "static", correct: false },
            { text: "const", correct: true },
            { text: "var", correct: false }
        ]
    },
    {
        question: "Qual método adiciona um novo elemento ao final de um array?",
        answers: [
            { text: "concat()", correct: false },
            { text: "shift()", correct: false },
            { text: "push()", correct: true },
            { text: "pop()", correct: false }
        ]
    },
    {
        question: "Qual método é usado para selecionar um elemento pelo ID no JavaScript?",
        answers: [
            { text: "document.querySelectorAll()", correct: false },
            { text: "document.createElement()", correct: false },
            { text: "document.getElementsByClassName()", correct: false },
            { text: "document.getElementById()", correct: true }
        ]
    },
    {
        question: "Qual operador é usado para comparar valores e tipos ao mesmo tempo?",
        answers: [
            { text: "===", correct: true },
            { text: "!=", correct: false },
            { text: "==", correct: false },
            { text: "=", correct: false }
        ]
    },
    {
        question: "Qual método remove o último elemento de um array?",
        answers: [
            { text: "pop()", correct: true },
            { text: "slice()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "Qual função exibe algo no console do navegador?",
        answers: [
            { text: "document.write()", correct: false },
            { text: "prompt()", correct: false },
            { text: "console.log()", correct: true },
            { text: "alert()", correct: false }
        ]
    },
    {
        question: "Qual tipo de dado representa valores verdadeiros ou falsos?",
        answers: [
            { text: "Array", correct: false },
            { text: "Boolean", correct: true },
            { text: "String", correct: false },
            { text: "Number", correct: false }
        ]
    },
    {
        question: "Qual palavra-chave declara uma variável que pode ser alterada?",
        answers: [
            { text: "let", correct: true },
            { text: "static", correct: false },
            { text: "fixed", correct: false },
            { text: "const", correct: false }
        ]
    },
    {
        question: "Qual método converte texto para letras maiúsculas?",
        answers: [
            { text: "toUpperCase()", correct: true },
            { text: "uppercase()", correct: false },
            { text: "capitalize()", correct: false },
            { text: "toLowerCase()", correct: false }
        ]
    },
    {
        question: "Qual símbolo representa o operador lógico 'AND'?",
        answers: [
            { text: "&&", correct: true },
            { text: "!", correct: false },
            { text: "&", correct: false },
            { text: "||", correct: false }
        ]
    },
    {
        question: "Qual método converte um JSON em objeto JS?",
        answers: [
            { text: "JSON.stringify()", correct: false },
            { text: "parseJSON()", correct: false },
            { text: "objectify()", correct: false },
            { text: "JSON.parse()", correct: true }
        ]
    },
    {
        question: "Qual função exibe uma janela com um campo de texto?",
        answers: [
            { text: "confirm()", correct: false },
            { text: "prompt()", correct: true },
            { text: "alert()", correct: false },
            { text: "input()", correct: false }
        ]
    },
    {
        question: "O que significa NaN?",
        answers: [
            { text: "Not a Number", correct: true },
            { text: "Null and Nothing", correct: false },
            { text: "New absolute number", correct: false },
            { text: "No action needed", correct: false }
        ]
    },
    {
        question: "Qual método cria um novo array sem alterar o original?",
        answers: [
            { text: "splice()", correct: false },
            { text: "slice()", correct: true },
            { text: "shift()", correct: false },
            { text: "pop()", correct: false }
        ]
    },
    {
        question: "Qual operador adiciona 1 ao valor?",
        answers: [
            { text: "+", correct: false },
            { text: "++", correct: true },
            { text: "+=", correct: false },
            { text: "--", correct: false }
        ]
    },
    {
        question: "Qual estrutura é usada para repetir um bloco de código?",
        answers: [
            { text: "case", correct: false },
            { text: "if", correct: false },
            { text: "switch", correct: false },
            { text: "for", correct: true }
        ]
    },
    {
        question: "Qual método transforma um array em uma string?",
        answers: [
            { text: "join()", correct: true },
            { text: "concat()", correct: false },
            { text: "stringify()", correct: false },
            { text: "split()", correct: false }
        ]
    },
    {
        question: "Qual estrutura do JavaScript permite tratar erros no código?",
        answers: [
            { text: "try...catch", correct: true },
            { text: "if...else", correct: false },
            { text: "for...in", correct: false },
            { text: "switch", correct: false }
        ]
    },
    {
        question: "Qual evento é disparado quando um botão é clicado?",
        answers: [
            { text: "submit", correct: false },
            { text: "load", correct: false },
            { text: "press", correct: false },
            { text: "click", correct: true }
        ]
    },
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

function updateProgress() {
    const progressText = document.getElementById("progress-text");
    const progressFill = document.getElementById("progress-fill");

    let current = currentQuestionIndex + 1;
    let total = questions.length;

    progressText.innerText = `${current} — ${total}`;

    let percent = (current / total) * 100;
    progressFill.style.width = percent + "%";
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    updateProgress();
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
    questionElement.innerHTML = `🎉 Parabéns você acertou ${score} de ${questions.length} !`;
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


