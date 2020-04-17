let promptsArray = [];
let currentPrompt = 0;
let userCorrectScore = 0;

// Selection screen elements
const chooseHeader = document.querySelector('.choose-h1');
const selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');
const selectionProgramming = document.querySelector('.selection-programming');

// Prompt elements
const promptAnswerContainer = document.querySelector('.prompt-answer-container');
const quizTitle = document.querySelector('.quiz-title');
const choicesContainer = document.querySelector('.choices-container');
const choice0 = document.querySelector('.choice0');
const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const choice3 = document.querySelector('.choice3');

// Answer elements
const correctNotification = document.querySelector('.correct-notification');
const incorrectNotification = document.querySelector('.incorrect-notification');
const nextButton = document.querySelector('.next-button');


// Add event listeners
selectionVideoGameQuotes.addEventListener('click', selectedVGQuotes);
// selectionProgramming.addEventListener('click', selectedProgramming);
choice0.addEventListener('click', revealAnswer);
choice1.addEventListener('click', revealAnswer);
choice2.addEventListener('click', revealAnswer);
choice3.addEventListener('click', revealAnswer);


function getCookie(name) {
    if (!document.cookie) {
      return null;
    }
    const token = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));

    if (token.length === 0) {
      return null;
    }
    return decodeURIComponent(token[0].split('=')[1]);
  }

const csrftoken = getCookie('csrftoken');


function hideSelectionElements() {
    selectionVideoGameQuotes.style.display = 'none';
    selectionProgramming.style.display = 'none';
    chooseHeader.style.display = 'none';
}


function showPromptElements() {
    promptAnswerContainer.style.display = 'block';
    choicesContainer.style.display = 'block';
}


function hideChoices() {
    choicesContainer.style.display = 'none';
}


function showNextButton() {
    nextButton.style.display = 'block';
}

function resetStats() {
    userCorrectScore = 0;
    currentPrompt = 0;
}


function selectedVGQuotes() {

    hideSelectionElements();
    showPromptElements();
    
    // Tell the backend we've chosen this quiz
    const selectedQuizID = 1;


    fetch(`http://localhost:8000/api/quiz_selection_api_endpoint/${selectedQuizID}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
    })
        .then(response => {
            return response.json();
        })
        .then(function populateLayout (data) {
            data.forEach(prompt => console.log(prompt));
            promptAnswerContainer.innerHTML = `${data[0].prompt_text}`;
            choice0.innerHTML = `${data[0].incorrect_answer1}`;
            choice1.innerHTML = `${data[0].incorrect_answer2}`;
            choice2.innerHTML = `${data[0].correct_answer}`;
            choice3.innerHTML = `${data[0].incorrect_answer3}`;
            promptsArray = data;
        })

    quizTitle.innerHTML = 'Video Game Quotes Quiz';
}


function revealAnswer() {
    showNextButton();
    hideChoices();
    promptAnswerContainer.innerHTML = `${promptsArray[0].answer_text}`;

}


