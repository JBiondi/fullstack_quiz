const selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');
const selectionProgramming = document.querySelector('.selection-programming');

// let quizzesArray;
let relevantQuizID;


// Add event listeners
if (selectionVideoGameQuotes) {
    selectionVideoGameQuotes.addEventListener('click', selectedVGQuotes);
    selectionProgramming.addEventListener('click', selectedProgramming);
}


function selectedVGQuotes() {

    // Remove event listeners
    selectionVideoGameQuotes.removeEventListener('click', selectedVGQuotes);
    selectionProgramming.removeEventListener('click', selectedProgramming);
    
    // Tell the backend that we've chosen this quiz
    relevantQuizID = 1
    sendQuizID()

}

function sendQuizID() {
    const payload = {
        'relevant_id': relevantQuizID
    };

    return fetch('someURL?', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        // This part maybe checks for HTTP errors?
        .then(response => response.json())
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
