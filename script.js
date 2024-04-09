// abre a página newsletter como pop-up
function openPopup() {
    if (window.location.pathname === '/index.html') {
        window.open('./public/newsletter.html', 'popup', 'width=800,height=400');
    } else if (window.location.pathname !== '/index.html') {
        window.open('./newsletter.html', 'popup', 'width=800,height=400');
    }
}

//Carousel página inicial
var radio = document.querySelector('.manual-btn')
var cont = 1
document.getElementById('radio1').checked = true
setInterval(() => {
    proximaImg()
}, 5000)
function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }
document.getElementById('radio'+cont).checked = true    
}

// *** JavaScript quiz *** //

const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");

startBtn.onclick = () => {
    popupInfo.classList.add("active");
    main.classList.add("active");
}

exitBtn.onclick = () => {
    popupInfo.classList.remove("active");
    main.classList.remove("active");
}

continueBtn.onclick = () => {
    quizSection.classList.add("active");
    quizBox.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
   
    showQuestions(0);
    questionCounter(1);
    headerScore();
}
tryAgainBtn.onclick = () => {
    quizBox.classList.add("active");
    resultBox.classList.remove("active");
    nextBtn.classList.remove("active");

     questionCount = 0;
     questionNumb = 1;
     userScore = 0;
     showQuestions(questionCount);
     questionCounter(questionNumb);

     headerScore();
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove("active");
    resultBox.classList.remove("active");
    nextBtn.classList.remove("active");

     questionCount = 0;
     questionNumb = 1;
     userScore = 0;
     showQuestions(questionCount);
     questionCounter(questionNumb);

     headerScore();
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove("active");
    } else {
        showResultBox();
    }
}

const optionList = document.querySelector(".option-list");

function showQuestions(index) {
    const questionsText = document.querySelector(".questions-text");
    questionsText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = "";
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }
    optionList.innerHTML = optionTag;

    const options = document.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++) {
        options[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// Função opção correta
User
function optionSelected(answer) {
    let useAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (useAnswer.includes(correctAnswer)) {
        answer.classList.add("Correta");
        userScore += 1;
        headerScore();
    } else {
        answer.classList.add("Incorreta");

        //se a resposta for incorreta, selecione automaticamente a correta
         for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent.includes(correctAnswer)) {
                optionList.children[i].classList.add("Correta");
            }
        }
     }
    
    questionCounter(questionNumb);
    nextBtn.classList.add("active");
}

function questionCounter(index) {
    const questionTotal = document.querySelector(".question-total");
    questionTotal.textContent = `${index} de ${questions.length} Questions`;
}

function headerScore() {
    const headerScoreText = document.querySelector(".header-score");
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}
function showResultBox() {
    quizBox.classList.remove("active");
    resultBox.classList.add("active");

    const scoreText = document.querySelector(".score-text");
    scoreText.textContent = `Seu Resultado: ${userScore} de ${questions.length}`;
    
    const circularProgress = document.querySelector(".circular-progress");
    const progressValue = document.querySelector(".progress-value");
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;

    let progress = setInterval(()=> {
        progressStartValue++;
        
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#ffc107 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`;



        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }


    }, speed)

}