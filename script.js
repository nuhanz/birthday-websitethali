// Function to display a "try again" message
function displayTryAgainMessage() {
    alert("TRY Again Thalia or is this even you?");
}

// Function to check answers and navigate to the next question or results
function checkAnswer(questionNumber, selectedAnswer) {
    let correctAnswer;
    switch (questionNumber) {
        case 1:
            correctAnswer = 1; // Change to correct answer index for each question
            break;
        case 2:
            correctAnswer = 1;
            break;
        case 3:
            correctAnswer = 2;
            break;
        case 4:
            correctAnswer = 3;
            break;
        case 5:
            correctAnswer = 1,2,3;
            break;
        default:
            correctAnswer = 0;
            break;
    }

    if (selectedAnswer === correctAnswer) {
        // If answer is correct, navigate to next question or results
        if (questionNumber < 5) {
            window.location.href = `question${questionNumber + 1}.html`;
        } else {
            window.location.href = "results.html";
        }
    } else {
        // If answer is incorrect, show try again message
        displayTryAgainMessage();
    }
}

// Function to handle starting the quiz
function startQuiz() {
    window.location.href = "question1.html";
}
