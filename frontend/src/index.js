const chosenQuizHeader = document.querySelector('.chosen-quiz-header');
const selectionVideoGameQuotes = document.querySelector('.selection-video-game-quotes');
const selectionProgramming = document.querySelector('.selection-programming');

let quizzesArray;


if (selectionVideoGameQuotes) {
    chosenQuizHeader.innerHTML = `You have chosen to take the Video Game Quotes quiz`;
}

if (selectionProgramming){
    chosenQuizHeader.innerHTML = `You have chosen to take the Programming Quiz`;
}


function grabQuizzes() {
    fetch('http://localhost:8000/api/list_of_quizzes_as_api_endpoint/')

    .then(response => {
        return response.json();

    })
    .then(quizzes => {
        console.log(quizzes);
        quizzesArray = quizzes;

    });


}





