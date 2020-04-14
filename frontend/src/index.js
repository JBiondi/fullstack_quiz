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

const csrftoken = getCookie('csrftoken');


function selectedVGQuotes() {

    // Remove event listeners
    selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);
    selectionProgramming.removeEventListener('click', selectedProgramming);
    
    // Tell the backend we've chosen this quiz
    let selectedQuizID = 1;


    fetch(`http://localhost:8000/api/quiz_selection_api_endpoint/${selectedQuizID}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
    })
        .then(response => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.forEach(prompt => console.log(prompt))
    });

}


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
