const selectionVideoGameQuotes = document.querySelector('.selection-vg-quotes');
const selectionProgramming = document.querySelector('.selection-programming');

// let quizzesArray;

let selectedProgramming = false;
let selectedVideoGameQuotes = false;

if (selectionVideoGameQuotes) {
    selectionVideoGameQuotes.addEventListener('click', makeTrueVGQuotes);
    selectionProgramming.addEventListener('click', makeTrueProgramming);
}


function makeTrueVGQuotes() {
    selectedVideoGameQuotes = true;

    // console.log(`VG: ${selectedVideoGameQuotes}`);
    // console.log(`PROG: ${selectedProgramming}`);

    selectionVideoGameQuotes.removeEventListener('click', makeTrueVGQuotes);
    selectionProgramming.removeEventListener('click', makeTrueProgramming);
    
    // Tell the python logic on the backend that we've chosen this quiz

    const relevantQuizID = 1

    // send request

}


function makeTrueProgramming() {
    selectedProgramming = true;
    console.log(`VG: ${selectedVideoGameQuotes}`);
    console.log(`PROG: ${selectedProgramming}`);
    selectionVideoGameQuotes.removeEventListener('click', makeTrueVGQuotes);
    selectionProgramming.removeEventListener('click', makeTrueProgramming);

    // Tell backend we've chosen this quiz
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
