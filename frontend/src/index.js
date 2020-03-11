const regularButton = document.querySelector('.regular-button')

regularButton.addEventListener('click', getQuizzes)

function fruitSpam() {
    console.log('fruit fruit fruit fruit')
}

function getQuizzes() {
    fetch('http://localhost:8000/api/list_of_quizzes_as_api_endpoint/')

    .then(response => {
        return response.json();

    })
    .then(quizzes => {
        console.log(quizzes)
    });
}
