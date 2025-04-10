// Sorular ve cevaplar
let questions = [
    {
        question: "What is the capital of the UK?",
        choices: ["London", "Edinburgh", "Cardiff", "Belfast"],
        correctAnswer: "London"
    },
    {
        question: "Which country is NOT part of the UK?",
        choices: ["Scotland", "Wales", "Ireland", "England"],
        correctAnswer: "Ireland"
    }
    // Buraya daha fazla soru ekleyebilirsiniz
];

let currentQuestionIndex = 0;

// Fonksiyon: Soruları göster
function showQuestion() {
    let question = questions[currentQuestionIndex];
    let questionContainer = document.getElementById("question-container");
    
    // Soru metni
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.choices.map((choice, index) => `
                <li><button onclick="checkAnswer('${choice}')">${choice}</button></li>
            `).join('')}
        </ul>
    `;
}

// Soruyu kontrol et
function checkAnswer(selectedAnswer) {
    let question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again!");
    }
    
    // Sonraki soruya geç
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Test complete! Well done.");
    }
}

// Sayfa yüklendiğinde ilk soruyu göster
window.onload = function() {
    showQuestion();
};
