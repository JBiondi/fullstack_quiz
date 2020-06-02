let promptsArray = [];
let currentPrompt = 0;
let lengthOfQuiz = 0;
let userCorrectScore = 0;
let currentID;

// Selection screen elements
const chooseHeader = document.querySelector('.choose-h1');
const selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');
const selectionProgramming = document.querySelector('.selection-programming');

// Quiz screen elements
const body = document.body;
const promptAnswerContainer = document.querySelector('.prompt-answer-container');
const quizTitle = document.querySelector('.quiz-title');
const choicesContainer = document.querySelector('.choices-container');
const allChoices = document.querySelectorAll('.choice');
const choice0 = document.querySelector('.choiceIndex0');
const choice1 = document.querySelector('.choiceIndex1');
const choice2 = document.querySelector('.choiceIndex2');
const choice3 = document.querySelector('.choiceIndex3');
const photoCredit = document.querySelector('.photo-credit');

// Answer elements
const correctNotification = document.querySelector('.correct-notification');
const incorrectNotification = document.querySelector('.incorrect-notification');
const nextButton = document.querySelector('.next-button');

// Final elements
const userScoreNotification = document.querySelector('.user-score-notification');
const returnButton = document.querySelector('.return-button');
const displayNameForm = document.querySelector('.display-name-form');

// High score page elements
const highScoreTable = document.querySelector('.high-score-table');
const backButton = document.querySelector('.back-button');


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

if (returnButton) {
    returnButton.addEventListener('click', returnToStart);
}

if (backButton) {
    backButton.addEventListener('click', resetStats);
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
    element.style.display = 'none';
}


function showElement(element) {
    element.style.display = 'block';
}


function showFlexElement(element) {
    element.style.display = 'flex';
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
    showFlexElement(promptAnswerContainer);
    showFlexElement(choicesContainer);
}


function applyVideoGameQuizStyling() {
    promptAnswerContainer.style.fontFamily = 'IM Fell English';
    promptAnswerContainer.style.color = 'brown';
    body.style.backgroundImage = "url('static/img/vg_background2.png')";
    correctNotification.innerHTML = '⌖  CORRECT  ⌖';
    incorrectNotification.innerHTML = '⌖  INCORRECT  ⌖';
    quizTitle.innerHTML = ' - video game quotes quiz - ';
    quizTitle.style.color = '#1f2b2b';
    allChoices.forEach(function (choice) {
        choice.style.backgroundColor = 'lightslategrey';
    })
    nextButton.innerHTML = '➳';
    nextButton.style.color = '#1f2b2b'
    nextButton.style.paddingLeft = '32px';
}


function applyDjangoQuizStyling() {
    promptAnswerContainer.style.fontFamily = 'Cute Font, cursive';
    promptAnswerContainer.style.color = 'ivory'
    body.style.backgroundImage = "url('static/img/django_background5.png')";
    promptAnswerContainer.style.fontSize = '58px';
    correctNotification.innerHTML = '⌨  CORRECT  ⌨';
    correctNotification.style.color = 'ivory';
    incorrectNotification.innerHTML = '⌨  INCORRECT  ⌨';
    incorrectNotification.style.color = 'ivory';
    quizTitle.innerHTML = '- programming with django quiz -';
    quizTitle.style.color = 'cornsilk'
    allChoices.forEach(function (choice) {
        choice.style.backgroundColor = 'cornsilk';
        choice.style.color = '#1f2b2b'
    })
    nextButton.style.paddingLeft = '0px';
    nextButton.style.paddingRight = '10px';
    nextButton.style.fontSize = '75px';
    nextButton.style.color = 'ivory';
    nextButton.style.fontWeight = 'bold';
    nextButton.innerHTML = '>>>';
    showElement(photoCredit);
}


function userSelectedVGQuotesQuiz() {
    applyVideoGameQuizStyling();

    const quizID = 1;
    getQuiz(quizID);
}


function userSelectedDjangoQuiz() {
    applyDjangoQuizStyling();

    const quizID = 2;
    getQuiz(quizID);
}


function getQuiz(selectedQuizID) {

    hideSelectionElements();
    showPromptElements();

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
    showElement(userScoreNotification);
    userScoreNotification.innerHTML = `You got ${userCorrectScore} quotes correct out of a possible ${lengthOfQuiz}`
    showElement(returnButton);
    showElement(displayNameForm);

    fetch(`http://localhost:8000/api/receive_user_score_api_endpoint/${userCorrectScore}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
    })
        .then(response => {
            return response.json();
        })
        .then(function acquireRelevantID (data) {
            currentID = data

            if (data) {
                console.log(currentID)
            }
        })
}


function resetStats() {
    userCorrectScore = 0;
    currentPrompt = 0;
    lengthOfQuiz = 0;
    promptsArray = [];
}


function returnToStart() {
    hideElement(userScoreNotification);
    hideElement(returnButton);
    hideElement(displayNameForm);
    hideElement(quizTitle);

    showSelectionElements();
    resetStats();
}
