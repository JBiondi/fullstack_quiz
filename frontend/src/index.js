const selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');
const selectionProgramming = document.querySelector('.selection-programming');

// let quizzesArray;
let relevantQuizID;


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

const csrftoken = getCookie('csrftoken')
console.log(csrftoken)


function selectedVGQuotes() {

    // Remove event listeners
    selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);
    selectionProgramming.removeEventListener('click', selectedProgramming);
    
    // Tell the backend that we've chosen this quiz
    relevantQuizID = 1;

    const payload = {
        'selected_quiz_id': relevantQuizID
    };

    return fetch('http://localhost:8000/api/quiz_selection_api_endpoint/', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },

        body: JSON.stringify(payload),
    })
        // This part maybe checks for HTTP errors?
        .then(response => response.json())


}

// function sendQuizID() {
//     const payload = {
//         'relevant_id': relevantQuizID
//     };
//
//     return fetch('http://localhost:8000/api/quiz_selection_api_endpoint/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//     })
//         // This part maybe checks for HTTP errors?
//         .then(response => response.json())
// }




function selectedProgramming() {
    // Remove event listeners
    selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);
    selectionProgramming.removeEventListener('click', selectedProgramming);

    relevantQuizID = 2
}



//
// function grabQuizzes() {
//     fetch('http://localhost:8000/api/list_of_quizzes_as_api_endpoint/')
//
//     .then(response => {
//         return response.json();
//
//     })
//     .then(quizzes => {
//         console.log(quizzes);
//         quizzesArray = quizzes;
//
//     });
//
// }
