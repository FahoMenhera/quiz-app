// Step 1: Define your quiz data. You can use an array of objects, where each object represents a quiz question.
// Each object can have properties like 'question', 'options' (an array of options), and 'answer' (the correct option).
let quizData = [
{
    question: "What is your mother's fav food?",
    options: ["Dad's d*ck", "Louda", "Water", "Neighbour"],
    correctAnswer: 3
},
{
    question: "What is 2 + 2",
    options: ["-2", "2", "69", "4"],
    correctAnswer: 0
},
{
    question: "How you call IshowSpeed's dog",
    options: ["Atos", "Ronaldo", "Hau", "Meat"],
    correctAnswer: 1
}
]
// Step 2: Define a variable to keep track of the current question number. Initialize it to 0.
let currentQuestionIndex = 0;
let currentQuestion = quizData[currentQuestionIndex];
let score = 0;
let answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.querySelector(".next-btn");
const question = document.querySelector(".question");
let selectedAnswerIndex;

// Step 3: Define a function to display a question. This function should:
// - Get the current question from the quiz data using the current question number.
// - Update your HTML to display the current question and its options.
// - This will depend on your HTML structure, you'll need to select the relevant elements and update their content.
function showQuestion(){
    let questionNo = currentQuestionIndex + 1;
    question.textContent = questionNo + ". " + currentQuestion.question;

    for(let i = 0; i < currentQuestion.options.length; i++){
        answerButtons[i].textContent = currentQuestion.options[i];
    }
}

function assignBtnIndex(){
    for(let i = 0; i < answerButtons.length; i++){
        answerButtons[i].addEventListener('click', () => {
            selectedAnswerIndex = i;
        });
    }
}

function checkAnswer() {
    if(selectedAnswerIndex === currentQuestion.correctAnswer) {
        score++;
    }
    selectedAnswerIndex = undefined;
    currentQuestionIndex++;

    if(currentQuestionIndex < quizData.length) {
        currentQuestion = quizData[currentQuestionIndex];
        showQuestion();

    } else {
        alert('Quiz finished! Your score is ' + score);
    }
    assignBtnIndex();
}

// Step 5: Attach an event listener to the "Next" button. When the button is clicked, call the answer submission function.
nextBtn.addEventListener("click", () =>{
    checkAnswer();
})

// Step 6: Call the display question function for the first time to start the quiz.
window.onload = function() {
    showQuestion();
    assignBtnIndex();
}