let promptsArray = [];
let currentPrompt = 0;
let lengthOfQuiz = 0;
let userCorrectScore = 0;

// Selection screen elements
const chooseHeader = document.querySelector('.choose-h1');
const selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');
const selectionProgramming = document.querySelector('.selection-programming');

// Prompt elements
const promptAnswerContainer = document.querySelector('.prompt-answer-container');
const quizTitle = document.querySelector('.quiz-title');
const choicesContainer = document.querySelector('.choices-container');
const choice0 = document.querySelector('.choiceIndex0');
const choice1 = document.querySelector('.choiceIndex1');
const choice2 = document.querySelector('.choiceIndex2');
const choice3 = document.querySelector('.choiceIndex3');

// Answer elements
const correctNotification = document.querySelector('.correct-notification');
const incorrectNotification = document.querySelector('.incorrect-notification');
const nextButton = document.querySelector('.next-button');

// Final elements
const userScore = document.querySelector('.user-score');
const returnButton = document.querySelector('.return-button');
const displayNameForm = document.querySelector('.display-name-form')
const highScoreTable = document.querySelector('.high-score-table')


// Add event listeners
if (selectionVideoGameQuotes) {
    selectionVideoGameQuotes.addEventListener('click', userSelectedVGQuotes);
}

if (choice0) {
    choice0.addEventListener('click', revealAnswer);
}

if (choice1) {
    choice1.addEventListener('click', revealAnswer);
}

if (choice2) {
    choice2.addEventListener('click', revealAnswer);
}

if (choice3) {
    choice3.addEventListener('click', revealAnswer);
}

if (nextButton) {
    nextButton.addEventListener('click', nextPrompt);
}

if (returnButton) {
    returnButton.addEventListener('click', returnToStart);
}


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


function hideElement(element) {
    element.style.display = 'none'
}


function showElement(element) {
    element.style.display = 'block'
}


function showSelectionElements() {
    showElement(selectionVideoGameQuotes);
    showElement(selectionProgramming);
    showElement(chooseHeader);
}


function hideSelectionElements() {
    hideElement(selectionVideoGameQuotes);
    hideElement(selectionProgramming);
    hideElement(chooseHeader);
}


function showPromptElements() {
    showElement(promptAnswerContainer);
    showElement(choicesContainer);
}


function showFinalElements() {
    showElement(userScore);
    userScore.innerHTML = `You got ${userCorrectScore} quotes correct out of a possible ${lengthOfQuiz}`
    showElement(returnButton);
    showElement(displayNameForm);
}


function userSelectedVGQuotes() {

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
            choice0.innerHTML = `${data[0].answer0}`;
            choice1.innerHTML = `${data[0].answer1}`;
            choice2.innerHTML = `${data[0].answer2}`;
            choice3.innerHTML = `${data[0].answer3}`;
            promptsArray = data;
            lengthOfQuiz = promptsArray.length;
        })

    quizTitle.innerHTML = 'Video Game Quotes Quiz';
    showElement(quizTitle);
}


function revealAnswer(event) {
    showElement(nextButton);
    hideElement(choicesContainer);
    promptAnswerContainer.innerHTML = `${promptsArray[currentPrompt].answer_text}`;

    // let eventClassArray = event.target.classList;
    if (event.target.classList.contains(promptsArray[currentPrompt].correct_choice)) {
        showElement(correctNotification);
        userCorrectScore += 1;
    }
    else {
        showElement(incorrectNotification);
    }
}


function nextPrompt() {
    currentPrompt += 1;
    hideElement(nextButton);
    hideElement(correctNotification);
    hideElement(incorrectNotification);

    if (currentPrompt < lengthOfQuiz) {
        showPromptElements();
        promptAnswerContainer.innerHTML = `${promptsArray[currentPrompt].prompt_text}`;
        choice0.innerHTML = `${promptsArray[currentPrompt].answer0}`;
        choice1.innerHTML = `${promptsArray[currentPrompt].answer1}`;
        choice2.innerHTML = `${promptsArray[currentPrompt].answer2}`;
        choice3.innerHTML = `${promptsArray[currentPrompt].answer3}`;
    }
    else {
        hideElement(promptAnswerContainer);
        showFinalElements();
    }
}


function resetStats() {
    userCorrectScore = 0;
    currentPrompt = 0;
    lengthOfQuiz = 0;
    promptsArray = [];
}


function returnToStart() {
    hideElement(userScore);
    hideElement(returnButton);
    hideElement(displayNameForm);
    hideElement(quizTitle);

    showSelectionElements();
    resetStats();
}
