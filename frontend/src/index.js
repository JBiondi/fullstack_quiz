const selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');
const selectionProgramming = document.querySelector('.selection-programming');
const promptAnswerContainer = document.querySelector('.prompt-answer-container');


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


function selectedVGQuotes() {

    // Remove event listeners
    selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);
    selectionProgramming.removeEventListener('click', selectedProgramming);
    
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
}


function selectedProgramming() {
    // Remove event listeners
    selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);
    selectionProgramming.removeEventListener('click', selectedProgramming);
}


