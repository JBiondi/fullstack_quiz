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


// Add event listeners
selectionVideoGameQuotes.addEventListener('click', userSelectedVGQuotes);

choice0.addEventListener('click', revealAnswer);
choice1.addEventListener('click', revealAnswer);
choice2.addEventListener('click', revealAnswer);
choice3.addEventListener('click', revealAnswer);
nextButton.addEventListener('click', nextPrompt);


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


function  hideNextButton() {
    nextButton.style.display = 'none';
}


function showCorrectNotification() {
    correctNotification.style.display = 'block';
}


function hideCorrectNotification() {
    correctNotification.style.display = 'none';
}


function showIncorrectNotification() {
    incorrectNotification.style.display = 'block';
}


function hideIncorrectNotification() {
    incorrectNotification.style.display = 'none';
}


function resetStats() {
    userCorrectScore = 0;
    currentPrompt = 0;
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
}


function revealAnswer(event) {
    showNextButton();
    hideChoices();
    promptAnswerContainer.innerHTML = `${promptsArray[currentPrompt].answer_text}`;

    // let eventClassArray = event.target.classList;
    if (event.target.classList.contains(promptsArray[currentPrompt].correct_choice)) {
        showCorrectNotification()
    }
    else {
        showIncorrectNotification()
    }

}


function nextPrompt() {
    currentPrompt += 1;
    hideNextButton();
    hideCorrectNotification();
    hideIncorrectNotification();

    if (currentPrompt < lengthOfQuiz) {
        showPromptElements();
    }

    promptAnswerContainer.innerHTML = `${promptsArray[currentPrompt].prompt_text}`;
    choice0.innerHTML = `${promptsArray[currentPrompt].answer0}`;
    choice1.innerHTML = `${promptsArray[currentPrompt].answer1}`;
    choice2.innerHTML = `${promptsArray[currentPrompt].answer2}`;
    choice3.innerHTML = `${promptsArray[currentPrompt].answer3}`;
}

