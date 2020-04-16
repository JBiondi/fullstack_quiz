// Selection screen elements
const chooseHeader = document.querySelector('.choose-h1');
const selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');
const selectionProgramming = document.querySelector('.selection-programming');

// Quiz elements
const promptAnswerContainer = document.querySelector('.prompt-answer-container');
const quizTitle = document.querySelector('.quiz-title');
const nextButton = document.querySelector('.next-button');
const choicesContainer = document.querySelector('.choices-container');
const choice0 = document.querySelector('.choice0');
const choice1 = document.querySelector('.choice1');
const choice2 = document.querySelector('.choice2');
const choice3 = document.querySelector('.choice3');

//
const correctNotification = document.querySelector('.correct-notification');
const incorrectNotification = document.querySelector('.incorrect-notification');


// Add event listeners
if (selectionVideoGameQuotes) {
    selectionVideoGameQuotes.addEventListener('click', selectedVGQuotes);
    selectionProgramming.addEventListener('click', selectedProgramming);
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


function showQuizElements() {
    promptAnswerContainer.style.display = 'block';
    nextButton.style.display = 'block';
    choicesContainer.style.display = 'block';

}
function selectedVGQuotes() {

    showQuizElements();

    // Remove event listeners
    selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);
    selectionProgramming.removeEventListener('click', selectedProgramming);

    // Hide choice related elements
    selectionVideoGameQuotes.style.display = 'none';
    selectionProgramming.style.display = 'none';
    chooseHeader.style.display = 'none';
    
    // Tell the backend we've chosen this quiz
    const selectedQuizID = 1;

    let prompts = [];


    fetch(`http://localhost:8000/api/quiz_selection_api_endpoint/${selectedQuizID}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
            'X-Requested-With': 'XMLHttpRequest'
        },
    })
        .then(response => {
            return response.json();
        })
        .then(function populateLayout (data) {
            data.forEach(prompt => console.log(prompt))
            promptAnswerContainer.innerHTML = `${data[0].prompt_text}`
        })

    // Show title
    quizTitle.innerHTML = 'Video Game Quotes'

}


function selectedProgramming() {
    // Remove event listeners
    selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);
    selectionProgramming.removeEventListener('click', selectedProgramming);
}


