let promptsArray = [];
let currentPrompt = 0;
let lengthOfQuiz = 0;
let userCorrectScore = 0;
let currentID;

// Selection screen elements
const chooseHeader = document.querySelector('.choose-h1');
const selectionVideoGameQuotes = document.querySelector('.selection-option-vg-quotes');
const selectionProgramming = document.querySelector('.selection-option-programming');

// Quiz screen elements
const body = document.body;
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
const userScoreNotification = document.querySelector('.user-score-notification');
const displayNameForm = document.querySelector('.display-name-form');

// Add event listeners
if (selectionVideoGameQuotes) {
    selectionVideoGameQuotes.addEventListener('click', userSelectedVGQuotesQuiz);
}

if (selectionProgramming) {
    selectionProgramming.addEventListener('click', userSelectedDjangoQuiz);
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


function getCookie(name) {
    const token = document.cookie.split(';')
      .map(c => c.trim())
      .filter(c => c.startsWith(name + '='));

    return decodeURIComponent(token[0].split('=')[1]);
}


function hideElement(element) {
    element.style.display = 'none';
}


function showElement(element) {
    element.style.display = 'block';
}


function showFlexElement(element) {
    element.style.display = 'flex';
}


function hideSelectionElements() {
    hideElement(selectionVideoGameQuotes);
    hideElement(selectionProgramming);
    hideElement(chooseHeader);
}


function showPromptElements() {
    showFlexElement(promptAnswerContainer);
    showFlexElement(choicesContainer);
}


function userSelectedVGQuotesQuiz() {
    body.className = 'vg-quotes';
    quizTitle.innerHTML = ' - video game quotes quiz - ';
    correctNotification.innerHTML = '⌖  CORRECT  ⌖';
    incorrectNotification.innerHTML = '⌖  INCORRECT  ⌖';
    nextButton.innerHTML = '➳';

    const quizID = 1;
    getQuiz(quizID);
}


function userSelectedDjangoQuiz() {
    body.className = 'django-prog';
    quizTitle.innerHTML = '- programming with django quiz -';
    correctNotification.innerHTML = '⌨  CORRECT  ⌨';
    incorrectNotification.innerHTML = '⌨  INCORRECT  ⌨';
    nextButton.innerHTML = '>>>';

    const quizID = 2;
    getQuiz(quizID);
}


function getQuiz(selectedQuizID) {
    const csrftoken = getCookie('csrftoken');
    hideSelectionElements();
    showPromptElements();

    fetch(`cozyquiz.com/api/quiz_selection_api_endpoint/${selectedQuizID}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function populateLayout (data) {
            promptAnswerContainer.innerHTML = `${data[0].prompt_text}`;
            choice0.innerHTML = `${data[0].answer0}`;
            choice1.innerHTML = `${data[0].answer1}`;
            choice2.innerHTML = `${data[0].answer2}`;
            choice3.innerHTML = `${data[0].answer3}`;
            promptsArray = data;
            lengthOfQuiz = promptsArray.length;
        })

    showElement(quizTitle);
}


function revealAnswer(event) {
    showFlexElement(nextButton);
    hideElement(choicesContainer);
    promptAnswerContainer.innerHTML = `${promptsArray[currentPrompt].answer_text}`;

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


function showFinalElements() {
    const csrftoken = getCookie('csrftoken');
    showElement(userScoreNotification);
    userScoreNotification.innerHTML = `you got ${userCorrectScore} out of ${lengthOfQuiz}!`
    showElement(displayNameForm);

    fetch(`cozyquiz.com/api/receive_user_score_api_endpoint/${userCorrectScore}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function acquireRelevantID (data) {
            currentID = data
        })
}
